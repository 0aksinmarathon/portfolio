import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/profile_manako.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


import { Icon, InlineIcon } from "@iconify/react";
import badmintonIcon from "@iconify/icons-mdi/badminton";

import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import StraightenIcon from "@material-ui/icons/Straighten";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

import Timeline from "../../components/timeline.jsx";

import InfoArea from "../../components/InfoArea/InfoArea.js";

import SectionPillsVertical1 from "./SectionPillsVertical1.js";
import Experiences from "./experiences.js";
import Hobbies from "./hobbies.js";


const useStyles = makeStyles(styles);

function badmintonIcon1() {
  return <Icon icon={badmintonIcon} height={"61px"} height={"61px"} />;
}

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Parallax small filter image={require("assets/img/DSC_4637_00289.jpg")} />
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
                    <h3 className={classes.title}>Manako Shintaro</h3>
                    <h6>Novice Engineer</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                A novice Web-engineer working at hokan.Inc from January 2020,
                learning both front and back-end of the Saas product.{" "}
              </p>
            </div>

            <Experiences/>

            <Hobbies />
            <SectionPillsVertical1 />
            <div className={classes.section}>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={8}>
                    <h2>ポエム</h2>
                    <h4>私は貝になりたい</h4>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
            <div className={classes.textCenter + " " + classes.sharingArea}>
              <GridContainer justify="center">
                <h3> Social Media </h3>
              </GridContainer>
              <Button color="twitter">
                <i className={classes.socials + " fab fa-twitter"} />{" "}
                0aksinmarathon
              </Button>
              <Button color="github">
                <i className={classes.socials + " fab fa-github"} />{" "}
                0aksinmarathon
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
