﻿using CadastrodPessoaApi.Data;
using CadastrodPessoaApi.Service;
using CadastrodPessoaApi.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace CadastrodPessoaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoaController : ControllerBase//controller --> service, service --> repository, repository --> banco
    {   //<summary>
       // busca todos os dados do banco, os primeiros 1000
        //</summary>
        [HttpGet("GetAll")]//verbo http
        public IEnumerable<PessoaViewModel> GetAll()
        {
            var service = new ServicePessoa();//Busca todos os metodos publicos e coloca na variavel que foi criada
            return service.GetAll();//Retorna nossa service
        }
        [HttpGet("GetById/{pessoaId}")]//para pegar apenas um dados especificos no caso id
        public PessoaViewModel GetById(int pessoaId)
        {
            var service = new ServicePessoa();
            return service.GetById(pessoaId);
        }

        [HttpGet("GetByprimeiroNome")]//para pegar apenas um dados especificos no caso o nome
        public IEnumerable<PessoaViewModel> GetByprimeiroNome(string primeiroNome)
        {
            var service = new ServicePessoa();
            return service.GetByprimeiroNome(primeiroNome);
        }
        [HttpPut("update/{pessoaId}/{primeiroNome}")]//para atualizar o nome
        public void update(int pessoaId, string primeiroNome)
        {
            var service = new ServicePessoa();
            service.update(pessoaId,primeiroNome);//Não tem retorno pois ele não retorna nada
        }

        [HttpPost("Create")]//criar um novo cadastro no nosso banco de dados
        public IActionResult Create(PessoaViewModel pessoa)
        {
            var service = new ServicePessoa();
            var resultado = service.Create(pessoa);


            var result = new
            {
                Sucess = true,
                Data = "Cadastro feito ",
            };
            return Ok(result);
        }

        [HttpDelete("Delete")]
        public void Delete(int pessoaId, string primeiroNome)
        {
            var service = new ServicePessoa();
             service.Delete(pessoaId, primeiroNome);
        }
    }
}
