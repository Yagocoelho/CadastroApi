function createPessoa(){
    const primeiroNome = document.getElementById('firstName').value; /*criar variavel para receber os valores inseridos na sala*/
    const nomeMeio = document.getElementById('middleName').value;
    const ultimoNome = document.getElementById('lastName').value;
    const cpf = document.getElementById('cpf').value;

    const data={
        primeiroNome: primeiroNome,/*assimilar nossas varivaeis do front com o back*/
        nomeMeio: nomeMeio,
        ultimoNome: ultimoNome,
        CPF: cpf,
    }
    

fetch("https://localhost:7070/api/Pessoa/Create", {
    method:'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
}).then(response =>{
    if (!response.ok){
        alert("Erro ao criar pessoa");
    }
    alert("Pessoa criada com sucesso!");
    window.location.href = '../index.html';
})
}