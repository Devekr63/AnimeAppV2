import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Layout from './components/layouts/layout';
import LayDiv from './components/layouts/detailedLayout';
import Layout2 from './components/layouts/layout_v2';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/homePage/homePage';
import AnimeDetails from './components/details/container';
import Top from './components/topAnime/index';

function App() {
  // const [animeInfo, handleAnimeInfo] = useState();
  const [animePath, updateAnimePath] = useState("none");

  function getDetails(res){
    // console.log(res);
    console.log(res.id+" At app...");
   updateAnimePath(res.id);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home animeData={(anime) => getDetails(anime)}/>}/>
            <Route 
              path="top_100" 
              element={<Top/>}
              animeData={(anime) => getDetails(anime)}
              />
            <Route path="detailed" element={<LayDiv/>}>
              <Route path=":animeId" element={<AnimeDetails data={animePath}/>}/>
            </Route>  
          </Route>
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
