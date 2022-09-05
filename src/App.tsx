import React from 'react';

import {ImportData} from "./data-helpers";



const App = () => {

    const materials = ImportData();

    return (
      <div className=" p-12 grid gap-12 text-center">
          <h1 className="text-3xl text-green-700 font-bold">
              Hello world!
          </h1>
          <p>
              I wanted to add a nice paragraph here to make the page have more contents.
          </p>
      </div>
    );
}

export default App;
