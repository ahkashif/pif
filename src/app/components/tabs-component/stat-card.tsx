import React from "react";
import Icon from "../icon/icons";

interface StatCardProps {
	name: string;
	iconName: string;
	count: number;
}

function StatCard({ name, iconName, count }: StatCardProps) {
	return (
		<div className="px-30 py-20 rounded-[10px] border border-divider min-w-[120px] flex flex-col items-start gap-30">
			<div className="flex flex-row justify-between min-w-[205px]">
				<p className="text-title2 ">{name}</p>
				<Icon
					name={iconName}
					size={32}></Icon>
			</div>

			<h2 className="text-h1 text-secondary-brown font-semibold">{count}</h2>
		</div>
	);
}

export default StatCard;
