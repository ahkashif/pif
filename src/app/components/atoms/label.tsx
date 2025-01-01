import React from "react";
interface LabelProps {
	category: string;
}
function Label({ category }: LabelProps) {
	return (
		<div className="mb-2 text-subtitle2 inline-block bg-primary-gold text-white font-medium px-[15] py-[5] rounded-[50]">
			{category}
		</div>
	);
}

export default Label;
