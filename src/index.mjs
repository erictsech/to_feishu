import { foo } from './foo.mjs'
import {mysqltest} from './mysql.mjs'

import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.get('/', (_, res) => {
    res.send(foo())
})

const port = '3005'

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
app.use("/sqlconn",mysqltest)
