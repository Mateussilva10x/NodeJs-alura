const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router
  .get("/pessoas", PessoaController.pegaPessoasAtivas)
  .get("/pessoas/todos", PessoaController.pegaTodasAsPessoas)
  .get("/pessoas/:id", PessoaController.pegaUmaPessoa)
  .get(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.pegaUmaMatricula
  )
  .get("/pessoas/:estudanteId/matricula", PessoaController.pegaMatriculas)
  .get(
    "/pessoas/matricula/:turmaId/confirmadas",
    PessoaController.pegaMatriculasPorTurma
  )
  .get("/pessoas/matricula/lotada", PessoaController.pegaTurmasLotadas)
  .post("/pessoas", PessoaController.criarPessoa)
  .post("/pessoas/:estudanteId/matricula", PessoaController.criarMatricula)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
  .post("/pessoas/:estudanteId/cancela", PessoaController.cancelaPessoa)
  .put("/pessoas/:id", PessoaController.atualizaPessoa)
  .put(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.atualizaMatricula
  )
  .delete("/pessoas/:id", PessoaController.apagaPessoa)
  .delete(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.apagaMatricula
  );

module.exports = router;
