
document.addEventListener("DOMContentLoaded", function(){
    const pessoalista = document.getElementById('pessoa-lista');

    function renderTable(data){
        
        pessoalista.innerHTML =  "";

        data.forEach(pessoa =>{
            const row = document.createElement('tr');

            row.innerHTML= `
            <td>${pessoa.pessoaId}</td>
            <td>${pessoa.primeiroNome}</td>
            <td><button onclick="AbrirTelaUptade(${pessoa.pessoaId})">Editar</button></td>
            <td> <button>Excluir</button>
            </td>
            `
            pessoalista.appendChild(row)
        })
    }
    function feachPessoas(){
        fetch("https://localhost:7070/api/Pessoa/GetAll")
        .then(response => response.json())
        .then(data => renderTable(data))
        .catch(error => console.error('Erro ao buscar dados da Api'))
    }
    feachPessoas();
})

function AbrirTelaCreate(){
    window.location.href='pages/create.html'
}
function AbrirTelaUpdte(){
    window.location.href='pages/update.html?pessoaId=${pessoaId}'
}