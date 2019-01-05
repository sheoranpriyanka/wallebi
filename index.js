const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});
app.get('/test', (req, res) => {
   if(!req.query.id){
    res.status(401).send({"message":"id req."});
   }
    res.status(500).send({"message":"error"});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))