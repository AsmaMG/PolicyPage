
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
const marks = [
    {
      value: 1,
      label: '10k',
    },
    {
      value: 20,
      label: '20k',
    },
    {
      value: 30,
      label: '30k',
    },
    {
      value: 40,
      label: '40',
    },
    {
      value: 50,
      label: '50k',
    },
    {
      value: 60,
      label: '1L',
    },
    {
      value: 70,
      label: '15L',
    },
    {
      value: 80,
      label: '20L',
    },
    {
      value: 90,
      label: '25L',
    },
    {
      value: 100,
      label: '30L',
    },
  
  ];
  function valuetext(value) {
    return `${value}`;
  }
  
  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

const useStyles = makeStyles((theme) => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 700,
    },
    title: {
      marginTop: theme.spacing(2),
    },
  }));

  export default function Review() {
    const classes = useStyles();
    return(
        <div>
    <Typography id="discrete-slider-restrict" gutterBottom>
         
       </Typography>
       <Slider
            defaultValue={20}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-restrict"
            step={null}
            valueLabelDisplay="auto"
          

            marks={marks}
          />
       </div>
       
       )
  }