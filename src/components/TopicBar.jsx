
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { getTopics } from './api-calls'

export default function TopicBar({selectedTopic}) {

const [topics, setTopics] = useState([])

useEffect(() => {
    getTopics().then(({topics}) => {
        setTopics(topics)
    })
}, [])

    return (
<div className="topic-bar">
    {topics.map(topic => {
        const isSelectedTopic = (selectedTopic === topic.slug)
        return <Link key={topic.slug} to={`/all/${topic.slug}`} className={isSelectedTopic ? "topic-bar-selected" : undefined} >
        {topic.slug}</Link>
    })}
    <Link key="all" to="/all" className={selectedTopic ?? "topic-bar-selected-all"}>ALL</Link>

</div>
    )
}



