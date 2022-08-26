const INITIAL_STATE = {
    colors: ["white", "black", "red", "green", "blue", "yellow"],
    index: 0,
  };






























// const actionNext = { type: "NEXT_COLOR" };
// const actionPrevious = { type: "PREVIOUS_COLOR" };
// // INICIANDO O ESTADO

// // REDUCER
// const reducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "NEXT_COLOR":
//       return { index: state.index + 1 };
//     case "PREVIOUS_COLOR":
//       return { index: state.index - 1 };
//   }
//   return state;
// };
// // INICIANDO O STORE
// const store = createStore(
//     reducer
//   );
// // DISPATCH
// const previous = document.getElementById("previous");
// previous.addEventListener("click", () => {
//   store.dispatch(actionPrevious);
// });
// const next = document.getElementById("next");
// next.addEventListener("click", () => {
//   store.dispatch(actionNext);
// });

// console.log(store.getState());
