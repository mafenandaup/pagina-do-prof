import express from 'express'
import cors from 'cors'

const appRoutes = express();


appRoutes.use(express.json());
appRoutes.use(cors());

appRoutes.get('/testing',async (req,res) => {
    res.status(200).json('ok, deu certo')

//       try {
    
//   } catch (error) {
    
//   }
})

appRoutes.post('/testing',async (req,res) => {
   try {
    
  } catch (error) {
    
  }
})

appRoutes.put('/testing/:varID',async (req,res) => { //os dois pontos indicam variável
    try {
    
  } catch (error) {
    
  }
})

appRoutes.patch('/testing:varId',async (req,res) => {
    try {
    
  } catch (error) {
    
  }
})

appRoutes.delete('/testing:varID',async (req,res) => {
  try {
    
  } catch (error) {
    
  }
})

appRoutes.listen(3000, () => {});