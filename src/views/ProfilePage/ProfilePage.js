import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/grid";
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

import profile from "assets/img/profile_manakoのコピー.png";

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

import CustomLinearProgress from "../../components/CustomLinearProgress/CustomLinearProgress.js";

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
                    <h3 className={classes.title}>Manakoです</h3>
                    <h6>Engineer見習い</h6>
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
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>Experience</h2>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <link
                  rel="stylesheet"
                  href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
                ></link>
                <link
                  rel="stylesheet"
                  href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
                ></link>
                <link
                  rel="stylesheet"
                  href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
                ></link>
                <link
                  rel="stylesheet"
                  href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
                ></link>
                <link
                  rel="stylesheet"
                  href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
                ></link>
                <link
                  rel="stylesheet"
                  href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
                ></link>
                <link
                  rel="stylesheet"
                  href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
                ></link>
                <link
                  rel="stylesheet"
                  href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
                ></link>
                <link
                  rel="stylesheet"
                  href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
                ></link>
                <link
                  rel="stylesheet"
                  href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
                ></link>
                <link
                  rel="stylesheet"
                  href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
                ></link>

                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Languages/Frameworks",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer
                          justify="space-around"
                          alignContent={""}
                          wrap={"wrap"}
                        >
                          <div style={{ padding: 10 }}>
                            <i
                              style={{ fontSize: "150px" }}
                              className={"devicon-mysql-plain-wordmark colored"}
                            ></i>
                            <CustomLinearProgress
                              variant="determinate"
                              color="info"
                              value={60}
                            />
                          </div>
                          <div style={{ padding: 10 }}>
                            <i
                              style={{ fontSize: "150px" }}
                              className={
                                "devicon-python-plain-wordmark colored"
                              }
                            ></i>
                            <CustomLinearProgress
                              variant="determinate"
                              color="info"
                              value={60}
                            />
                          </div>
                          <div style={{ padding: 10 }}>
                            <i
                              style={{ fontSize: "150px" }}
                              className="devicon-react-original-wordmark colored"
                            ></i>
                            <CustomLinearProgress
                              variant="determinate"
                              color="info"
                              value={60}
                            />
                          </div>
                          <div style={{ padding: 10 }}>
                            <i
                              style={{ fontSize: "150px" }}
                              className="devicon-javascript-plain colored"
                            ></i>
                            <CustomLinearProgress
                              variant="determinate"
                              color="info"
                              value={60}
                            />
                          </div>
                          <div style={{ padding: 10 }}>
                            <i
                              style={{ fontSize: "150px" }}
                              className="devicon-html5-plain-wordmark colored"
                            ></i>
                            <CustomLinearProgress
                              variant="determinate"
                              color="info"
                              value={60}
                            />
                          </div>
                          <div style={{ padding: 10 }}>
                            <i
                              style={{ fontSize: "150px" }}
                              className="devicon-django-plain colored"
                            ></i>
                          </div>
                          <div style={{ padding: 10 }}>
                            <i
                              style={{ fontSize: "150px" }}
                              className="devicon-go-line colored"
                            ></i>
                            <Grid px={"5"}>
                              <CustomLinearProgress
                                variant="determinate"
                                color="info"
                                value={60}
                              />
                            </Grid>
                          </div>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "DevTools",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="space-around" wrap={"wrap"}>
                          <div style={{ padding: 10 }}>
                            <i
                              style={{ fontSize: "220px" }}
                              className="devicon-github-plain-wordmark colored"
                            ></i>
                          </div>
                          <div style={{ padding: 10 }}>
                            <i
                              style={{ fontSize: "220px" }}
                              className="devicon-webstorm-plain-wordmark colored"
                            ></i>
                          </div>
                          <div style={{ padding: 10 }}>
                            <i
                              style={{ fontSize: "220px" }}
                              className="devicon-chrome-plain-wordmark colored"
                            ></i>
                          </div>
                          <div style={{ padding: 10 }}>
                            <i
                              style={{ fontSize: "150px" }}
                              className={
                                "devicon-docker-plain-wordmark colored"
                              }
                            ></i>
                          </div>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "OS",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="space-around" wrap={"wrap"}>
                          <i
                            style={{ fontSize: "250px" }}
                            className="devicon-apple-original colored"
                          ></i>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
            <div className={classes.section}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <h2 className={classes.title}>Some Talk</h2>
                  <h5 className={classes.description}>
                    Some friends of mine tell me that it seems like I{"'"}m not
                    interested in anything but that{"'"}s not true at all. I am
                    interested in so many things that the opposite seems to be
                    true. Following is, not every but a part of my interests.
                  </h5>
                </GridItem>
              </GridContainer>
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Badminton"
                      description="バドミントンはいいぞ"
                      icon={badmintonIcon1}
                      iconColor="info"
                      vertical
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Piano"
                      description="下手だけど弾けます"
                      icon={StraightenIcon}
                      iconColor="success"
                      vertical
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Reading"
                      description="読書も良い、心を豊かにしてくれる"
                      icon={ImportContactsIcon}
                      iconColor="danger"
                      vertical
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
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
