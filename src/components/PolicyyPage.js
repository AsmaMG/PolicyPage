import {Component} from 'react';
import { render } from "react-dom";
import PropTypes from "prop-types";
import React, { forwardRef } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MaterialTable from 'material-table';
import {Link} from 'react-router-dom';
import { Box } from '@material-ui/core';

const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {}
  });

export default class  Example extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:[
                { Policy_Id: 23, Customer: 'Albert', Contact_Number: 9876767678,Reneval_Date: 6-3-2020,Premium_Amount:600000 },
                { Policy_Id:77, Customer: 'Stephan', Contact_Number: 7685674532,Reneval_Date: 2-3-2020,Premium_Amount:450000 },
                { Policy_Id: 26, Customer: 'Thomas', Contact_Number: 8234546897,Reneval_Date: 3-3-2020,Premium_Amount:500000 },
              ]         
        }

      }

      
    //   deleteItem(i){
    //     const { data } = this.state;
    //     data.splice(i, 1);
    //     this.setState({ data });
    //   }
     deleteItem = itemId => {
         console.log("this is policy item",itemId)
        const data = this.state.data.filter(item => item.Policy_Id !== itemId);
        this.setState({ data: data });
      };
      render(props) {
        const { classes } = this.props;

        //  const deleteItem=(i)=>{
        //     const { data } = this.state;
        //     data.splice(i, 1);
        //     this.setState({ data });
        //   }
        
       
        
         this.tableIcons = {

            Add: forwardRef((props, ref) => (
              <Box ref={ref} className="">
                <Button
                  variant="contained"
                  color="primary"
                  // size="small"
                  // startIcon={<BoxIcons.BiDownload className="export_btn" />}
                >
                  Add policy
                </Button>
              </Box>
            )),
            
          };
    return (
        <div>
          {/* <div> */}
          {/* <Link to="/policydetails">
          <Button className="btndiv"  variant="contained" color="primary" size="small">
          Create Policy
        </Button>
        </Link> */}
          {/* </div> */}
          {/* <Link to="/crud" > */}
          <div className="tablediv">
        <MaterialTable
          title="Policy Details"
          columns={[
            { title: 'Policy Id', field: 'Policy_Id' , type: 'numeric'},
            { title: 'Customer Name', field: 'Customer' },
            { title: 'Contact Number', field: 'Contact_Number', type: 'numeric' },
            { title: 'Reneval Date', field: 'Reneval_Date', type: 'numeric' },
            { title: 'Premium Amount', field: 'Premium_Amount', type: 'numeric' },
            
  
            // {
            //   title: 'Birth Place',
            //   field: 'birthCity',
            //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            // },
          ]}
          data={this.state.data}
        //   data={[
        //     { Policy_Id: 23, Customer: 'Albert', Contact_Number: 9876767678,Reneval_Date: 6-3-2020,Premium_Amount:600000 },
        //     { Policy_Id:77, Customer: 'Stephan', Contact_Number: 7685674532,Reneval_Date: 2-3-2020,Premium_Amount:450000 },
        //     { Policy_Id: 26, Customer: 'Thomas', Contact_Number: 8234546897,Reneval_Date: 3-3-2020,Premium_Amount:500000 },
        //   ]}
          actions={[
              {
              
                  icon:this.tableIcons.Add,
                  tooltip: "add policy",
                  position: "toolbar",
                  className: "h1 add_icon_profile",
      
                  onClick: () => {
              this.props.history.push({
                      pathname: "/policyDetails",
                    });
                  },
                },
          //   {
          //     icon:"Add_icon",
          //     tooltip: "add policy",
          //     position: "toolbar",
          //     className: "h1 add_icon_profile",
  
          //     // onClick: () => {
          //     //   this.props.history.push({
          //     //     pathname: "/createPolicy",
          //     //   });
          //     // },
          //   },
            {
              icon: 'save',
              tooltip: 'Save User',
              onClick: (event, rowData) => alert("You saved " + rowData.Customer)
            },
            rowData => ({
              
              icon: 'delete',
              tooltip: 'Delete User',
             
              onClick:(event, rowData) => this.deleteItem(rowData.Policy_Id),
            })
          ]}
          options={{
            headerStyle: {
              backgroundColor: '#01579b',
              color: '#FFF'
            },
            actionsColumnIndex: -1
            
          }}
        /></div>
        {/* </Link> */}
        </div>
      )

      }

    }