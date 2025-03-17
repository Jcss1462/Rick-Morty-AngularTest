import { Character } from "./character";
import { InfoApiResponse } from "./info-api-response";

export interface ApiResponse {
    info: InfoApiResponse,
    results: Character[],
    hasNextPage: boolean,
    hasPreviousPage: boolean
}
