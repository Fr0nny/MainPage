import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Tooltip from "material-ui/Tooltip";

// @material-ui/icons
import { Apps, Home, Message } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
          <Button
            href="/"
            color="transparent"
            target=""
            className={classes.navLink}
          >
            <Home className={classes.icons} /> Home
          </Button>
        </ListItem>

      <ListItem className={classes.listItem}>
          <CustomDropdown
            buttonText="Die Band"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/profile-page1" className={classes.dropdownLink}>
                Charlotte - Gesang
              </Link>,
              <Link to="/profile-page2" className={classes.dropdownLink}>
                Max - Gitarre
              </Link>,
              <Link to="/profile-page3" className={classes.dropdownLink}>
                Patrick - Gitarre
              </Link>,
              <Link to="/profile-page4" className={classes.dropdownLink}>
                Ilja - Bass
              </Link>,
              <Link to="/profile-page5" className={classes.dropdownLink}>
                Chris - Schlagzeug
              </Link>,
            ]}
          />
        </ListItem>

        <ListItem className={classes.listItem}>
          <Button
            href="/Contact"
            color="transparent"
            target=""
            className={classes.navLink}
          >
            <Message className={classes.icons} /> Kontakt
          </Button>
        </ListItem>
      
      
      
      <ListItem className={classes.listItem}>
        <Tooltip
          id="facebook-tooltip"
          title="Folgt uns auf Facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            color="transparent"
            href="https://www.facebook.com/triggered.mainz"
            target="_blank"
            className={classes.navLink + " " + classes.socialIconsButton}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="soundcloud-tooltip"
          title="Folgt uns auf Soundcloud"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            href="https://soundcloud.com/triggered-mainz"
            target="_blank"
            color="transparent"
            className={classes.navLink + " " + classes.socialIconsButton}
          >
            <i className={classes.socialIcons + " fab fa-soundcloud"} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="youtube-tooltip"
          title="Folgt uns auf Youtube"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            href="https://www.youtube.com/channel/UCivEI_23SBgfiZ6_eUQn0mw"
            target="_blank"
            color="transparent"
            className={classes.navLink + " " + classes.socialIconsButton}
          >
            <i className={classes.socialIcons + " fab fa-youtube"} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Folgt uns auf Instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            color="transparent"
            href="https://www.instagram.com/"
            target="_blank"
            className={classes.navLink + " " + classes.socialIconsButton}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </IconButton>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
