import fetch from "node-fetch";

function manejaErros(erro) {
  throw new Error(erro.message);
}

async function checkStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise.all(
      arrayURLs.map(async (url) => {
        const res = await fetch(url);

        return res.status;
      })
    );

    return arrayStatus;
  } catch (erro) {
    manejaErros(erro);
  }
}

function geraArrayDeURLs(arrayLinks) {
  return arrayLinks.map((link) => Object.values(link).join());
}

async function validaURLs(arrayLinks) {
  const links = geraArrayDeURLs(arrayLinks);
  const statusLinks = await checkStatus(links);
  const results = arrayLinks.map((objeto, index) => ({
    ...objeto,
    status: statusLinks[index],
  }));

  return results;
}

export default validaURLs;
