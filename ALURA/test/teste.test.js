import { pegaArquivo } from "../index";

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];

describe("pegaArquivo::", () => {
  it("deve ser uma function", () => {
    expect(typeof pegaArquivo).toBe("function");
  });
  it("deve retornar array com resultados", async () => {
    const result = await pegaArquivo(
      "F:Emergir/NODEJS/ALURA/test/arquivos/texto1.md"
    );

    expect(result).toEqual(arrayResult);
  });
});
