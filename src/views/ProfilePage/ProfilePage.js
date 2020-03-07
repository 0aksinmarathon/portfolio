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

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import DevIcon from "devicon-react-svg";

const useStyles = makeStyles(styles);

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
        <Header
            brand="ヘッダーです"
            color="info"
            rightLinks={
                <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                        <Button
                            href="#pablo"
                            className={classes.navLink + " " + classes.navLinkActive}
                            onClick={e => e.preventDefault()}
                            color="transparent"
                        >
                            Discover
                        </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Button
                            href="#pablo"
                            className={classes.navLink}
                            onClick={e => e.preventDefault()}
                            color="transparent"
                        >
                            Profile
                        </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Button
                            href="#pablo"
                            className={classes.navLink}
                            onClick={e => e.preventDefault()}
                            color="transparent"
                        >
                            Settings
                        </Button>
                    </ListItem>
                </List>
            }
        />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
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
                    <h3 className={classes.title}>Manakoです</h3>
                    <h6>Engneer見習い</h6>
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
                A novice Web-engineer working at hokan.Inc from January 2020, learning both front and back-end of the Saas product.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <link rel="stylesheet"
                        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
                  <link rel="stylesheet"
                        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
                  <link rel="stylesheet"
                        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
                  <link rel="stylesheet"
                        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
                  <link rel="stylesheet"
                        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
                  <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                              <i style={{fontSize: '100px'}} className={"devicon-mysql-plain-wordmark colored"}></i>
                              <i style={{fontSize: '100px'}} className={"devicon-python-plain-wordmark colored"}></i>
                              {/*<i style={{fontSize: '150px'}} className="devicon-react-original-wordmark colored"></i>*/}
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                              <i style={{fontSize: '100px'}} className={"devicon-docker-plain-wordmark colored"}></i>
                              <i style={{fontSize: '100px'}} className={"devicon-git-plain-wordmark colored"}></i>
                              <i style={{fontSize: '100px'}} className="devicon-html5-plain-wordmark colored"></i>
                              <i style={{fontSize: '100px'}} className="devicon-django-plain colored"></i>
                          </GridItem>
                            {/*<GridItem xs={12} sm={12} md={4}>*/}
                            {/*    */}
                            {/*    */}
                            {/*</GridItem>*/}
                            {/*<GridItem xs={12} sm={12} md={4}>*/}
                            {/*    */}
                            {/*</GridItem>*/}
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                              <i className=" fab fa-react fa-8x" />
                              <i className=" fab fa-js-square fa-8x" />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                              <i className=" fab fa-html5 fa-9x" />
                              <i className=" fab fa-python fa-9x" />

                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>


            </GridContainer>
              <div className={classes.section}>
              <div className={classes.container}>
                  <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={8}>
                          <h2>ポエム</h2>
                          <h4>
                              ポエムを書く場所
                          </h4>
                      </GridItem>
                  </GridContainer>
              </div>
          </div>
              <div className={classes.textCenter + " " + classes.sharingArea}>
                  <GridContainer justify="center">
                      <h3> Social Media </h3>
                  </GridContainer>
                  <Button color="twitter">
                      <i className={classes.socials + " fab fa-twitter"} /> 0aksinmarathon
                  </Button>
                  <Button color="github">
                      <i className={classes.socials + " fab fa-github"} /> 0aksinmarathon
                  </Button>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
