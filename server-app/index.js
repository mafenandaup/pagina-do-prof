import express from 'express'
import cors from 'cors'

import alunoRoutes from '../server-app/routes/alunos.js'
import aulaRoutes from '../server-app/routes/aulas.js'

const appRoutes = express();


appRoutes.use(express.json());
appRoutes.use(cors());

appRoutes.listen(3000, () => {});