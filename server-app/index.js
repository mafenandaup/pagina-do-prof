import express from 'express';
import cors from 'cors';

import alunoRoutes from './routes/alunos.js'; 
import aulaRoutes from './routes/aulas.js';

const appRoutes = express();

appRoutes.use(express.json());
appRoutes.use(cors());

appRoutes.use('/', alunoRoutes); //NÃO PRECISA DEFINIR COMO ENDPOINT /AULAS AQUI, PQ JÁ TÁ ASSIM NOS MÉTODOS ASYNC EM AULAS.JS
appRoutes.use('/', aulaRoutes);

appRoutes.listen(3000, () =>{ 
      console.log('Server funciona(3000)');
});