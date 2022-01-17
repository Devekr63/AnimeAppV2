import React from 'react'
import AutoComplete from './autocomplete';
import './styles.css'

function homePage(props) {
    return (
        <div className='home--container'>
            <AutoComplete animeData={props.animeData}/>
        </div>
    )
}

export default homePage