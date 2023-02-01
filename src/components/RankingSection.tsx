import { FC, useContext } from "react";
import { Switch, Stack } from "@chakra-ui/react";

import { GlobalContext } from "../store/GlobalContextProvider";
import SectionHeader from "./SectionHeader";
import DriverRankingTable from "./DriverRankingTable";
import TeamRankingTable from "./TeamRankingTable";

const RankingSection: FC = () => {
	const { isDriverRanking, setIsDriverRanking } = useContext(GlobalContext);
	return (
		<>
			<SectionHeader text="Rankings">
				<Stack gap={4} align="center" direction={"row"}>
					<div>Teams</div>
					<Switch size="md" colorScheme={"red"} isChecked={isDriverRanking} onChange={(event) => setIsDriverRanking(event.target.checked)} />
					<div>Drivers</div>
				</Stack>
			</SectionHeader>
			{isDriverRanking ? <DriverRankingTable /> : <TeamRankingTable />}
		</>
	);
};

export default RankingSection;
