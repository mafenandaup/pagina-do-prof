import express from 'express'
import cors from 'cors'

const appRoutes = express();


appRoutes.use(express.json());
appRoutes.use(cors());

appRoutes.listen(3000, () => {});