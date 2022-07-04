const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => { res.send(
)})

app.post('/busca_cep', async (request,response) => {
  const {cep} = request.body;

  console.log(cep);
  try {
    const { data } = await axios(`https://viacep.com.br/ws/${cep}/json/`)
    response.json(data);

  } catch (error) {
    console.error(error);
  }

})

app.listen(3000, () => console.log('Server started at http://localhost:3000'));