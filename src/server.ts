import express from 'express'

const PORT = 3000;

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json({
        hello: "world"
    })
})

app.listen(PORT, ()=>console.log('listen', PORT))