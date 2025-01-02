import { FormState } from "@/app/libs/store/slices/createPilotSlice";
import React from "react";
import Image from "next/image";
import { renderFullDate } from "@/app/libs/common/utils";
import Icon from "../icon/icons";

const ListView = ({ pilotsData }: { pilotsData: FormState[] }) => {
	return (
		<div className="overflow-x-auto w-full rounded-[10px] border border-divider">
			<table className="min-w-full bg-white">
				<thead className="bg-gray-7 border-b border-divider rounded-[10px] overflow-hidden">
					<tr>
						<th className="text-left p-[15px] text-body3 text-gray-3">
							<div className=" text-body3 font-light text-gray-3 flex flex-row gap-5">
								Pilot ID{" "}
								<Icon
									name={"arrow-down"}
									size={16}
								/>
							</div>
						</th>
						<th className="text-left p-[15px] text-body3 text-gray-3">
							<div className=" text-body3 font-light text-gray-3 flex flex-row gap-5">
								Pilot Name{" "}
								<Icon
									name={"arrow-down"}
									size={16}
								/>
							</div>
						</th>
						<th className="text-left p-[15px] text-body3 text-gray-3">
							<div className=" text-body3 font-light text-gray-3 flex flex-row gap-5">
								Pilot Stage{" "}
								<Icon
									name={"arrow-down"}
									size={16}
								/>
							</div>
						</th>
						<th className="text-left p-[15px] text-body3 text-gray-3">
							<div className=" text-body3 font-light text-gray-3 flex flex-row gap-5">
								Completion Date{" "}
								<Icon
									name={"arrow-down"}
									size={16}
								/>
							</div>
						</th>
						<th className="text-left p-[15px] text-body3 text-gray-3">
							<div className=" text-body3 font-light text-gray-3 flex flex-row gap-5">
								Pilot Contributors{" "}
								<Icon
									name={"arrow-down"}
									size={16}
								/>
							</div>
						</th>
						<th className="text-left p-[15px] text-body3 text-gray-3">
							<div className=" text-body3 font-light text-gray-3 flex flex-row gap-5">
								Comp./Tech. Provider{" "}
								<Icon
									name={"arrow-down"}
									size={16}
								/>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					{pilotsData.map((pilot, index) => (
						<tr
							key={index}
							className="border-b border-b-divider">
							{/* // ! TODO Add Id to form data while putting in DB */}
							{/* <td className="p-[15px] text-body3 text-gray-700">{pilot.step1?.id || "897"}</td> */}
							<td className="p-[15px] text-body3 text-gray-3">{"897"}</td>
							<td className="p-[15px] text-body3 text-gray-3">
								<div className="flex items-center gap-2">
									<div className="flex flex-col gap-5">
										<p className="text-subtitle2 font-semibold">{pilot.step1.name}</p>
										<div className="flex flex-row gap-10 items-center">
											<Image
												src="/avatar-small-1.svg"
												alt={pilot.step1.name}
												className="w-[22px] h-[22px] rounded-full"
												loading="lazy"
												width={22}
												height={22}
											/>
											<p className="text-body3 text-gray-3">by {pilot.step1.owner}</p>
										</div>
									</div>
								</div>
							</td>
							<td className="p-[15px] text-body3">
								<span
									className={`px-[15px] py-5 min-w-[95px] rounded-full text-white text-body2 font-light ${
										pilot.step1.stage === "Planning"
											? "bg-secondary-red"
											: pilot.step1.stage === "Ploting"
											? "bg-other-cyan"
											: pilot.step1.stage === "Assessment"
											? "bg-primary-green"
											: "bg-primary-gold"
									}`}>
									{pilot.step1.stage}
								</span>
							</td>
							<td className="p-[15px] text-body3 text-gray-3">{renderFullDate(pilot.step1.endDate) || "N/A"}</td>
							<td className="p-[15px] text-body3 text-gray-3">{pilot.step2.technologySolution || "N/A"}</td>
							<td className="p-[15px] text-body3 text-gray-3">{pilot.step2.technologySolutionProvider || "N/A"}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ListView;
