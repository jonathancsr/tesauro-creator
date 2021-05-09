import React,{useEffect} from "react";

import {getArticlesWithQueryAndDate} from './service/getArticles'


function App() {
  useEffect(() => {
    getArticlesWithQueryAndDate('ICSE',2018,2021).then(res => console.log(res.data))
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
