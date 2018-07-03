import React from "react";
import axios from "axios";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import ScrollUpButton from "react-scroll-up-button";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";


import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";


class WorkSection extends React.Component {

  handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "", 
            url:"http://localhost:3000/Contact", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    // resetForm(){
    //     document.getElementById('contact-form').reset();
    // }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Kontakt</h2>
            <h4 className={classes.description}>
              
            </h4>
            <form method="" onSubmit={this.handleSubmit.bind(this)} action="">
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Dein Name"
              id="name"
              name="name"
              type="text"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Email Adresse"
              id="email"
              name="email"
              type="email"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
          <CustomInput
            labelText="Deine Nachricht"
            id="message"
            name="message"
            formControlProps={{
              fullWidth: true,
              className: classes.textArea
            }}
            inputProps={{
              multiline: true,
              rows: 5
            }}
          />
          <GridContainer justify="center">
            <GridItem
              xs={12}
              sm={12}
              md={4}
              className={classes.textCenter}
            >
              <Button type="submit" color="primary">Senden</Button>
            </GridItem>
          </GridContainer>
        </GridContainer>
      </form>
      <ScrollUpButton />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);




// <div className="col-sm-4 offset-sm-4">
//                 <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//                     <div className="form-group">
//                         <label for="name">Name</label>
//                         <input type="text" className="form-control" id="name" />
//                     </div>
//                     <div className="form-group">
//                         <label for="exampleInputEmail1">Email address</label>
//                         <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
//                     </div>
//                     <div className="form-group">
//                         <label for="message">Message</label>
//                         <textarea className="form-control" rows="5" id="message"></textarea>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>