import { createContext } from "react";

export const defaultReadList = {
  toRead: [
    {
      article_id: 19,
      title: "Just a sample article...",
      topic: "football",
      author: "jessjelly",
      created_at: "2020-09-13T13:02:00.000Z",
      votes: 0,
      comment_count: 12,
    },
  ],
  haveRead: [
    {
      article_id: 4,
      title: "Making sense of Redux",
      topic: "coding",
      author: "jessjelly",
      created_at: "2020-09-11T21:12:00.000Z",
      votes: 6,
      comment_count: 6,
    },
    {
      article_id: 18,
      title:
        "The People Tracking Every Touch, Pass And Tackle in the World Cup",
      topic: "football",
      author: "grumpy19",
      created_at: "2020-08-17T15:03:00.000Z",
      votes: 0,
      comment_count: 8,
    },
  ],
};

export const ReadListContext = createContext();
