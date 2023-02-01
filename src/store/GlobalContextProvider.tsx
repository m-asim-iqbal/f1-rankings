import { useState, createContext, FC, ReactNode, Dispatch, SetStateAction } from "react";
import { getSeasons, getRankings } from "../services";
import { DriverRanking } from "../types/driver.type";
import { TeamRanking } from "../types/team.type";

interface IGlobalContext {
	seasons: number[];
	driverRankings: DriverRanking[];
	teamRankings: TeamRanking[];
	fetchSeasons: () => Promise<void>;
	fetchDriverRankings: ({ season }: { season: number }) => Promise<void>;
	fetchTeamRankings: ({ season }: { season: number }) => Promise<void>;
	selectedSeason: number;
	setSelectedSeason: Dispatch<SetStateAction<number>>;
	isDriverRanking: boolean;
	setIsDriverRanking: Dispatch<SetStateAction<boolean>>;
	isFetchingSeasons: boolean;
	isFetchingRankings: boolean;
}

export const GlobalContext = createContext<IGlobalContext>({
	seasons: [],
	driverRankings: [],
	teamRankings: [],
	fetchSeasons: async () => {},
	fetchDriverRankings: async () => {},
	fetchTeamRankings: async () => {},
	selectedSeason: -1,
	setSelectedSeason: () => {},
	isDriverRanking: true,
	setIsDriverRanking: () => {},
	isFetchingSeasons: false,
	isFetchingRankings: false
});

const GlobalContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [seasons, setSeasons] = useState<number[]>([]);
	const [driverRankings, setDriverRankings] = useState<DriverRanking[]>([]);
	const [teamRankings, setTeamRankings] = useState<TeamRanking[]>([]);

	const [selectedSeason, setSelectedSeason] = useState<number>(-1);
	const [isDriverRanking, setIsDriverRanking] = useState<boolean>(true);

	const [isFetchingSeasons, setIsFetchingSeasons] = useState<boolean>(false);
	const [isFetchingRankings, setIsFetchingRankings] = useState<boolean>(false);

	const fetchSeasons = async () => {
		setIsFetchingSeasons(true);
		const seasonsData = await getSeasons();
		setSeasons(seasonsData.response);
		setSelectedSeason(seasonsData.response[seasonsData.response.length - 1]);
		setIsFetchingSeasons(false);
	};

	const fetchDriverRankings = async ({ season }: { season: number }) => {
		if (selectedSeason > -1) {
			setIsFetchingRankings(true);
			const driverRankingData = await getRankings({ season, type: "drivers" });
			setDriverRankings(driverRankingData.response.sort((a, b) => a.position - b.position) as DriverRanking[]);
			setIsFetchingRankings(false);
		}
	};

	const fetchTeamRankings = async ({ season }: { season: number }) => {
		if (selectedSeason > -1) {
			setIsFetchingRankings(true);
			const teamRankingData = await getRankings({ season, type: "teams" });
			setTeamRankings(teamRankingData.response.sort((a, b) => a.position - b.position) as TeamRanking[]);
			setIsFetchingRankings(false);
		}
	};

	return (
		<GlobalContext.Provider
			value={{
				seasons,
				driverRankings,
				teamRankings,
				fetchSeasons,
				fetchDriverRankings,
				fetchTeamRankings,
				selectedSeason,
				setSelectedSeason,
				isDriverRanking,
				setIsDriverRanking,
				isFetchingRankings,
				isFetchingSeasons
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
