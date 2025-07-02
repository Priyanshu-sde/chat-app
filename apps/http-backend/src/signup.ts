import express from 'express';

const app = express();

app.post('/signup', async (req,res){
    const { email, password, name} = req.body;
     
})