import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

import express from 'express'
import cors from 'cors'

const alunoRoutes = express();


alunoRoutes.use(express.json());
alunoRoutes.use(cors());

alunoRoutes.get('/alunos', async (req, res) => {

  try {
    const alunos = await prisma.aluno.findMany();
    res.status(200).json(alunos)
    
  } catch (error) {
     console.error('Erro ao buscar alunos:', error);
    res.status(500).json('alunos não encontrados.')
  }
})

alunoRoutes.post('/alunos', async (req, res) => {
  const aluno = await prisma.aluno.create();

 const { nome, email, aulaId } = req.body;
   try {
    
   } catch (error) {
    
   }
})

alunoRoutes.put('/alunos/:varID', async (req, res) => { //os dois pontos indicam variável
  const aluno = await prisma.aluno.update();
    try {
    
  } catch (error) {
    
  }
})

alunoRoutes.patch('/alunos:varId', async (req, res) => {
  const aluno = await prisma.aluno.update();
    try {
    
  } catch (error) {
    
  }
})

alunoRoutes.delete('/alunos:varID', async (req, res) => {
    const aluno = await prisma.aluno.delete();

  try {
    
  } catch (error) {
    
  }
})

export default alunoRoutes; 