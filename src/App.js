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
          <div className="sidebar">
            <Sidebar />
             
          </div>
        </div>
        <div className="col-lg-6">
          <div className="body">
          <Recipe />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="add">
          
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
