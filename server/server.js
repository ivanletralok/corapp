const express = require("express");
const app = express();

app.set('port', process.env.PORT || 3000)
app.use(express.json())

// app.get('/', (req, res) => {
//     res.send(obj);
// })


// routes

app.use(require('./routes/api.routes'))


app.listen(app.get('port'), () => console.log("server run port: 3000"))