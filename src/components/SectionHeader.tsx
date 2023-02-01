import { FC, ReactNode } from "react";

const SectionHeader: FC<{ text: string; children?: ReactNode }> = ({ text, children }) => {
	return (
		<div className="flex flex-row justify-between align-center">
			<div className="text-med font-medium leading-med font-sans">{text}</div>
			<div>{children}</div>
		</div>
	);
};

export default SectionHeader;
