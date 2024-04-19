import { foo } from './foo.mjs'
import {mysqltest} from './mysql.mjs'

import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.get('/', (_, res) => {
    res.send(foo())
})

app.get("/a2p", (req, res) => {
    //const {username,password} = req.body
    res.send(JSON.stringify("abc"))
    console.log(req.body)
  });
