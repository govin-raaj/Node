import express from 'express';
import cors from "cors";

const app=express();

let corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.get('/home',(req,res)=>{
    res.send('server is ready')
});

app.get('/api/anime',(req,res)=>{
    const animeList = [
  {
    animeName: "Naruto",
    mainCharacter: "Naruto Uzumaki"
  },
  {
    animeName: "Attack on Titan",
    mainCharacter: "Eren Yeager"
  },
  {
    animeName: "One Piece",
    mainCharacter: "Monkey D. Luffy"
  },
  {
    animeName: "Dragon Ball Z",
    mainCharacter: "Goku"
  },
  {
    animeName: "Death Note",
    mainCharacter: "Light Yagami"
  },
  {
    animeName: "My Hero Academia",
    mainCharacter: "Izuku Midoriya"
  },
  {
    animeName: "Demon Slayer",
    mainCharacter: "Tanjiro Kamado"
  }
];

    res.send(animeList)

});

const port =process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server running on port : ${port}`)
})
