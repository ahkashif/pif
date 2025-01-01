import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Step1Data {
	owner: string;
	name: string;
	description: string;
	startDate: string;
	endDate: string;
	stage: string;
	objective: string;
	location: string;
	funding: string;
	budgetCurrency: string;
	estimatedBudget: number | string;
	image: string;
	documents: File[];
}

export interface Step2Data {
	companyPortfolio: string;
	sector: string;
	technologySolution: string;
	technologySolutionProvider: string;
	expert: string;
}

export interface Step3Data {
	planningPhase: string;
	plotingPhase: string;
	assessmentPhase: string;
	scalingPhase: string;
}

export interface FormState {
	step1: Step1Data;
	step2: Step2Data;
	step3: Step3Data;
}

const initialState: FormState = {
	step1: {
		owner: "",
		name: "",
		description: "",
		startDate: "",
		endDate: "",
		stage: "",
		objective: "",
		location: "",
		funding: "",
		budgetCurrency: "",
		estimatedBudget: "",
		image: "",
		documents: [],
	},
	step2: {
		companyPortfolio: "",
		sector: "",
		technologySolution: "",
		technologySolutionProvider: "",
		expert: "",
	},
	step3: {
		planningPhase: "",
		plotingPhase: "",
		assessmentPhase: "",
		scalingPhase: "",
	},
};

const pilotFormSlice = createSlice({
	name: "pilotForm",
	initialState,
	reducers: {
		updateStepField(
			state,
			action: PayloadAction<{ step: keyof FormState; field: string; data: Partial<Step1Data | Step2Data | Step3Data> }>
		) {
			const { step, data } = action.payload;

			Object.assign(state[step] as Step1Data | Step2Data | Step3Data, data);
		},
		updateStepData(
			state,
			action: PayloadAction<{ step: keyof FormState; data: Partial<Step1Data | Step2Data | Step3Data> }>
		) {
			const { step, data } = action.payload;
			Object.assign(state[step], data);
		},
		resetStep(state, action: PayloadAction<keyof FormState>) {
			const step = action.payload;
			Object.assign(state[step], initialState[step]);
		},
		resetForm(state) {
			Object.assign(state, initialState);
		},
	},
});

export const { updateStepField, updateStepData, resetStep, resetForm } = pilotFormSlice.actions;

export default pilotFormSlice.reducer;
