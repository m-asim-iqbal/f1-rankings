export interface Team {
	id: number;
	name: string;
	logo: string;
}

export interface TeamRanking {
	team: Team;
	position: number;
	points: number;
	season: number;
}
