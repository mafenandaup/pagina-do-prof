import express from 'express'
import cors from 'cors'

const aulaRoutes = express();


aulaRoutes.use(express.json());
aulaRoutes.use(cors());

aulaRoutes.get('/testing',async (req,res) => {
    res.status(200).json('ok, deu certo')

//       try {
    
//   } catch (error) {
    
//   }
})

aulaRoutes.post('/testing',async (req,res) => {
   try {
    
  } catch (error) {
    
  }
})

aulaRoutes.put('/testing/:varID',async (req,res) => { //os dois pontos indicam variável
    try {
    
  } catch (error) {
    
  }
})

aulaRoutes.patch('/testing:varId',async (req,res) => {
    try {
    
  } catch (error) {
    
  }
})

aulaRoutes.delete('/testing:varID',async (req,res) => {
  try {
    
  } catch (error) {
    
  }
})
