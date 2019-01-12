const express = require('express');
const app = express();
const PORT = process.env.port || 6000;
const cors = require('./cors');
const onServerCreated = () => {
    require('dns').lookup(require('os').hostname(), function (err, add, fam) {
        console.log(`Running in address ${add}, port ${PORT},  with environment region: ${process.env.region}`);
      })
}


app.listen(PORT, onServerCreated);
app.use(cors);
app.get('/', (request, response) => {
   response.send("Hello World!");
})