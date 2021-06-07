/*
Импортируем функцию "createStore", которая сосздаст хранилище
*/
import { createStore } from "redux";
/*
"counterReducer" - это редюсер. Специальная чистая функция, которая генерирует новую версию состояния на основе текущего стейта и созданого события. Принимает "стэйт" и "действие". На ружу выдает новую версию объекта "стейт".
*/
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
/*
"store" - это хранилище в виде объекта. Умеет возвращать текущий стейт. Умеет выполнять разные действия. Позволяет подписаться на изменение состояния
*/
let store = createStore(counterReducer);
store.subscribe(() => console.log(store.getState()));


/*
Это действия, которые изменяют стэйт
*/
store.dispatch({ type: "counter/incremented" });
// {value: 1}
store.dispatch({ type: "counter/incremented" });
// {value: 2}
store.dispatch({ type: "counter/decremented" });
// {value: 1}
