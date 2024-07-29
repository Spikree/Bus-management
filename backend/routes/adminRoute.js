import express from 'express'
import User from '../userSchema/user.js';

const getUsers = express.Router();

getUsers.get('/', async(req,res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: true, message: "Internal server error retriving the data"})
    }
})

export default getUsers;