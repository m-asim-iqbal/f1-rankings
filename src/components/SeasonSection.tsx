import { FC, useContext, useEffect } from "react";
import { Button, Skeleton } from "@chakra-ui/react";

import { GlobalContext } from "../store/GlobalContextProvider";
import SectionHeader from "./SectionHeader";

const SeasonSkeleton: FC<{ isLoaded: boolean }> = ({ isLoaded }) => {
	return <Skeleton isLoaded={isLoaded} height="40px" width="80px" />;
};

const SeasonSection: FC = () => {
	const { seasons, fetchSeasons, setSelectedSeason, selectedSeason, isFetchingSeasons } = useContext(GlobalContext);
	useEffect(() => {
		fetchSeasons();
	}, []);

	return (
		<>
			<SectionHeader text="Seasons" />
			<div className="flex flex-row justify-between">
				{isFetchingSeasons && <SeasonSkeleton isLoaded={!isFetchingSeasons} />}
				{seasons.map((season) => (
					<Button
						key={season}
						size="md"
						boxShadow={selectedSeason === season ? "lg" : "none"}
						variant="outline"
						colorScheme={selectedSeason === season ? "red" : "gray"}
						backgroundColor="white"
						onClick={() => setSelectedSeason(season)}
					>
						{season}
					</Button>
				))}
			</div>
		</>
	);
};

export default SeasonSection;
