import { TeamRanking } from "./team.type";

export interface Driver {
	id: number;
	name: string;
	abbr: string;
	number: number;
	image: string;
}

export interface DriverRanking extends TeamRanking {
	driver: Driver;
	wins: number;
	behind: number;
}
