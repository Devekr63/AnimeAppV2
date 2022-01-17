import React from 'react';
import './styles.css'

function removeHtml(str){
    const regex = /<(\/*?)(?!(em|p|br\s*\/|strong))\w+?.+?>/gim;
    return str.replaceAll(regex, "");
}

function container(props) {
    return (
        <>
            <div className="main" key={props.data.id}>
                <div className='anime--container'>
                    <div className='image--box'>
                        <img src={props.data.cover_image}/>
                        <p>
                            <a href={props.data.trailer_url} target={"_blank"}>{props.data.titles.en}</a>
                            <a href={props.data.trailer_url} target={"_blank"}>{props.data.titles.jp}</a>
                        </p>
                    </div>
                    <div className='details--box'>
                        <ul>
                            <li>
                                <ul>
                                    <li className='list--underlined'><span>Ratings</span>  {props.data.score}</li>
                                    <li className='list--underlined'><span>Seasons</span>  {props.data.season_period}</li>
                                    <li className='list--underlined'><span>First Episode</span>  {props.data.start_date.substring(0,10)}</li>
                                    <li className='list--underlined'><span>Last Episode</span>  {props.data.end_date.substring(0,10)} </li>
                                </ul>
                            </li>
                            <li>
                                <div>Genres</div>
                                {<ul>
                                    {props.data.genres.slice(0,5).map( genre => <li>{genre}</li>)}
                                </ul>
                                }
                            </li>
                        </ul>
                        <div className='desc--box'>
                            <div>Description</div>
                            <p>{
                                props.data.descriptions ? 
                                removeHtml(props.data.descriptions.en) : 
                                "Description not Available"}
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default container;