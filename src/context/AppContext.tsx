import React, { Dispatch } from "react";
import { NewProps, QueryType } from "../types";

type AppContextType = {
  news: NewProps[];
  setNews: Dispatch<React.SetStateAction<NewProps[]>>;
  framework: QueryType;
  setFramework: Dispatch<React.SetStateAction<QueryType>>;
  lastFramework: QueryType;
  setLastFramework: Dispatch<React.SetStateAction<QueryType>>;
  loadMore: boolean;
  setLoadMore: Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = React.createContext<AppContextType>({
  news: [],
  setNews: () => null,
  framework: "",
  setFramework: () => null,
  lastFramework: "",
  setLastFramework: () => null,
  loadMore: false,
  setLoadMore: () => null,
});

export const AppProvider = (props: React.PropsWithChildren<{}>) => {
  const { children } = props;
  const [news, setNews] = React.useState<NewProps[]>([]);
  const [framework, setFramework] = React.useState<QueryType>("");
  const [lastFramework, setLastFramework] = React.useState<QueryType>("");
  const [loadMore, setLoadMore] = React.useState<boolean>(false);

  const value = {
    news,
    setNews,
    framework,
    setFramework,
    lastFramework,
    setLastFramework,
    loadMore,
    setLoadMore,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
