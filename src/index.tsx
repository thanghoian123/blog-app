import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import AuthProvider from "./context/Auth/AuthProvider";
// import firebase from "./firebase";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { rootReducer } from "./saga/reducers/reducer";
import { rootSaga } from "./saga/sagas/saga";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// console.log(firebase);

sagaMiddleware.run(rootSaga);

root.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
