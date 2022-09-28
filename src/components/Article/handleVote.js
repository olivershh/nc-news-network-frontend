export default function handleVoteClick(
  voteCounted,
  setArticle,
  setVoteCounted,
  article_id,
  increaseVotes
) {
  if (!voteCounted) {
    setArticle((prevArticle) => {
      setVoteCounted(true);
      return { ...prevArticle, votes: prevArticle.votes + 1 };
    });
    increaseVotes(article_id).catch((err) => {
      setVoteCounted(false);
      setArticle((prevArticle) => {
        return { ...prevArticle, votes: prevArticle.votes - 1 };
      });
    });
  }
}
