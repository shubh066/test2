const express = require("express")
const app=express();
const port=3000
app.get('/', (req,res)=>
{
    res.send("Hello World")
})
//app.listen(3000)
//app.set("port",3000)
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)

})
app.use(express.static('public'));
app.post("/postwalapage",(req,res)=>{
    res.send("Hey ")
})

const handlebars=require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
var fortunes = [
   "We kept hearing the sound of the garbage truck",
'I knew that I had forgotten to do my homework.',
'My mother had also wanted to make an appointment with the pediatrician.',
'The weatherman predicted that the day would be filled with sunshine.',
'The new anchor kept talking about the election.'

]
app.get('/about', (req, res) => {
    // res.send("<h1>Welcome to mypage</h1>")
        var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
        res.render('about', { fortune: randomFortune });
})

app.get('/contact',(req,res)=>{
    res.render('contact');
})
app.use((req,res)=>{
    res.status(404).render('404')
})
