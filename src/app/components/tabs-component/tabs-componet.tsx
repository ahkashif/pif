"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Icon from "../icon/icons";
import StatCard from "./stat-card";
import PioltCard from "../pilot-card/pilot-card";

import { FormState } from "../../libs/store/slices/createPilotSlice";

function TabsComponent({ ...pilotsData }) {
	const [view, setView] = useState("grid");

	useEffect(() => {
		setView("grid");
	}, []);

	return (
		<div>
			<Tabs
				defaultValue="tech"
				className="w-full bg-white">
				<TabsList className="w-full flex justify-start bg-white h-auto border-b border-divider px-30">
					<TabsTrigger
						value="tech"
						className="p-10 min-w-[220px] min-h-[60px] text-subtitle1 text-black data-[state=active]:border-b-[5px] data-[state=active]:border-secondary-brown data-[state=active]:bg-background3">
						Technologies (<span className="text-inherit">20</span>)
					</TabsTrigger>
					<TabsTrigger
						value="pilots"
						className="p-10 min-w-[220px] min-h-[60px] text-subtitle1 text-black data-[state=active]:border-b-[5px] data-[state=active]:border-secondary-brown data-[state=active]:bg-background3">
						Pilots (<span className="text-inherit">33</span>)
					</TabsTrigger>
				</TabsList>
				<div className="w-full p-30 border-b border-divider">
					<div className="flex flex-row items-center justify-between">
						<div>
							<Input
								type="text"
								placeholder="Search"
								className="min-w-[350px] min-h-[50px] p-10"
							/>
						</div>
						<div className="flex flex-row items-center justify-between gap-30">
							<div className="flex flex-row items-center gap-20">
								<div className="text-underlineLink2 underline font-regular flex flex-row gap-10 justify-start items-center text-secondary-brown">
									<Icon
										name="download"
										size={18}
										color={"#bc6322"}
									/>
									<span className="text-secondary-brown">Download report</span>
								</div>
								<div className="text-underlineLink2 underline font-regular flex flex-row gap-10 justify-start items-center text-secondary-brown">
									<Icon
										name="edit"
										size={18}
										color={"#bc6322"}
									/>
									<span className="text-secondary-brown">Edit</span>
								</div>
								<div className="text-underlineLink2 underline font-regular flex flex-row gap-10 justify-start items-center text-secondary-brown">
									<Icon
										name="export"
										size={18}
										color={"#bc6322"}
									/>
									<span className="text-secondary-brown">Export to pilot</span>
								</div>
							</div>

							<div className="flex flex-row rounded-full overflow-hidden border border-secondary-brown">
								<div className={`px-[20px] py-[12px] ${view === "grid" ? "bg-secondary-brown" : ""} min-w-[24px]`}>
									<Icon
										name="grid-view"
										size={24}
										color={"#bc6322"}
										classes={`${view === "grid" ? "invert" : ""}`}
									/>
								</div>
								<div className={`px-[20px] py-[12px] ${view === "list" ? "bg-secondary-brown" : ""} min-w-[24px]`}>
									<Icon
										name="list-view"
										size={24}
										color={"#bc6322"}
										classes={`${view === "list" ? "invert" : ""}`}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<TabsContent
					className="p-30"
					value="tech">
					<div className="flex flex-col gap-20">
						<div className="flex flex-row gap-20 bg-white w-full">
							<StatCard
								name={"Planning"}
								iconName={"planning"}
								count={8}
							/>
							<StatCard
								name={"Assessment"}
								iconName={"assessment"}
								count={5}
							/>
							<StatCard
								name={"Ploting"}
								iconName={"ploting"}
								count={20}
							/>
							<StatCard
								name={"Scaling"}
								iconName={"scaling"}
								count={0}
							/>
						</div>

						<div className="flex flex-col gap-30">
							{pilotsData.pilotsData.map((data: FormState, index: React.Key | null | undefined) => {
								return (
									<PioltCard
										key={index}
										name={data.step1.name}
										description={data.step1.description}
										location={data.step1.location}
										startDate={data.step1.startDate}
										owner={data.step1.owner}
										stage={data.step1.stage}
										objective={data.step1.objective}
										image={data.step1.image}
									/>
								);
							})}
						</div>

						<button
							className={`w-fit mx-auto  px-20 py-[13px] border border-secondary-brown bg-secondary-brown text-white rounded-full text-button font-regular`}
							onClick={() => alert(`clicked for`)}>
							Show more
						</button>
					</div>
				</TabsContent>
				<TabsContent
					className="p-30"
					value="pilots">
					Change your password here.
				</TabsContent>
			</Tabs>
		</div>
	);
}

export default TabsComponent;
