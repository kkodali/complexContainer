import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./saga/saga";
import { loadState, saveState } from "./utils/localStorage";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
sagaMiddleware.run(rootSaga);
serviceWorker.unregister();
