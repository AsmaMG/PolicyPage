import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
  
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <div>
          <TextField required id="standard-basic"  label="Customer Name" /><br/>
          <TextField id="standard-basic"  label="Contact Number" /><br/>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}