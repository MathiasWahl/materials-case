import React from 'react';

import { ImportData } from './data-helpers';
import { Navbar } from './components/Navbar';
import { MaterialBox } from './components/MaterialBox';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MaterialView } from './components/MaterialView';
import { MaterialDetail } from './components/MaterialDetail';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<MaterialView />} />
        <Route
          path="/material/:slug"
          element={
            <MaterialDetail
              title={''}
              Address={''}
              quantity={0}
              unit={''}
              available={false}
              imageUrl={''}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
