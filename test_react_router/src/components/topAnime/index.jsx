import React from "react";
import {useState, useEffect, useRef} from 'react';
import { getAnimeName } from "../utilities";
import axios from "axios";
import { getAnimeDesc } from "../utilities";
import Card from '../cards/card';
import './styles.css'

function TopAnime(props){

    const[displayList, updateDisplayList] = useState([]);
    const appScrollRef = useRef(null);
    const conScrollRef = useRef(null);
    const endState = useRef();

    appScrollRef.current = window;
    endState.current = displayList;

    useEffect(
        async () => {
            let response = await axios.get('https://api.aniapi.com/v1/anime')
            updateDisplayList(getAnimeDesc(response).documents.slice(0,12));
            
            const checkScroll =  setInterval(async () => {
                if(conScrollRef.current && appScrollRef.current.scrollY >= conScrollRef.current.offsetHeight*0.60 && endState.current.length +12< 100){                    
                    let response = await axios.get('https://api.aniapi.com/v1/anime');
                    updateDisplayList(getAnimeDesc(response).documents.slice(0,endState.current.length + 12));
                }
            }, 500)
            
            return function cleanup() {
                clearInterval(checkScroll);
                appScrollRef.current = null;
                endState.current = null;
            };
        }    
    ,[])

    return(
        <div className="top--list--App" ref={conScrollRef}>
            <div className="cards--container" >
                {displayList.map(
                    anime =>
                        <div key={anime.id}>
                            <Card
                                title={anime.titles.en}
                                image={anime.cover_image}
                                brief={anime.descriptions.en}
                                id={anime.id}
                                getData = {props.getDetails}
                            />
                        </div>
                )}
            </div>
        </div>
    )
}

export default TopAnime;
