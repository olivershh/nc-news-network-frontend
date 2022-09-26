export default function ArticleCardSmall({article}) {
    console.log(article)
    return (
    <div className="article-card-small">
        
        <h2>{article.title} <span className="author-tag-inline">by {article.author}</span></h2>
        <div className="article-card-small-stats">
            <p>♡ {article.votes}</p>
            <p>💬 {article.comment_count}</p>
        </div>


        
    </div>)
}