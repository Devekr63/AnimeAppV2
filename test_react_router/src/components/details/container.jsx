import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {getAnimeDesc} from '../utilities';
import './styles.css'

function removeHtml(str){
    const regex = /<(\/*?)(?!(em|p|br\s*\/|strong))\w+?.+?>/gim;
    return str.replaceAll(regex, "");
}

function Container(props) {

    const [aniDetails, updateAniDetails] = useState(emptyAnimeInfo);

    useEffect(() => {
        console.log(" container useEffect");
        getRequest();
        }, [props.data]);

    async function getRequest(){
        let response = await axios.get(`https://api.aniapi.com/v1/anime/${props.data}`);
        console.log(response);
        console.log(" At container...");
        updateAniDetails(getAnimeDesc(response));
    }

    return (
        <div className="main" key={aniDetails.id}>
            <div className='anime--container'>
                <div className='image--box'>
                    <img src={aniDetails.cover_image}/>
                    <p>
                        <a href={aniDetails.trailer_url} target={"_blank"}>{aniDetails.titles.en}</a>
                        <a href={aniDetails.trailer_url} target={"_blank"}>{aniDetails.titles.jp}</a>
                    </p>
                </div>
                <div className='details--box'>
                    <ul>
                        <li>
                            <ul>
                                <li className='list--underlined'><span>Ratings</span>  {aniDetails.score}</li>
                                <li className='list--underlined'><span>Seasons</span>  {aniDetails.season_period}</li>
                                <li className='list--underlined'><span>First Episode</span>  {aniDetails.start_date.substring(0,10)}</li>
                                <li className='list--underlined'><span>Last Episode</span>  {aniDetails.end_date.substring(0,10)} </li>
                            </ul>
                        </li>
                        <li>
                            <div>Genres</div>
                            {<ul>
                                {aniDetails.genres.slice(0,5).map( genre => <li>{genre}</li>)}
                            </ul>
                            }
                        </li>
                    </ul>
                    <div className='desc--box'>
                        <div>Description</div>
                        <p>{
                            aniDetails.descriptions ? 
                            removeHtml(aniDetails.descriptions.en) : 
                            "Description not Available"}
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container;

const emptyAnimeInfo = {
    id : "",
    cover_image:"",
    trailer_url:"",
    titles: {en: "", jp :""},
    score : "",
    season_period : "",
    start_date:"",
    end_date:"",
    genres:[],
    descriptions: null
}