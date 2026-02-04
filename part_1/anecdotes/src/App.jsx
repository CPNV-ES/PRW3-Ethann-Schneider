import { useState } from 'react'
import { anecdotes } from './constants'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleNext = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length))

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const mostVoted = votes.indexOf(Math.max(...votes))

  return (
    <>
        <h2>Anecdote of the day</h2>
      <div>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNext}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[mostVoted]}</p>
        <p>has {votes[mostVoted]} votes</p>
      </div>
    </>
  )
}

export default App
