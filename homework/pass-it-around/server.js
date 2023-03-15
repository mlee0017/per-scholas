const express = require('express')

const app = express() 

const PORT = 3002; 

let startingNum = 99; 

app.get("/", (req, res) => {
    res.send(`<h1> ${startingNum} 
    <span style= {{ textDecoration: 'line-through' }} problems but a bitch ain't one</span> 
    bottles of better on the wall 
    </h1>
    <a href="${startingNum}"> take one down, pass it around
    </a>`)

})

app.get("/:number_of_bottles", (req, res) => {
    let currentNum = req.params.number_of_bottles
    if (currentNum > 1) {

    }
    res.send(`${number_of_bottles} problems but a bitch ain't one`)
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})