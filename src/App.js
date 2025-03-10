import './App.css';
//components
import NavBar from './components/NavBar';
import CodeforAlphawizz from './components/CodeforAlphawizz';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <Routes>
        <Route path = "/" element = {<CodeforAlphawizz />} />
        <Route path = "/all" element = {<AllUsers />} />
        <Route path = "/add" element = {<AddUser />} />
        <Route path = "/edit/:id" element = {<EditUser />} />
     </Routes>
     
    </BrowserRouter>
  );
}

export default App;
