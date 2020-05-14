const express=require('express');
const graphqlHTTP=require('express-graphql');
const schema=require('./schema');
const cors=require('cors');
const app=express();
const path=require('path')

app.use(cors());
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

if(process.env.NODE_END=='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client',
            "build","index.html"))
    })
}


const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log('Sever started on port'+ PORT)
})

