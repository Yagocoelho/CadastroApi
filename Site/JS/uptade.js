function atualizarPessoa(){
    var primeiroNome = primeiroNome('firstName').value; /*criar variavel para receber os valores inseridos na sala*/
    var nomeMeio = nomeMeio('middleName').value;
    var ultimoNome = dultimoNome('lastName').value;
    var cpf = cpf('CPF').value;

    const data={
        primeiroNome: primeiroNome,/*assimilar nossas varivaeis do front com o back*/
        nomeMeio: nomeMeio,
        ultimoNome: ultimoNome,
        CPF: cpf,
    }
    

fetch("https://localhost:7070/api/Pessoa/update", {
    method:'PuT',
}).then(response =>{
    if (!response.ok){
        alert("Erro ao atualizar pessoa");
    }
    alert("Pessoa atualizada com sucesso!");
    window.location.href = '../index.html';
})
}