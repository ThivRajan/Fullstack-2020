import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotif, resetNotif } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
	const dispatch = useDispatch()

	const addAnecdote = async (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		const newAnecdote = await anecdoteService.create(content)
		dispatch(createAnecdote(newAnecdote.content))

		dispatch(setNotif(`You created an anecdote '${newAnecdote.content}'`))
		setTimeout(() => { dispatch(resetNotif()) }, 5000)
	}

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={addAnecdote}>
				<div><input name="anecdote" /></div>
				<button type="submit">create</button>
			</form>
		</div>
	)

}

export default AnecdoteForm