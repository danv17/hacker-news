import React from "react";
import { StyledContent } from "../style/Content";
import { StrictQueryType } from "../types";
import { Dropdown } from "./Dropdown";
import { Toggle } from "./Toggle";
import angularIcon from "../assets/angular.png";
import reactIcon from "../assets/reactjs.png";
import vueIcon from "../assets/vuejs.png";
import { NewsContainer } from "./NewsContainer";
import { StyledNewsWrapper } from "../style/NewsContainer";
import { AppContext } from "../context/AppContext";

export const Content = () => {
  const {
    showFavs,
    setShowFavs,
    selectedFramework,
    setSelectedFramework,
    lastFramework,
    setLastFramework,
    setLoadMore,
  } = React.useContext(AppContext);
  const newsContainerRef = React.useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    if (!lastFramework) {
      setLastFramework(value as StrictQueryType);
    }

    if (selectedFramework !== value) {
      newsContainerRef.current?.scrollTo({ top: 0 });
      setLastFramework(selectedFramework);
      setSelectedFramework(value as StrictQueryType);
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (
      !showFavs &&
      newsContainerRef.current &&
      newsContainerRef.current.clientHeight ===
        newsContainerRef.current.scrollHeight &&
      e.deltaY > 0
    ) {
      setLoadMore(true);
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement;
    const bottom =
      Math.floor(element.scrollHeight - element.scrollTop) -
      element.clientHeight <= 10;
    if (!showFavs && bottom) {
      setLoadMore(bottom);
    }
  };

  const handleToggle = (value: boolean) => {
    newsContainerRef.current?.scrollTo({ top: 0 });
    setShowFavs(value);
  };

  return (
    <StyledContent>
      <Toggle
        options={[
          { label: "All", onClick: () => handleToggle(false) },
          { label: "My faves", onClick: () => handleToggle(true) },
        ]}
      />
      {!showFavs && (
        <Dropdown
          label="Select your news"
          value={selectedFramework}
          options={[
            { label: "Angular", value: "angular", icon: angularIcon },
            { label: "Reactjs", value: "reactjs", icon: reactIcon },
            { label: "Vuejs", value: "vuejs", icon: vueIcon },
          ]}
          onSelect={handleSelect}
        />
      )}
      <StyledNewsWrapper data-testid="news-wrapper-test-id"
        ref={newsContainerRef}
        onScroll={handleScroll}
        onWheel={handleWheel}
      >
        <NewsContainer />
      </StyledNewsWrapper>
    </StyledContent>
  );
};
