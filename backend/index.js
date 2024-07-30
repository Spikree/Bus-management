import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import User from './userSchema/user.js';
import Stripe from 'stripe';
import addUser from './routes/userRoute.js'
import cors from 'cors'
import getUsers from './routes/adminRoute.js';
import deleteUser from './routes/deleteUser.js';

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_KEY)

const url = process.env.MONGO_CONNECT

const app = express();
app.use(express.json())
app.use(cors('*'));
const port = process.env.PORT || 3000;

mongoose.connect(url, { useNewUrlParser: true }).then(() => { console.log("Connected to mongoDB") }).catch(() => { console.log("Error connectiong to mongoDB") })

const cities = new Map([
    [1, {priceInCents: 10000, name: "Miraj"}],
    [2, {priceInCents: 99999, name: "Sangli"}],
    [3, {priceInCents: 20000, name: "Kolhapur"}],
]);
    
app.use('/user',addUser);
app.use('/getUsers', getUsers);
app.use('/deleteUser',deleteUser);

app.listen(port, () => {
    console.log(`port running on http://localhost:${port}`);
})