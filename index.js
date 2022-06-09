const express = require('express')
const app = express()
const team = require('./data')

const cors = require('cors')
app.use(cors({
    origin:'http://localhost:4200'
}))

const data = []
const Player = require('./players')

const port = 3000

const mongoose = require('mongoose')
const URL = 'mongodb+srv://saurabh:test@Data.xdbyy.mongodb.net/clubsdb?retryWrites=true&w=majority'

/* Body parser */
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/* Database Connection */
mongoose.connect(URL)
                .then((result)=>console.log("connected to db"))
                .catch((err)=>console.log(err))

/* Routes */                
app.get('/', (req,res)=>{
    res.send('Welcome Home')
})


app.post('/addPlayers', (req,res)=>{
    const player = new Player(req.body)
   
    player.save()
    .then((result)=>{res.send(result)})
    .catch((err)=>{res.send(err)})
})

app.get('/allPlayers',(req,res)=>{
    Player.find()
    .then((result)=>{res.send(result)})
    .catch((err)=>{res.send(err)})
    /* res.send("Welcome to all players page") */
})

app.get('/players/:id',(req,res)=>{
    Player.findById(req.params.id)
    .then((result)=>{res.send(result)})
    .catch((err)=>{res.send(err)})
})

app.get('/teams', (req,res)=>{
    res.send(team)
})

app.get('/data', (req,res)=>{
    res.send(data)
})

app.post('/players', (req,res)=>{
    data.push(req.body)
    res.send("Data Added")
})

/* Listen on port */
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })

   /* {
        fname:"Neymar",
        country:"Brazil",
        club:"PSG",
        player_position:"Winger"
    } */
