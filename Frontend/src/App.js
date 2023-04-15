
import './App.css';
import Buisness from './Component/Buisness';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Edit from './Component/Edit';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
     <Route path='/' element={<Buisness/>} /> 
     <Route path='/edit/' element={ <Edit/>} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
