import logo from './logo.svg';
import './App.css';
import Layout from './components/layouts/layout';
import Layout2 from './components/layouts/layout_v2';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/homePage/homePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
          </Route>
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
