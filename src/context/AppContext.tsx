import React, { Dispatch } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { NewProps, QueryType } from "../types";

export type AppContextType = {
  news: NewProps[];
  setNews: Dispatch<React.SetStateAction<NewProps[]>>;
  showFavs: boolean;
  setShowFavs: Dispatch<React.SetStateAction<boolean>>;
  selectedFramework: QueryType;
  setSelectedFramework: Dispatch<React.SetStateAction<QueryType>>;
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
  selectedFramework: "",
  setSelectedFramework: () => null,
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
  const [selectedFramework, setSelectedFramework] = useLocalStorage<QueryType>(
    "selectedFramework",
    ""
  );
  const [lastFramework, setLastFramework] = React.useState<QueryType>("");
  const [loadMore, setLoadMore] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const value = {
    news,
    setNews,
    showFavs,
    setShowFavs,
    selectedFramework,
    setSelectedFramework,
    lastFramework,
    setLastFramework,
    loadMore,
    setLoadMore,
    isLoading,
    setIsLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
