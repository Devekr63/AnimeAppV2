import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import {useState, useEffect} from 'react'
import {getAnimeName, getAnime, getAnimeDesc, getAnimeFromApi} from '../utilities'
import { searchButtonStyle, autoStyle } from './searchStyles';
import {NavLink} from 'react-router-dom';


const useStyles = makeStyles(autoStyle)


export default function FreeSolo(props) {
    const classes = useStyles();
    const [animeList, handleAnimeList] = useState([]);
    const [searchedAnime, handlesearch] = useState();
    const [animeDesc, handleDesc] = useState("");

    useEffect(() => {
      getRequest();
    }, []);

    async function getRequest(){
      let response = await axios.get('https://api.aniapi.com/v1/anime')
      // console.log(getAnimeName(response.data));
      handleAnimeList(getAnimeName(response.data));
    }
    
    async function getAnimeDetails(animeInfo){
      let response = await axios.get(`https://api.aniapi.com/v1/anime/${animeInfo.id}`)
      handleDesc(getAnimeDesc(response).id);
      await props.animeData(getAnimeDesc(response));
    }

    function searchHandler(event, value){
      handlesearch(
        value ? getAnime(animeList, value) : 
        getAnimeFromApi(animeList, event.target.value, handleAnimeList)
      );
    }


  return (
    <Stack spacing={0} sx={{ width: 300}}>
      <Autocomplete
        // className={classes.root}
        freeSolo
        id="free-solo-2-demo"
        sx={{height:"4rem"}}
        disableClearable
        options={animeList.map(animeObject => animeObject.title)}
        onChange={(event, value)=>searchHandler(event, value)}
        renderInput={(params) => (
          <TextField
            {...params}
            className={classes.root}
            label="Your favourite anime..."
            onChange={(event,value)=>searchHandler(event,value)}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      <Button 
        size="medium" 
        variant="contained" 
        color="primary"
        onClick={() => getAnimeDetails(searchedAnime)}
        component={NavLink}
        to={
          searchedAnime && searchedAnime.id ?
          "/"+searchedAnime.id.toString() :
          ""
        }
        sx={searchButtonStyle}>
        Search
      </Button>
    </Stack>
  );
}