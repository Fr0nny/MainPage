import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import imp_dat_style from "assets/jss/material-kit-react/views/imp_dat.jsx";

// Sections for this page
// import WorkSection from "views/LandingPage/Sections/WorkSection.jsx";

const dashboardRoutes = [];

class Datenschutz extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          routes={dashboardRoutes}
          brand="TRIGGERED-Datenschutz"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />

        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{textAlign: "justify"}}>
              <h1 className={classes.title}>Datenschutz</h1><br />

                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder Email-Adressen) 
                erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br />
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte 
                ist nicht möglich. <br />
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit 
                ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br />
                <br />

              <br /><strong>Google Analytics</strong><br /><br />
                Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und 
                die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server 
                von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die 
                Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls 
                an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der 
                Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem 
                Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch 
                Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.<br /><br />

              <br /><strong>Datenschutzerklärung für die Nutzung von Facebook-Plugins</strong><br /><br />
                Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook, Anbieter Facebook Inc., 1 Hacker Way, Menlo Park, California 94025, USA, integriert. Die Facebook-Plugins erkennen 
                Sie an dem Facebook-Logo oder dem „Like-Button“ („Gefällt mir“) auf unserer Seite. Eine Übersicht über die Facebook-Plugins finden Sie hier: 
                <a href="http://developers.facebook.com/docs/plugins/"> http://developers.facebook.com/docs/plugins/</a>.
                Wenn Sie unsere Seiten besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, 
                dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den Facebook „Like-Button“ anklicken während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte 
                unserer Seiten auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten 
                keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter 
                <a href="http://de-de.facebook.com/policy.php"> http://de-de.facebook.com/policy.php</a>.
                Wenn Sie nicht wünschen, dass Facebook den Besuch unserer Seiten Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.
              <br /><br />

              <br /><strong>Kontaktformular</strong><br /><br />
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              <br /><br />

              <br /><strong>Auskunft, Löschung und Sperrung</strong><br /><br />
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der 
                Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu, sowie zu weiteren Fragen zum Thema personenbezogene Daten, 
                können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              <br /><br />

              <br /><strong>Cookies</strong><br /><br />
                Die Internetseiten verwenden teilweise sogenannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, 
                unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
                Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuches automatisch gelöscht. Andere Cookies bleiben auf Ihrem 
                Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte 
                Fälle oder generell auszuschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität 
                dieser Website eingeschränkt sein.
              <br /><br /><br />
              </div>
            </GridItem>
          </GridContainer>
        </div>
        

     
      <Footer />
    </div>
    );
  }
}

export default withStyles(imp_dat_style)(Datenschutz);




// Webfonts von Google

// Wir bedienen uns auf Grundlage unserer berechtigten Interessen (Betrieb und Optimierung unserer Webseiten)
//  im Sinne des Artikel 6 Absatz 1 Buchstabe f DSGVO des Web-Schriftarten-Dienstes „Google Webfonts“,
//   angeboten von der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA („Google“).
//    Bei jedem Besuch dieser Website werden Dateien von einem Google-Server geladen, um den Text in 
//    einer bestimmten Schriftart anzuzeigen. Ihre IP-Adresse kann auf einen Server des Anbieters übertragen 
//    und im gewöhnlichen Serverprotokoll gespeichert werden. Die weitere Verarbeitung dieser Informationen 
//    liegt in der Verantwortung von Google. Informationen zu Bedingungen und Einstellungen finden Sie in 
//    den unter https://www.google.com/policies/privacy/ niedergelegten Datenschutzbestimmungen von Google.

   
