import express from 'express'
import User from '../userSchema/user.js';

const addUser = express.Router();

addUser.post('/',(req,res) => {

    const requiredFields = ['name', 'department', 'class', 'city', 'price', 'year'];
    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).json({ error: true, message: `${field} is a required field` });
        }
    }

    const user = new User({
        name: req.body.name,
        department: req.body.department,
        class: req.body.class,
        city: req.body.city,
        price: req.body.price,
        year: req.body.year
    })

    try {
        user.save();
        res.json({error: false, message: "User saved to the database sucessfully"});
    } catch (error) {
        res.json({error: true, message: "error saving user to the database"});
    }
})

export default addUser
