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
    
        if(responseBody.hasOwnProperty('erro')){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Endereço não encontrado',
            })
        }else {
            const layout = `
            <div class="container-fluid">
              <form>
              <fieldset disabled>
                <div class="row">
                  <div class="col">
                    <label for="disabledTextInput">CEP</label>
                    <input type="text" class="form-control" placeholder="${cepInputValue}" id="cepRetorno">
                  </div>
                  <div class="col">
                    <label for="disabledTextInput">Logradouro: </label>
                    <input type="text" class="form-control" placeholder="${responseBody.logradouro}" id="logradouro">
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="disabledTextInput">Bairro</label>
                    <input type="text" class="form-control" placeholder="${responseBody.bairro}" id="bairro">
                  </div>
                  <div class="col">
                    <label for="disabledTextInput">Localidade</label>
                    <input type="text" class="form-control" placeholder="${responseBody.localidade}" id="localidade">
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="disabledTextInput">UF</label>
                    <input type="text" class="form-control" placeholder="${responseBody.uf}" id="uf">
                  </div>
                  <div class="col">
                    <label for="disabledTextInput">IBGE</label>
                    <input type="text" class="form-control" placeholder="${responseBody.ibge}" id="ibge">
                  </div>
                  <div class="col">
                    <label for="disabledTextInput">DDD</label>
                    <input type="text" class="form-control" placeholder="${responseBody.ddd}" id="ddd">
                  </div>
                </div>
              </fieldset>
              </form>
            </div>
          `
          resultContainer.innerHTML = layout;
        }
}