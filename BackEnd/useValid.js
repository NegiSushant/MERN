const express = require('express');

const app = express();

app.use(express.json());

app.post('/', (req, res)=>{
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send('you have '+kidneyLength+ " kidneys");
})

//global catches
app.use(function(err, req, res, next){
    res.json({
        msg: "Sorry something went wrong"
    })
})
app.listen(8080);