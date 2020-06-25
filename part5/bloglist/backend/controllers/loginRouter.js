const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (req, res) => {
	const body = req.body
	const user = await User.findOne({ username: body.username })
	const passCorrect = user === null
		? false
		: await bcrypt.compare(body.password, user.password)

	if (!(user && passCorrect)) {
		return res.status(401).json({ error: 'Invalid username/password' })
	}

	const tokenUser = {
		username: user.username,
		id: user._id
	}
	const token = jwt.sign(tokenUser, process.env.SECRET)
	res.status(200)
		.send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter