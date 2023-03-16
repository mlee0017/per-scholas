const express = require('express')

const app = express() 

const PORT = 3002; 

let startingNum = 99; 



app.get("/", (req, res) => {
    res.send(`<h1> ${startingNum} 
    <del> problems but a bitch ain't one</del> 
    bottles of beer on the wall </h1>
    <a href="${startingNum}"> take one down, pass it around
    </a>`
    )
})

app.get("/:number_of_bottles", (req, res) => {
    let currentNum = req.params.number_of_bottles
    if (currentNum > 1) {
      res.send(`<h1> ${currentNum} 
      <del> problems but a bitch ain't one</del>
      bottles of beer on the wall</h1> 
        <a href="${currentNum - 1}"> 
          take one down, pass it around
        </a>`
      )
    } else if (currentNum == 1){
      res.send(`<h1> ${currentNum} 
      <del> problem but a bitch STILL ain't one</del>
      bottle of beer on the wall </h1>
        <a href="${currentNum - 1}"> 
        take one down, pass it around
        </a> `
      )
    } else {
      res.send(`<h1> There's ${currentNum} bottles!
      <del> and no more problems!</del>
       you passed around too many... </h1>
        <a href="/"> grab some more bottles! </a> `
      )
    }
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})