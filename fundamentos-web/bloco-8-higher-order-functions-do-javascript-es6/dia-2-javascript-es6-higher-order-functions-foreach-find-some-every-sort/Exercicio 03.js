const expectedResult = {
  author: {
    birthYear: 1948,
    name: "George R. R. Martin",
  },
  genre: "Fantasia",
  id: 1,
  name: "As Crônicas de Gelo e Fogo",
  releaseYear: 1991,
};

function getNamedBook() {
  let lista = [expectedResult];
  lista.some((elemento) => {
    if (elemento.name.length === 26) {
      console.log(elemento.name);
    }
  });
}
getNamedBook();
