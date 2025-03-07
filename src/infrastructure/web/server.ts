// Express
import express from 'express'
// Cors
import cors from 'cors'
// dotenv
import dotenv from 'dotenv'
// Swagger
import swaggerUi from "swagger-ui-express"
// Node
import * as fs from "node:fs"
// application
import WeatherMovieApplication from "../../application/WeatherMovieApplication.js"
// adapters
import TmdbAdapter from "../adapters/out/TmdbAdapter.js"
import OpenWeatherAdapter from "../adapters/out/OpenWeatherAdapter.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const corsOptions = {
    origin: [/localhost:5173/],
    optionsSuccessStatus: 200, // For legacy browser support
    credentials: true,
    maxAge: 3600
}

app.use(cors(corsOptions))
app.use(express.json())

const weatherAdapter = new OpenWeatherAdapter(process.env.OPENWEATHER_API_KEY || '')
const movieAdapter = new TmdbAdapter(process.env.TMDB_API_TOKEN || '')

const weatherMovieApplication = new WeatherMovieApplication(movieAdapter, weatherAdapter)

// Swagger API
const swaggerDocument = JSON.parse(fs.readFileSync('./src/infrastructure/config/swagger.json', 'utf8'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Health check endpoint
app.get('/health', (_req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
})

weatherMovieApplication.start(app)

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`)
    console.log(`📄 Documentation Swagger : http://localhost:${port}/api-docs`)
})