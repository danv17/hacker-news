import axios from "axios";
import { QueryType } from "../types";

export const getNews = (query: QueryType, page: number = 0) => {
    return axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`);

}
