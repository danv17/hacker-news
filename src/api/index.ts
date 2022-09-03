import axios from "axios";

const newsUrl = "https://hn.algolia.com/api/v1/search_by_date?";

type QueryType = "angular" | "reactjs" | "vuejs";

export const getNews = (query: QueryType, page: number = 0) => {
    return axios.get(`${newsUrl}query=${query}&page=${page}`);

}
