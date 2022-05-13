const express = require('express');
const path = require('path');
const app = express();
const port = 3000

app.listen(port, ()=>{
    console.log(`hello World app listening at port:${port}`)
})

const user = {
    firstName: 'Brad',
    lastName: 'Stover'
}

// Setting templates
app.set('view engine', 'ejs')

// Creating routes
app.get('/', (req, res)=>{
    res.render('pages/index', {user:user})
})

app.get('/post', (req,res)=>{
    res.render('pages/post')
})

app.get('/profile', (req,res)=>{
    res.render('pages/profile')
})

app.get('/auth/register', (req,res)=>{
    res.render('pages/auth/register')
})

app.get('/auth/login', (req,res)=>{
    res.render('pages/auth/login')
})

// Dynamic Routes
app.get('/:color/ranger',( req,res,next ) =>{
    console.log("Timestamp:", Date())
    next()
}, (req,res,next)=>{
    res.render('pages/action', {ranger:req.params})
})

// Using Middleware
app.use(( req,res,next ) =>{
    console.log("Timestamp:", Date())
    next()
})

//Accessing Static Files with Middleware
app.use(express.static(path.join(__dirname, 'public')))