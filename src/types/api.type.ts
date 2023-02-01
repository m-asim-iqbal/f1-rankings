import { TeamRanking } from "./team.type";
import { DriverRanking } from "./driver.type";

export interface CommonGetResponse {
	get: string;
	parameters:
		| string[]
		| {
				season: string;
				team?: string;
				driver?: string;
		  };
	errors: any[];
	results: number;
}

export interface SeasonResponse extends CommonGetResponse {
	response: number[];
}

export interface TeamRankingResponse extends CommonGetResponse {
	response: TeamRanking[];
}

export interface DriverRankingResponse extends CommonGetResponse {
	response: DriverRanking[];
}

export interface RankingRequest {
	type: "teams" | "drivers";
	season: number;
}
