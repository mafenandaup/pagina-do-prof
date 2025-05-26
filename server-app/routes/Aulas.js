import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();


import express from 'express'
import cors from 'cors'

const aulaRoutes = express();

aulaRoutes.use(express.json());
aulaRoutes.use(cors());

aulaRoutes.get('/aulas', async (req, res) => {
  try {
    const aulas = await prisma.aula.findMany();
    res.status(200).json(aulas)
  } catch (error) {
    res.status(500).json('Aulas não encontradas.')
  }
})

aulaRoutes.post('/aulas', async (req, res) => {
  try {
    const { materia, topico, horario, alunos } = req.body;
    const novaAula = await prisma.aula.create({
      data: {
        materia,
        topico,
        horario: new Date(horario),
        alunos: {
          connect: alunos.map(id => ({ id }))
        }
      }
    });

  } catch (error) {

  }
})

aulaRoutes.put('/aulas/:varID', async (req, res) => { //os dois pontos indicam variável
  try {
    const { materia, topico, horario, alunos } = req.body;
    const { varID } = req.params


  } catch (error) {

  }
})

aulaRoutes.patch('/aulas:varId', async (req, res) => {
  try {
    const { materia, topico, horario, alunos } = req.body;
    const { varID } = req.params

  } catch (error) {

  }
})

aulaRoutes.delete('/aulas:varID', async (req, res) => {
  try {
    await prisma.aula.delete({
      where: { id: varID },
    });
    res.status(200).json('Aula deletada com sucesso')
  } catch (error) {
    res.status(500).json('Aulas não encontradas.')
  }
})

export default aulaRoutes; 