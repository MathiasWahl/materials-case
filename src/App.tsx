import React from 'react';

import {ImportData} from "./data-helpers";



const App = () => {

    const materials = ImportData();

    return (
      <div className=" p-12 grid gap-12 text-center">
          <h1 className="text-3xl text-green-700 font-bold">
              Hello world!
          </h1>
      </div>
    );
}

export default App;
