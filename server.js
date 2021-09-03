import express from 'express';
import db from './src/db.js'
import routes from './src/routes.js';
import cors from 'cors';
const server = express();

server.use(express.json());
server.use(cors())
server.get('/', (req,res) => 
    res.send('Funcionando')
)

server.use(routes)

db.authenticate()
server.listen(3001, () => console.log('Servidor rodando'))
