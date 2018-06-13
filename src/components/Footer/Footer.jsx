import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "material-ui";


import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://fr0nny.github.io/"
                className={classes.block}
              >
                FronnyTheDev
              </a>
            </ListItem>
            
            <ListItem className={classes.inlineBlock}>
              <a
                href="/Datenschutz"
                className={classes.block}
              >
                Datenschutz
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/Impressum"
                className={classes.block}
              >
                Impressum
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , created by{" "}
          <a href="https://fr0nny.github.io/" className={aClasses}>
            FronnyTheDev
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
