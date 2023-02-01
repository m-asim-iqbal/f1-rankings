import { FC, useContext, useEffect } from "react";
import { Table, Thead, Tbody, Th, Tr, Td, Image, Skeleton } from "@chakra-ui/react";

import { GlobalContext } from "../store/GlobalContextProvider";

const TeamRankingSkeleton: FC<{ isLoaded: boolean }> = ({ isLoaded }) => {
	return (
		<Tr>
			<Td>
				<Skeleton isLoaded={isLoaded} height="20px" width="40px" />
			</Td>
			<Td>
				<Skeleton isLoaded={isLoaded} height="20px" width="80px" />
			</Td>
			<Td>
				<Skeleton isLoaded={isLoaded} height="30px" width="90px" />
			</Td>
			<Td>
				<Skeleton isLoaded={isLoaded} height="20px" width="40px" />
			</Td>
		</Tr>
	);
};

const TeamRankingTable: FC = () => {
	const { teamRankings, fetchTeamRankings, selectedSeason, isFetchingRankings } = useContext(GlobalContext);

	useEffect(() => {
		fetchTeamRankings({ season: selectedSeason });
	}, [selectedSeason]);

	return (
		<>
			<Table variant={"striped"} backgroundColor="white" rounded="md">
				<Thead>
					<Tr>
						<Th>Position</Th>
						<Th>Name</Th>
						<Th>Logo</Th>
						<Th>Points</Th>
					</Tr>
				</Thead>
				<Tbody>
					{isFetchingRankings && <TeamRankingSkeleton isLoaded={!isFetchingRankings} />}
					{teamRankings.map(({ team: { name, logo }, points, position }) => {
						return (
							<Tr key={position}>
								<Td>{position}</Td>
								<Td>{name}</Td>
								<Td>
									<Image boxSize="100px" alt={name} src={logo} objectFit="contain" />
								</Td>
								<Td>{points || "-"}</Td>
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</>
	);
};

export default TeamRankingTable;
