import React, { Component } from "react";
import "./App.css";
import Notes from "./containers/Notes";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const initialState = {
  // files: [{ filename: "aaa.md", type: "file", content: "This is the content" }]
  files: []
};

const store = createStore(rootReducer, initialState);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="content">
          <div>
            <Provider store={store}>
              <Notes />
            </Provider>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
