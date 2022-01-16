import logo from './logo.svg';
import './App.css';
import Layout from './components/layouts/layout';
import Layout2 from './components/layouts/layout_v2';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Hello from './components/cards/hello';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="hello" element={<Hello/>}/>
          </Route>
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
