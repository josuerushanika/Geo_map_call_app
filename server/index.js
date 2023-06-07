const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

const server = http.createServer(app);

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello server is started');
});

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
