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
    res.status(201).json(alunos)

  } catch (error) {
    res.status(500).json('alunos não encontrados.')
  }
})

alunoRoutes.post('/alunos', async (req, res) => {
  try {
    const { nome, email, aulaId } = req.body;
    const aluno = await prisma.aluno.create({
      data: {
        nome,
        email,
        aulaId
      }
    });
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o aluno.' });
  }
});

alunoRoutes.put('/alunos/:varID', async (req, res) => { //os dois pontos indicam variável
  try {
    const { nome, email, aulaId } = req.body;
    const { varID } = req.params
    const alunoAtualizado = await prisma.aluno.update({
     where: { matricula: varID },
      data: {
        nome,
        email,
        aulaId,
      },
    });

    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o aluno.' });
  }
});

alunoRoutes.patch('/alunos/:varID', async (req, res) => {
  try {
     const { varID } = req.params;
    const { nome, email, aulaId } = req.body;
    const alunoAtualizado = await prisma.aluno.update({
     where: { matricula: varID },
      data: {
        ...(nome && { nome }),
        ...(email && { email }),  // dados atualizados apenas com dados fornecidos
        ...(aulaId && { aulaId }),
      },
    });
    res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o aluno.' });
  }
});

alunoRoutes.delete('/alunos/:varID', async (req, res) => {
  const { varID } = req.params
  try {
    await prisma.aluno.delete({
     where: { matricula: varID },
    });
    res.status(200).json(req.body)
  } catch (error) {
    res.status(500).json('Erro ao deletar aluno')
  }
})

export default alunoRoutes; 