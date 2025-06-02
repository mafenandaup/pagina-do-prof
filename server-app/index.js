import express from 'express';
import cors from 'cors';

import alunoRoutes from './routes/alunos.js'; 
import aulaRoutes from './routes/Aulas.js';

const appRoutes = express();

appRoutes.use(express.json());
appRoutes.use(cors());

appRoutes.use('/alunos', alunoRoutes);
appRoutes.use('/aulas', aulaRoutes);

appRoutes.listen(3000, () =>{ 
      console.log('Server funciona(3000)');
});