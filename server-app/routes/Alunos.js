import express from 'express'
import cors from 'cors'

const alunoRoutes = express();


alunoRoutes.use(express.json());
alunoRoutes.use(cors());

alunoRoutes.get('/testing',async (req,res) => {
    res.status(200).json('ok, deu certo')

//       try {
    
//   } catch (error) {
    
//   }
})

alunoRoutes.post('/testing', async (req, res) => {
    res.status(200).json('ok, deu certo')
  //  try {
    
  // } catch (error) {
    
  // }
})

alunoRoutes.put('/testing/:varID',async (req,res) => { //os dois pontos indicam variável
    try {
    
  } catch (error) {
    
  }
})

alunoRoutes.patch('/testing:varId',async (req,res) => {
    try {
    
  } catch (error) {
    
  }
})

alunoRoutes.delete('/testing:varID',async (req,res) => {
  try {
    
  } catch (error) {
    
  }
})
