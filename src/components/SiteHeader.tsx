import { FC } from "react";
import { Image } from "@chakra-ui/react";

import headerImage from "../assets/images/header-image.png";

const SiteHeader: FC = () => {
	return (
		<div className="flex flex-row w-screen h-[420px] bg-dark">
			<Image alt="Formula 1 Rankings" src={headerImage} objectFit="contain" width="full" height="full" />
		</div>
	);
};

export default SiteHeader;
