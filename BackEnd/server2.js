const express = require('express');

const app = express();

function calculateSum(a){
    return a+a;
}

const port = process.env.PORT || 8080;

app.get('/', (req, res)=>{
    const a = req.query.a;
    //const b = req.query.b;
    const ans = calculateSum(a);
    res.send(ans);
})

app.listen(port, ()=>{
    console.log(`Server running on port number: ${port}`);
})