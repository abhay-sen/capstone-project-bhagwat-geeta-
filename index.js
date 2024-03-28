import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app= express();
const port = 3000;
const config = {
    headers: {
    'X-RapidAPI-Key': 'da24ab0ef6msh4326986fed46a72p13ac67jsnc233f7e3deed',
    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }
};
app.use(express.static('/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.post("/allChapters",(req,res)=>{

});
app.post("/particularChapters",(req,res)=>{

});
app.post("/versesFromAChapter",(req,res)=>{

});
app.post("/particularVerse",(req,res)=>{

});

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});
