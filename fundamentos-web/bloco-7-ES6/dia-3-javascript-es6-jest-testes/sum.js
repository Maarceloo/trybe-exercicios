// const sum = (a, b) => {
//     if (typeof(a) === 'string' || typeof(b) === 'string') {
//         throw new Error('parameters must be numbers')
//     }
//     return a + b
// }

// module.exports = sum;

const createStudent = (name) => {
  // const feedback = () => 'Eita pessoa boa!';
  const objeto = {
    nome: name,
    feedback: () => "Eita pessoa boa!",
  };
  console.log(objeto);
};

createStudent("marcelo");
