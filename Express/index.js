//Con esto ya tengo un servidor de NodeJs

/*const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type',  'text/plain');
    res.end('hello World this is a node SV');
});

//aca cuando ejecutamos por consola, nos dice que ya esta corriendo a 
// traves del msj "server on port 3000"
server.listen(3000, () => {
    console.log('Server on port 3000');
});  */

/* -------------------------------------------------------------------- */


// Con estas lineas ya iniciamos un servidor basico de Express

const express = require('express');

const app = express(); //declaro un objeto express
app.use(express.json()); //permite que express reconozca Jsons en los Request


app.all('/users', (req, res)=>{
    console.log('por aqui pasan todas las request a las que tengan /users');
    next(); //si no ponemos el next() se queda esperando el servidor hasta no se que..
});

app.get('/', (req, res)=> { //Estamos obligados a utilizar almenos un @get ya que sino tira error el sv
    res.send("Hello Express");
});

app.get('/users', (req, res)=> { 
    res.send("About Me");
});

app.get('/users/:id', (req, res)=> { 
    res.send(req.params.id); //req Params me toma la variable :ID del path
});

app.post('/users', (req, res)=> { 
    res.send("About Me");
});

app.get('/contact', (req, res)=> { 
    res.send("Form Contact 11-0103-1022");
});

app.get('/tasks', (req, res)=> { 
    res.send("<h1>tasks from server</h1>");
});


//aca el Req me permite recibir Jsons en las peticiones entre otras cosas
app.post('/tasks', (req, res)=> { 
    const body = req.body;
    res.json({
        "username": body.username,
        "password": body.password,
        "mail": body.mail
    });
});


// ejecuta el servidor y escucha
app.listen(3000, ()=>{
    console.log('Express Server on Port 3000');
});