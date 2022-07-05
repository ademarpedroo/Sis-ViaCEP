
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  
  const cepInputValue = document.getElementById('cep').value;
  const resultContainer = document.getElementById('resultado');


  const cepResponse = await fetch('http://localhost:3000/busca_cep',{
    method: 'POST',
    body: JSON.stringify({
      cep: cepInputValue
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const responseBody = await cepResponse.json();
  console.log(responseBody)

  const layout = `
    <span>Cep: ${cepInputValue}</span>
    <span>Cidade: ${responseBody.localidade}</span>
    <span>Logradouro: ${responseBody.logradouro}</span>
  `

  resultContainer.innerHTML = layout;
}