# Checklist do react-redux

_Antes de começar_

- [ ] pensar como será o _formato_ do seu estado global
- [ ] pensar quais actions serão necessárias na sua aplicação

_Instalação_

- [ ] npx create-react-app my-app-redux;
- [ ] npm install --save redux react-redux redux-devtools-extension;

_Criar dentro do diretório src:_

- [ ] diretório `store`

**Criar dentro do diretório `store`**

- [ ] arquivo `index.js`
- [ ] diretório `actions`
- [ ] diretório `reducers`

_Criar dentro do diretório `actions`:_

- [ ] arquivo `index.js`.

_Criar dentro do diretório `reducers`:_

- [ ] arquivo `index.js`.
- [ ] arquivo `nomeDoReducer.js`.

_Criar dentro do arquivo `reducers/nomeDoReducer.js`:_

- [ ] estado inicial
- [ ] criar função reducer com `switch` retornando apenas a opção `default`
- [ ] exportar `nomeDoReducer`

exemplo
```js
const INITIAL_STATE = [];

const redditReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
}

export default redditReducer;
```

_Criar dentro do arquivo `reducers/index.js`:_

- [ ] criar `rootReducer` usando o `combineReducers`
- [ ] exportar `rootReducer`

exemplo:
```js
import { combineReducers } from 'redux';
import redditReducer from "./redditReducer";

const rootReducer = combineReducers({ redditReducer });

export default rootReducer;
```

_No arquivo store/index.js:_

- [ ] importar `rootReducer` e usá-lo na criação da `store`
- [ ] configurar o [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm)
- [ ] exportar a `store`

exemplo:
```js
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
```

_No arquivo src/index.js:_

- [ ] importar a `store`
- [ ] definir o Provider, `<Provider store={ store }>`, para fornecer os estados a todos os componentes encapsulados em `<App />`.

_Na pasta actions:_

- [ ] criar e exportar os actionTypes, por exemplo: `const ADD_TO_CART = 'ADD_TO_CART';`
- [ ] criar e export os actions creators necessários

_Nos reducers:_

- [ ] criar os casos para cada action criada, retornando o devido estado atualizado

_Nos componentes que irão ler o estado:_

- [ ] criar a função `mapStateToProps`
- [ ] exportar usando o `connect`

_Nos componentes que irão modificar o estado:_

- [ ] criar a função `mapDispatchToProps`
- [ ] exportar usando o `connect`

```js
export default connect(mapStateToProps, mapDispatchToProps)(Component);
```
