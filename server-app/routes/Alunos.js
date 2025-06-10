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
      },
    });
    if (aulaId) { //se o id da aula for fornecido
      await prisma.relateAulaAluno.create({ //cria registro de uma relação aluno-aula na entidade RelateAulaAluno
        data: {
          alunoId: aluno.matricula, //a matricula do aluno já será autoincrementada no await.create
          aulaId,
        },
      });
    }
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o aluno.' });
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

    return res.status(200).json({ message: 'Aluno atualizado com sucesso.' });
  } catch (error) {
    if (!varID) {
      return res.status(400).json({ error: 'ID não fornecido.' });
    } else {
      res.status(500).json('Erro ao atualizar aluno')
    }
  }
});



alunoRoutes.patch('/alunos/:varID', async (req, res) => {

  const { varID } = req.params;

  try {
    const { nome, email, aulaId } = req.body;
    const alunoAtualizado = await prisma.aluno.update({
      where: { matricula: varID },
      data: {
        ...(nome && { nome }),
        ...(email && { email }),  // dados atualizados apenas com dados fornecidos
        ...(aulaId && { aulaId }),
      },
    });
    console.log('Aluno atualizado com sucesso:', alunoAtualizado);
    return res.status(200).json({ message: 'Aluno atualizado com sucesso.' });
  } catch (error) {
    if (!varID) {
      return res.status(400).json({ error: 'ID não fornecido.' });
    } else {
      res.status(500).json('Erro ao atualizar aluno')
    }
  }
});

alunoRoutes.delete('/alunos/:varID', async (req, res) => {
  const { varID } = req.params;

  try {
    if (!varID) {
      return res.status(400).json({ error: 'ID não fornecido.' });
    }

    const alunoExists = await prisma.aluno.findUnique({
      where: { matricula: varID },
    });

    if (!alunoExists) {
      return res.status(404).json({ error: 'Aluno não encontrado.' });
    }

    // remove registros relacionados na tabela RelateAulaAluno, evitando violar os requisitos existentes das relações.
    await prisma.relateAulaAluno.deleteMany({
      where: { alunoId: varID },
    });

    // Deleta o aluno
    // Deleta o aluno
    const alunoDeletado = await prisma.aluno.delete({
      where: { matricula: varID },
    });

    console.log('Aluno deletado com sucesso:', alunoDeletado);
    return res.status(200).json({ message: 'Aluno deletado com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar aluno:', error);
    return res.status(500).json({ error: 'Erro ao deletar aluno.' });
  }
});

export default alunoRoutes;