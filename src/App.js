import React from 'react'
import './styles/app.scss';
import Recipe from './components/Recipe'
import Sidebar from './components/Sidebar'
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="">
            <Sidebar />
             
          </div>
        </div>
        <div className="col-lg-6">
          <div className="App">
          <Recipe />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="App">
          
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
