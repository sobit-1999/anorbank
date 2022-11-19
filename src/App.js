import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import JShPage from './components/pages/JShPage/JShPage';
// import BrowserRouter from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='/' element={<JShPage />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
