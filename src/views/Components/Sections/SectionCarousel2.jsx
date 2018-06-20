import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import Quote from 'components/Typography/Quote.jsx';
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle2 from "assets/jss/material-kit-react/views/componentsSections/carouselStyle2.jsx";
import image1 from "assets/img/new/Triggered_Gruppe2.jpg";


class SectionCarousel2 extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    };
    return (
      <div className={classes.section} >
        <div className={classes.container} >
          <GridContainer>
            <GridItem xs={12} sm={12} md={10} className={classes.marginAuto}>
              {/* <Card carousel>*/}
              <Card>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    /> 
                  </div>
                </Carousel>

                <div className={classes.typo} >
                  <h1>Biografie</h1>
                  <h4 style={{textAlign: "justify"}}>
                    <p>Gegründet wurde die Band Triggered im Oktober 2016 von den drei
                    Mainzer Studenten Max, Chris und Patrick. Zu Beginn als Akustik-Projekt
                    angedacht, wurde die Band um eine Sängerin erweitert.
                  <br /><br />
                    Im Mai 2017 wurde im Zuge des Neuzugangs des Bassisten Ilja und des zeitgleichen
                    Bezuges eines Proberaums aus dem Akustik-Projekt die Entstehung der Coverband
                    Triggered.
                  <br /><br />
                    Mit einem Besetzungswechsel im Juli 2017, bei welchem die aktuelle Sängerin Charlotte
                    ans Mikrofon getreten ist, wurde die bis dahin bestehende Setlist neu arrangiert und
                    erweitert.
                  <br /><br />
                    Seit dem Sommer 2017 spielen Triggered regelmäßig auf Open Stages in Mainz.
                    Ihr Konzertdebüt gaben sie im Dezember 2017 im Kulturcafé Mainz, bei dem sie in einer
                    mehr als 1,5 stündigen Show über 100 Konzertbesuchern einheizten.
                  <br /><br />
                    Das Repertoire der Band umfasst Rock- und Metalsongs aus den letzten fünf Dekaden der
                    Musikgeschichte, wobei sie im stetigen Streben sind, die Setlist zu erweitern und
                    verfeinern.
                  <br /><br />
                    Der Bandname hat im Übrigen eine ganz besondere Aussage:
                    <Quote
                    text='to trigger'
                    author=' kommt aus dem Englischen und heißt etwas auszulösen.'
                    />
                    Zunächst fanden sich in der Bandgründungsphase immer einmal wieder Gründe für kleine
                    Diskussionen, man hat sich gegenseitig 'getriggered'.<br/>
                    Doch bei der Liebe zur Musik sind auch Differenzen schnell überwunden, denn darum
                    geht es in dieser Band.<br/>
                    Musik machen, Spaß haben und diesen auch an das Publikum hinaustragen!
                  <br /><br />
                    Und somit ist auch heute der Name Programm:
                    Triggered wollen etwas in ihrem Publikum auslösen. Die Musik soll mitreißen, das
                    Publikum anheizen und bei jedem Auftritt die Liebe und der Spaß an der Musik gefeiert
                    werden.</p>
                  </h4>
                </div>

              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10} className={classes.marginAuto}>
              <Card>
                <div className={classes.typo}>
                  <h3>Bisherige Auftirtte:</h3>
                  <ul>
                    <li>Kulturcafé (QKaff) - Mainz - 18.12.2017</li>
                    <li>Alexander The Great (ATG) - Mainz - 17.03.2018</li>
                    <li>BURR Open Air - Mörschied - 01.06.2018</li>
                  </ul>
                </div>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle2)(SectionCarousel2);
