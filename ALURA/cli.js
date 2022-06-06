import { pegaArquivo } from "./index.js";
import chalk from "chalk";
import validaURLs from "./http-validacao.js";

const caminho = process.argv;

async function processText(caminhoDeArquivo) {
  const result = await pegaArquivo(caminhoDeArquivo[2]);
  if (caminho[3] === "validar") {
    console.log(chalk.yellow("links validados: "), await validaURLs(result));
  } else {
    console.log(chalk.yellow("lista de links:"), result);
  }
}

processText(caminho);
