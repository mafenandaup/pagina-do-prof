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

// rota para mostrar alunos com vínculo específico a essa aula:
aulaRoutes.get('/aulas/:aulaId/alunos', async (req, res) => {
  const { aulaId } = req.params;

  try {
    const alunos = await prisma.relateAulaAluno.findMany({
      where: { aulaId },
      include: { aluno: true }, // Inclui os dados do aluno na resposta
    });

    // mapeia os dados dos alunos diretamente na resposta usando props
    const alunoFormat = alunos.map(relacao => ({ //cada registro vai ser formatado para o display no front-end.
      matricula: relacao.aluno.matricula,
      nome: relacao.aluno.nome,
      email: relacao.aluno.email,
    }));

    res.status(200).json(alunoFormat); //res. com a lista de alunos associados a tal aula.
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar alunos da aula.' });
  }
});


aulaRoutes.post('/aulas', async (req, res) => {
  try {
    const { materia, topico, horario } = req.body;
    const novaAula = await prisma.aula.create({
      data: {
        materia,
        topico,
        horario: new Date(horario),
      },
    });
    return res.status(200).json({ message: 'Aula criada com sucesso.', aula: novaAula });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar aula.' });
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
        // os alunos já terão estabelecido a conexão por meio da tabela relateaulaaluno. 
      },
    });

    return res.status(200).json({ message: 'Aula atualizada com sucesso.', aula: aulaAtualizada });
  } catch (error) {
    if (!varID) {
      return res.status(400).json({ error: 'ID não fornecido.' });
    } else {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar aula.' });
    }
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
        // essas instâncias são necessárias para garantir portabilidade, integridade dos dados e compatibilidade para o prisma(padroniza a manipulação de dados.)
      },
    });

    return res.status(200).json({ message: 'Aula atualizada com sucesso.', aula: aulaAtualizada });
  } catch (error) {
    if (!varID) {
      return res.status(400).json({ error: 'ID não fornecido.' });
    } else {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar aula.' });
    }
  }
});


aulaRoutes.delete('/aulas/:varID', async (req, res) => {
  try {
    const { varID } = req.params;
    console.log(' ID da aula excluída', varID);

    if (!varID) {
      return res.status(400).json({ error: 'ID não fornecido.' });
    }

    await prisma.relateAulaAluno.updateMany({
      where: { aulaId: varID },
      data: { aulaId: null },
    });
    console.log('Associações de alunos da aula', { varID }, 'se tornaram nulas.');

    const deletedAula = await prisma.aula.delete({
      where: { id: varID },
    });

    console.log('Aula deletada com sucesso:', deletedAula);
    res.status(204).json(req.body);
  } catch (error) {
    console.error('Erro ao tentar deletar aula:', error.message);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});
export default aulaRoutes;