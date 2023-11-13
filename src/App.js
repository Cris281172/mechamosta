import './App.css';
import {BrowserRouter} from "react-router-dom";
import RoutesWrapper from "./route/RoutesWrapper";
import React, {Suspense} from 'react';
import Loading from './components/loading/Loading';

function App() {
  return (
      <div className="App">
          <Suspense fallback={<Loading />}>
              <BrowserRouter>
                  <RoutesWrapper />
              </BrowserRouter>
          </Suspense>
      </div>  );
}

export default App;
