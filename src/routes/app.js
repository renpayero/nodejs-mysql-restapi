import express from 'express'
import employeesRoutes from './employees.routes.js'
import indexRoutes from './index.routes.js'

import {PORT} from './config.js'


const app = express()

app.use(express.json())

app.use('/api', employeesRoutes)
app.use(indexRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app