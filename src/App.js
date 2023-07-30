import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Restview from './Components/Restview';
import './bootstrap.min(2).css'


function App() {
  return (
    <div className='App'>
      <header className="App-header">



        <Header></Header>


        <Routes>

          <Route path='' element={<Home></Home>} />
          <Route path='viewrest/:id' element={<Restview></Restview>} />

        </Routes>


        <Footer></Footer>

      </header>

    </div>
  );
}

export default App;
