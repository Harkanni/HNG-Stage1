import express from 'express'

import cors from 'cors'

import dotenv from 'dotenv'

import { fetchUserInfo } from './app.js';

dotenv.config()




const app = express();

app.use(cors())

const PORT = process.env.PORT || 3000;

app.use('/', express.static('public'));

app.get('/server', async (req, res) => {
   console.log("Server called");
   let userInfo = await fetchUserInfo()
   res.json({message: 'Hello from server!', userInfo: userInfo});
})


app.listen(PORT, () => {
   console.log(`Example app listening on port ${PORT}`)
 })