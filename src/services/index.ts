import axios from "axios";
import { TeamRankingResponse, DriverRankingResponse, SeasonResponse, RankingRequest } from "../types/api.type";

axios.defaults.baseURL = "https://v1.formula-1.api-sports.io";
axios.defaults.headers.common = {
	"x-rapidapi-host": "api-formula-1.p.rapidapi.com",
	"x-apisports-key": "467798171ab0abc0ffd73646a5a202dd"
};

type Response = TeamRankingResponse | DriverRankingResponse;

export const getSeasons = async (): Promise<SeasonResponse> => {
	const seasonsData: SeasonResponse = (await axios.get("/seasons")).data;
	return seasonsData;
};

export const getRankings = async ({ type, season }: RankingRequest): Promise<Response> => {
	const responseData: Response = (await axios.get(`/rankings/${type}?season=${season}`)).data;
	return responseData;
};
