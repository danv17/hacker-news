import React, { Dispatch } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { NewProps, QueryType } from "../types";

type AppContextType = {
  news: NewProps[];
  setNews: Dispatch<React.SetStateAction<NewProps[]>>;
  showFavs: boolean;
  setShowFavs: Dispatch<React.SetStateAction<boolean>>;
  framework: QueryType;
  setFramework: Dispatch<React.SetStateAction<QueryType>>;
  lastFramework: QueryType;
  setLastFramework: Dispatch<React.SetStateAction<QueryType>>;
  loadMore: boolean;
  setLoadMore: Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = React.createContext<AppContextType>({
  news: [],
  setNews: () => null,
  showFavs: false,
  setShowFavs: () => null,
  framework: "",
  setFramework: () => null,
  lastFramework: "",
  setLastFramework: () => null,
  loadMore: false,
  setLoadMore: () => null,
  isLoading: false,
  setIsLoading: () => null,
});

export const AppProvider = (props: React.PropsWithChildren<{}>) => {
  const { children } = props;
  const [news, setNews] = useLocalStorage<NewProps[]>("news", []);
  const [showFavs, setShowFavs] = React.useState<boolean>(false);
  const [framework, setFramework] = React.useState<QueryType>("");
  const [lastFramework, setLastFramework] = React.useState<QueryType>("");
  const [loadMore, setLoadMore] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const value = {
    news,
    setNews,
    showFavs,
    setShowFavs,
    framework,
    setFramework,
    lastFramework,
    setLastFramework,
    loadMore,
    setLoadMore,
    isLoading,
    setIsLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
