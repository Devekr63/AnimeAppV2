import React from "react";
import {useState, useEffect} from 'react';
import { getAnimeName } from "../utilities";
import axios from "axios";
import { getAnimeDesc } from "../utilities";
import Card from '../cards/card';
import './styles.css'

function TopAnime(props){

    const[topAnimeList, updatetopAnimeList] = useState([]);

    useEffect(
        async () => {
            let response = await axios.get('https://api.aniapi.com/v1/anime')
            // console.log(getAnimeName(response.data));
            // console.log(response);
            updatetopAnimeList(getAnimeDesc(response).documents);

        }    
    ,[])
    return(
        <div className="top--list--App">
            <div className="cards--container">
                {topAnimeList.slice(0,12).map(
                    anime =>
                        <div>
                            <Card
                                title={anime.titles.en}
                                image={anime.cover_image}
                                brief={anime.descriptions.en}
                                id={anime.id}
                                key={anime.id}
                                getData = {props.animeData}
                            />
                        </div>
                )}
            </div>
        </div>
    )
}

export default TopAnime;