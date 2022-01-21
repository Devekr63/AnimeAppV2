import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { removeHtmlTags } from '../utilities';

function getSpaces(val){
    let str = " " 
    for(let i=0; i<val; str+=" ", i++);
    return str;
}

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, minWidth:"75%", minHeight:300,
         boxShadow:"1px 1px 10px 10px rgba(0,0,0,0.25)",
         "&:hover":{"opacity":"0.25"} }}>
      <CardActionArea
            component={NavLink}
            to={"/"+props.id}>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {removeHtmlTags(props.brief).substring(0, 100)+`....${getSpaces(100 - removeHtmlTags(props.brief).substring(0, 100).length)}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}