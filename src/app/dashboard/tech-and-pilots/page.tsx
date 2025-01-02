import TabsComponent from "@/app/components/tabs-component/tabs-componet";
import Text from "@/app/components/text/text";
import Link from "next/link";
import React from "react";
import axios from "axios";

async function getPilotsData() {
	try {
		const DOMAIN = process.env.DOMAIN || "http://localhost:3000";
		const response = await axios.get(`${DOMAIN}/api/common/get-pilots`);

		return response.data;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

async function Pilot() {
	const data = await getPilotsData();

	return (
		<div className="">
			<div className="p-30 border-b border-divider">
				<Text
					value={"Technologies and Pilots"}
					tagName={"h4"}
					classes="text-h4 font-semibold"
				/>

				<Link
					className={`w-fit mx-auto  px-20 py-[13px] border border-secondary-brown bg-secondary-brown text-white rounded-full text-button font-regular`}
					href="/create-new-pilot">
					Create New Pilot
				</Link>
			</div>

			<TabsComponent pilotsData={data.data} />
		</div>
	);
}

export default Pilot;
