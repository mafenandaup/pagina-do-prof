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
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar aluno.' });
  }
});


aulaRoutes.put('/aulas/:varID', async (req, res) => { //os dois pontos indicam variável
  try {
    const { materia, topico, horario, alunos } = req.body;
    const { varID } = req.params
    const aulaAtualizada = await prisma.aula.update({
      where: { id: varID },
      data: {
        materia,
        topico,
        horario: new Date(horario), // necessário instanciar para converter a string em um obeto date.
        alunos: {
          connect: alunos.map((id) => ({ id })),   // conecta a um array de alunos associados a essa aula; associa registros de uma tabela a registros de outra.
        },// essas instâncias são necessárias para garantir portabilidade, integridade dos dados e compatibilidade para o prisma(padroniza a manipulação de dados.)
      },
    });

    res.status(201).json(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar aula.' });
  }
})

aulaRoutes.patch('/aulas/:varID', async (req, res) => {
  try {
    const { materia, topico, horario, alunos } = req.body;
    const { varID } = req.params;

    const aulaAtualizada = await prisma.aula.update({
      where: { id: varID },
      data: {
        ...(materia && { materia }),
        ...(topico && { topico }),
        ...(horario && { horario: new Date(horario) }), // necessário instanciar para converter a string em um obeto date.

        ...(alunos && {
          alunos: {
            connect: alunos.map((id) => ({ id })),   // conecta a um array de alunos associados a essa aula; associa registros de uma tabela a registros de outra.
          },
        }),// essas instâncias são necessárias para garantir portabilidade, integridade dos dados e compatibilidade para o prisma(padroniza a manipulação de dados.)
      },
    });

    res.status(201).json(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar aula.' });
  }
});


aulaRoutes.delete('/aulas:varID', async (req, res) => {
  try {
    const { varID } = req.params;
    await prisma.aula.delete({
      where: { id: varID },
    });
    res.status(201).json(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar aula.' });
  }
});

export default aulaRoutes;