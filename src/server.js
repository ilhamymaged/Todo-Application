import express from 'express'

const app = express()
const PORT = 8000 || process.env.PORT

app.listen(PORT, (req, res) => {
    console.log(`Server Is Listing at http://localhost:${PORT}`)
})
