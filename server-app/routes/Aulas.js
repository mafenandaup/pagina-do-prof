import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();


import express from 'express'
import cors from 'cors'

const aulaRoutes = express();

aulaRoutes.use(express.json());
aulaRoutes.use(cors());

aulaRoutes.get('/aulas',async (req,res) => {
  try {
    const aulas = await prisma.aula.findMany
    res.status(200).json(aulas)
  } catch (error) {
    res.status(500).json('Aulas não encontradas.')
  }
})

aulaRoutes.post('/aulas',async (req,res) => {
  try {
    const aulas = await prisma.aula.create();
    const { materia, topico, horario } = req.body;
    
  } catch (error) {
    
  }
})

aulaRoutes.put('/aulas/:varID',async (req,res) => { //os dois pontos indicam variável
    try {
    
  } catch (error) {
    
  }
})

aulaRoutes.patch('/aulas:varId',async (req,res) => {
    try {
    
  } catch (error) {
    
  }
})

aulaRoutes.delete('/aulas:varID',async (req,res) => {
  try {
    
  } catch (error) {
    
  }
})

export default aulaRoutes; 