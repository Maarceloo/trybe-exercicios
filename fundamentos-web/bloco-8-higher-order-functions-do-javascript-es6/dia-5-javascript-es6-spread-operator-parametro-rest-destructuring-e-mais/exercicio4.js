const people = [
  {
    name: "Nicole",
    bornIn: 1992,
    nationality: "Australian",
  },
  {
    name: "Harry",
    bornIn: 2008,
    nationality: "Australian",
  },
  {
    name: "Toby",
    bornIn: 1901,
    nationality: "Australian",
  },
  {
    name: "Frida",
    bornIn: 1960,
    nationality: "Dannish",
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Brazilian",
  },
];

// escreva filterPeople abaixo
function filterPeople(array) {
  array.reduce((acc, elemento) => {
    if (
      elemento.nationality === "Australian" &&
      elemento.bornIn >= 1901 &&
      elemento.bornIn < 2001
    ) {
      console.log(elemento);
    }
  }, {});
}
filterPeople(people);
