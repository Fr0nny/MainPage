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

import profile from "assets/img/new/Member1/Profilbild.jpg";

import image1 from "assets/img/new/Member1/Bild1.jpeg";
import image2 from "assets/img/new/Member1/Bild2.JPG";
import image3 from "assets/img/new/Member1/Bild3.jpg";
import image4 from "assets/img/new/Member1/Bild4.jpg";


import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class Member1 extends React.Component {
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
          brand=""
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/new/lotte-bg.jpg")} />
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
                      <h3 className={classes.title}>Charlotte Klein</h3>
                      <h6>Gesang</h6>
                      <IconButton
                        color="transparent"
                        className={classes.margin5}
                        href="https://twitter.com/lottihase"
                      >
                        <i className={classes.socials + " fab fa-twitter"} />
                      </IconButton>
                      <IconButton
                        color="transparent"
                        className={classes.margin5}
                        href="https://www.instagram.com/lottihase/"
                      >
                        <i className={classes.socials + " fab fa-instagram"} />
                      </IconButton>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  It is a long established fact that a reader will be distracted by the readable 
                  content of a page when looking at its layout. The point of using Lorem Ipsum is 
                  that it has a more-or-less normal distribution of letters, as opposed to using 
                  'Content here, content here', making it look like readable English.{" "}
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
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={image1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={image2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={image4}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
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
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(Member1);
