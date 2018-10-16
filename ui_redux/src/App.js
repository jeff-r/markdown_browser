import React, { Component } from "react";
import "./App.css";
import Notes from "./containers/Notes";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const initialState = {
  files: [],
  ui_state: {
    editing: false
  }
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="content">
          <div>
            <Provider store={store}>
              <div>
                <Notes />
              </div>
            </Provider>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
