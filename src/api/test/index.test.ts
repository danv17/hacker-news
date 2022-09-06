import { getNews } from "..";
import { QueryType } from "../../types";
const axios = require("axios");

jest.mock("axios");

describe("getNews function", () => {
  it("should get page 5 of angular news", async () => {
    await customGetNews("angular", 5);
  });

  it("should get page 12 of reactjs news", async () => {
    await customGetNews("reactjs", 12);
  });

  it("should get page 39 of vuejs news", async () => {
    await customGetNews("vuejs", 39);
  });

  it("should get page 50 of reactjs without news", async () => {
    await customGetNews("reactjs", 50);
  });
});

async function customGetNews(customQuery: QueryType, customPage: number) {
  axios.get.mockResolvedValue({
    data: {
      hits:
        customPage < 50
          ? [
              {
                created_at: "2022-09-05T12:46:30.000Z",
                title: null,
                url: null,
                author: "ryan-c",
                points: null,
                story_text: null,
                comment_text:
                  "&gt; there has been zero change to regular life as a result of leaving the EU<p>I&#x27;ve noticed that buying things online from mainland Europe has gotten <i>significantly</i> more annoying and expensive.<p>There have also been a lot of issues for UK citizens with significant family ties in the EU.",
                num_comments: null,
                story_id: 32723674,
                story_title: null,
                story_url: null,
                parent_id: 32723270,
                created_at_i: 1662381990,
                _tags: ["comment", "author_ryan-c", "story_32723674"],
                objectID: "32723674",
                _highlightResult: {
                  author: {
                    value: "ryan-c",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  comment_text: {
                    value:
                      "&gt; there has been zero change to <em>regular</em> life as a result of leaving the EU<p>I've noticed that buying things online from mainland Europe has gotten <i>significantly</i> more annoying and expensive.<p>There have also been a lot of issues for UK citizens with significant family ties in the EU.",
                    matchLevel: "full",
                    fullyHighlighted: false,
                    matchedWords: ["angular"],
                  },
                },
              },
            ]
          : [],
      page: customPage,
      query: customQuery,
      hitsPerPage: 20,
    },
  });
  const response = await getNews(customQuery, customPage);
  const { hits, query, page, hitsPerPage } = response.data;
  expect(query).toBe(customQuery);
  expect(page).toBe(page);
  expect(hitsPerPage).toBe(20);
  expect(hits.length).toBe(customPage < 50 ? 1 : 0);
}
