import { FC, useContext, useEffect } from "react";
import { Table, Thead, Tbody, Th, Tr, Td, Avatar, Skeleton } from "@chakra-ui/react";

import { GlobalContext } from "../store/GlobalContextProvider";

const DriverRankingSkeleton: FC<{ isLoaded: boolean }> = ({ isLoaded }) => {
	return (
		<Tr>
			<Td>
				<Skeleton isLoaded={isLoaded} height="20px" width="40px" />
			</Td>
			<Td>
				<Skeleton isLoaded={isLoaded} height="20px" width="80px" />
			</Td>
			<Td>
				<Skeleton isLoaded={isLoaded} height="30px" width="30px" rounded={"full"} />
			</Td>
			<Td>
				<Skeleton isLoaded={isLoaded} height="20px" width="40px" />
			</Td>
			<Td>
				<Skeleton isLoaded={isLoaded} height="20px" width="40px" />
			</Td>
		</Tr>
	);
};

const DriverRankingTable: FC = () => {
	const { driverRankings, fetchDriverRankings, selectedSeason, isFetchingRankings } = useContext(GlobalContext);

	useEffect(() => {
		fetchDriverRankings({ season: selectedSeason });
	}, [selectedSeason]);

	return (
		<>
			<Table variant={"striped"} backgroundColor="white" rounded="md">
				<Thead>
					<Tr>
						<Th>Position</Th>
						<Th>Name</Th>
						<Th>Image</Th>
						<Th>Number</Th>
						<Th>Points</Th>
					</Tr>
				</Thead>
				<Tbody>
					{isFetchingRankings && <DriverRankingSkeleton isLoaded={!isFetchingRankings} />}
					{driverRankings.map(({ driver: { number, name, image }, points, position }) => {
						return (
							<Tr key={number}>
								<Td>{position}</Td>
								<Td>{name}</Td>
								<Td>
									<Avatar name={name} src={image} />
								</Td>
								<Td>{number}</Td>
								<Td>{points || "-"}</Td>
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</>
	);
};

export default DriverRankingTable;
