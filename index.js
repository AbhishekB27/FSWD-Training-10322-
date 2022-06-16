const express = require('express')
const res = require('express/lib/response')
const fs = require('fs')
const app = express()
const path = require('path')
const something = require('./middlewares')
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('response')
    console.log(req.query)
})

app.get('/About',(req,res)=>{
    res.send('About Page')
})
app.get('/Home',(req,res)=>{
    res.send('Home Page')
})

//
try {
  app.get('/todos',(req,res)=>{
    const todos=JSON.parse(fs.readFileSync(path.join(__dirname,"data.json"),{encoding:"utf-8"}))
    
    const {count} = req.query;
    if(count){
        return res.send(todos.slice(0,count))
    }
    else{
        return res.send(todos.slice(0,count))
    }
})
} catch (error) {
  console.log(error.message)
}

app.get("/todos/:id", (req, res) => {
    try {
      const todos = JSON.parse(
        fs.readFileSync(path.join(__dirname, "data.json"), { encoding: "UTF-8" })
      );
      const { id } = req.params;
      const todo = todos.find((e) => e.id == id);
  
      if (todo) {
        return res.send(todo);
      } else {
        return res.send("item not found");
      }
    } catch (error) {
      return res.send(error.message);
    }
  });

  app.post('/todos',(req,res)=>{
      const data = req.body
      const todos = JSON.parse(
        fs.readFileSync(path.join(__dirname, "data.json"), { encoding: "UTF-8" })
      );
      const todo = {
          ...data,
          id: todos.lenght + 1
      }
      fs.writeFileSync(path.join(__dirname,'data.json'),JSON.stringify(todos));
      todos.push(todo)
      console.log(data)
      res.send(data)
  })

console.log(app)
app.listen(8080,()=>{
    console.log(`server started at port: ${8080}`)
})