import { PrismaClient, Aula } from '../generated/prisma';
const prisma = new PrismaClient();

import express from 'express'
import cors from 'cors'

const alunoRoutes = express();


alunoRoutes.use(express.json());
alunoRoutes.use(cors());

alunoRoutes.get('/alunos', async (req, res) => {

  try {
    const alunos = await prisma.aluno.find
    res.status(200).json(alunos)
    
  } catch (error) {
    res.status(500).json('alunos não encontrados.')
  }
})

alunoRoutes.post('/alunos', async (req, res) => {
    res.status(200).json('ok, deu certo')
  //  try {
    
  // } catch (error) {
    
  // }
})

alunoRoutes.put('/alunos/:varID',async (req,res) => { //os dois pontos indicam variável
    try {
    
  } catch (error) {
    
  }
})

alunoRoutes.patch('/alunos:varId',async (req,res) => {
    try {
    
  } catch (error) {
    
  }
})

alunoRoutes.delete('/alunos:varID',async (req,res) => {
  try {
    
  } catch (error) {
    
  }
})
