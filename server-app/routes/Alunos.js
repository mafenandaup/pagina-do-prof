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
    const alunoCriado = await prisma.aluno.create({
      data: {
        nome,
        email,
      },
    });
    if (aulaId) { //se o id da aula for fornecido
      await prisma.relateAulaAluno.create({ //cria registro de uma relação aluno-aula na entidade RelateAulaAluno
        data: {
          matricula: aluno.matricula, //a matricula do aluno já será autoincrementada no await.create
          aulaId,
        },
      });
    }
 return res.status(200).json({ message: 'Aluno atualizado com sucesso.', aluno: alunoCriado });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o aluno.' });
  }
});

//os dois pontos indicam variável
alunoRoutes.put('/alunos/:varID', async (req, res) => {
  const { varID } = req.params;
  const { nome, email, aulaId } = req.body;

  // verifica a existência do ID no campo.
  try {
    if (!varID) {
      return res.status(400).json({ error: 'ID não fornecido.' });
    }
// verifica se o ID inserido existe na tabela de alunos (se o aluno existe)
    const alunoExists = await prisma.aluno.findUnique({ where: { matricula: varID } });
    if (!alunoExists) {
      return res.status(404).json({ error: 'Aluno não encontrado.' });
    }

    // verifica se a aula relacionada ao aluno existe na tabela
    if (aulaId) {
      const aulaExists = await prisma.aula.findUnique({
        where: { id: aulaId },
      });
      if (!aulaExists) {
        return res.status(400).json({ error: 'A aula especificada não existe.' });
      }

    // verifica onde atualizar a relação na tabela intermediária.
    //caso os campos não existam/não tenham relação, eles são criados.
      await prisma.relateAulaAluno.upsert({
        where: { aulaId_alunoId: { aulaId, alunoId: varID } },
        update: {},
        create: { aulaId, alunoId: varID },
      });
    }

    //cria uma const para guardar os campos atualziados
    const alunoAtualizado = await prisma.aluno.update({
      where: { matricula: varID },
      data: { nome, email },
    });

    return res.status(200).json({ message: 'Aluno atualizado com sucesso.', aluno: alunoAtualizado });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar aluno.' });
  }
});




alunoRoutes.patch('/alunos/:varID', async (req, res) => {

  const { varID } = req.params;
  const { nome, email, aulaId } = req.body;

  // verifica a existência do ID no campo.
  try {
    if (!varID) {
      return res.status(400).json({ error: 'ID não fornecido.' });
    }
// verifica se o ID inserido existe na tabela de alunos (se o aluno existe)
    const alunoExists = await prisma.aluno.findUnique({ where: { matricula: varID } });
    if (!alunoExists) {
      return res.status(404).json({ error: 'Aluno não encontrado.' });
    }

     if (aulaId) {
      const aulaExists = await prisma.aula.findUnique({
        where: { id: aulaId }, // verifica se a aula localizada existe na tabela de Aulas.
      });
      if (!aulaExists) {
        return res.status(400).json({ error: 'A aula especificada não existe.' });
      }

    // verifica onde atualizar a relação na tabela intermediária.
    //caso os campos não existam/não tenham relação, eles são criados.
         await prisma.relateAulaAluno.upsert({
        where: { aulaId_alunoId: { aulaId, alunoId: varID } },
        update: {},
        create: { aulaId, alunoId: varID },
      });
    }

    //cria uma const para guardar os campos atualziados
    const alunoAtualizado = await prisma.aluno.update({
      where: { matricula: varID },
      data: {
        ...(nome && { nome }),
        ...(email && { email }),
      },
    });

 return res.status(200).json({ message: 'Aluno atualizado com sucesso.', aluno: alunoAtualizado });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar aluno.' });
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