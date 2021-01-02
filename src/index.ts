import express from 'express';

const app = express();
const port = Number(process.env.PORT || 3000)

app.listen(port, () => {
    console.log('Server start on port', port)
})