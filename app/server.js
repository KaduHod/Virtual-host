import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Hello world!")
})

app.listen(8888, () => console.log("server listening on port 8888"))