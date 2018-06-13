import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

// Sections for this page
// import WorkSection from "views/LandingPage/Sections/WorkSection.jsx";

const dashboardRoutes = [];

class Impressum extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          routes={dashboardRoutes}
          brand="TRIGGERED-Impressum"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/new/stars.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Impressum</h1>
                <h3>
                  Lorem Ipsum 
                </h3> <br />
                <h4>
                  Lorem Ipsum
                </h4>
                <br />
                
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
       
        <Footer />
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(Impressum);
