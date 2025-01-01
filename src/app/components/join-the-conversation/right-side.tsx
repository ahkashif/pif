import React from "react";
import ConvoCard from "./convo-card";
import Button from "../button/button";

function RightSide() {
	return (
		<>
			<ConvoCard
				name="Sustainable Construction Materials"
				timeline={"3 days ago"}
				members={345}
				buttonText={"Label"}
				imageUrl="/community-card-1.jpeg"
			/>

			<ConvoCard
				name="Mobility as a Service solution (MaaS)"
				timeline={"Latest post 1 week ago"}
				members={845}
				buttonText={"Label"}
				imageUrl="/community-card-2.png"
			/>

			<Button
				classes="mt-30 w-fit"
				variant="primary">
				Show All
			</Button>
		</>
	);
}

export default RightSide;
