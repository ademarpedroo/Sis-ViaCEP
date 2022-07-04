
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  
  const cepInputValue = document.getElementById('cep').value;
  
  const cepResponse = await fetch('http://localhost:3000/busca_cep',{
    method: 'POST',
    body: JSON.stringify({
      cep: cepInputValue
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  responseBody = await cepResponse.json();
  console.log(responseBody)
}