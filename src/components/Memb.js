import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export default function PaymentForm() {
  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const [inputList, setInputList] = useState([{ Spouse: "", Age: "" }]);
  const [inputListt, setdaughterList] = useState([{ Daughter: "", Age: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleInput = (e, index) => {
    const { name, value } = e.target;
    const list1 = [...inputListt];
    list1[index][name] = value;
    setdaughterList(list1);
  };
  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  const handleRemove= (index) => {
    const list1 = [...inputListt];
    list1.splice(index, 1);
    setdaughterList(list1);
  };
  // handle click event of the Add button
  const handleAddClick1 = () => {
    setInputList([...inputList, { Son: "", Age: "" }]);
  };
  const handleAddClick2 = () => {
    setdaughterList([...inputListt, { Daughter: "", Age: "" }]);
  };
  return (
    <div>
      <div className="App">
 
          <div className="spousediv disp" >
                <label className="lab">Spouse </label>
                <TextField id="standard-basic" label="Age" />
                <FormControlLabel
                  control={
                    <GreenCheckbox
                      checked={state.checkedG}
                      onChange={handleChange}
                      name="checkedG"
                      
                    />
                  }       
                />
              </div>

        {inputList.map((x, i) => {
          return (
            <div className="box">
              <div className="spousediv disp" >
                <label className="lab">Son </label>
                <TextField id="standard-basic" label="Age" />
                
                <Button
                  variant="contained"
                  className="removebtn"
                  color="default"
                  size="small"
                  onClick={() => handleRemoveClick(i)}
                >
                  Remove
                </Button>
              </div>
              </div>
         
          );
        })}
        {inputListt.map((x, i) => {
          return (
            <div className="box">
              <div className="spousediv disp" >
                <label className="lab">Daughter </label>
                <TextField id="standard-basic" label="Age" />
                
                <Button
                  variant="contained"
                  className="removebtn"
                  color="default"
                  size="small"
                  onClick={() => handleRemoveClick(i)}
                >
                  Remove
                </Button>
              </div>
              </div>
          );
        })}
        <div className="Addbtn">
                <Button
                  variant="contained"
                  size="small"
                  color="default"
                  onClick={handleAddClick1}
                  className="btnbtn"
                >
                  Add Son
                </Button>
              
                <Button
                  variant="contained"
                  size="small"
                  color="default"
                  onClick={handleAddClick2}
                >
                  Add Daughter
                </Button>
              </div>
      </div>
    </div>
  );
}



