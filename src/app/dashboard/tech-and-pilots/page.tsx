"use client";
import TabsComponent from "@/app/components/tabs-component/tabs-componet";
import Text from "@/app/components/text/text";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormState } from "@/app/libs/store/slices/createPilotSlice";

const Pilot: React.FC = () => {
	const [pilotsData, setPilotsData] = useState<FormState[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const getPilotsData = async () => {
		try {
			const DOMAIN = process.env.DOMAIN || "http://localhost:3000";
			const response = await axios.get(`${DOMAIN}/api/common/get-pilots`);
			setPilotsData(response.data.data); // Update state with fetched data
			setLoading(false);
		} catch (error) {
			console.error("Error fetching data:", error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getPilotsData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<div className="p-30 border-b border-divider">
				<div className="flex flex-row justify-between">
					<Text
						value={"Technologies and Pilots"}
						tagName={"h4"}
						classes="text-h4 font-semibold"
					/>

					<Link
						className={`w-fit px-20 py-[13px] border border-secondary-brown bg-secondary-brown text-white rounded-full text-button font-regular`}
						href="/create-new-pilot">
						Create New Pilot
					</Link>
				</div>
			</div>

			{pilotsData ? <TabsComponent pilotsData={pilotsData} /> : <div>No Data Found</div>}
		</div>
	);
};

export default Pilot;
