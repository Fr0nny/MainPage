import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import ScrollUpButton from "react-scroll-up-button";

import profile from "assets/img/new/Member5/chris.jpg";

import image1 from "assets/img/new/Member5/Bild1.jpg";
import image3 from "assets/img/new/Member5/Bild3.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class Member5 extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="TRIGGERED - Chris"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/new/Member5/chris-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Chris</h3>
                      <h6>Schlagzeug</h6>
                      
                      <IconButton
                        color="transparent"
                        className={classes.margin5}
                        href="https://twitter.com/Fr0nny"
                      >
                        <i className={classes.socials + " fab fa-twitter"} />
                      </IconButton>
                      {/*<IconButton
                        color="transparent"
                        className={classes.margin5}
                        href="https://discord.com"
                      >
                        <i className={classes.socials + " fas fa-envelope"} />
                      </IconButton>*/}
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  <strong>Musikalische Einflüsse:</strong> Iron Maiden, Blind Guardian, Judas Priest, Manowar, Iced Earth....
                  {" "}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Bilder",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                              <img
                                alt="image1"
                                src={image1}
                                className={navImageClasses}
                              />
                              
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <img
                                alt="image3"
                                src={image3}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <ScrollUpButton />
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(Member5);
