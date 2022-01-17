import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Layout from './components/layouts/layout';
import Layout2 from './components/layouts/layout_v2';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/homePage/homePage';
import AnimeDetails from './components/details/container';

function App() {
  const [animeInfo, handleAnimeInfo] = useState();
  const [animePath, updateAnimePath] = useState("");

  function getDetails(res){
    console.log(res);
   handleAnimeInfo(res);
   updateAnimePath(res.id);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home animeData={(anime) => getDetails(anime)}/>}/>
            <Route path={animePath.toString().trim()} element={<AnimeDetails data={animeInfo}/>}/>
          </Route>
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
