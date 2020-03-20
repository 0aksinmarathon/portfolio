import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import NavPills from "components/NavPills/NavPills.js";

import CustomLinearProgress from "../../components/CustomLinearProgress/CustomLinearProgress.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);


export default function Experiences() {
    const classes = useStyles();
    return (
    <Grid>
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
                        value={80}
                      />
                    </div>
                    <div style={{ padding: 10 }}>
                      <i
                        style={{ fontSize: "150px" }}
                        className={"devicon-python-plain-wordmark colored"}
                      ></i>
                      <CustomLinearProgress
                        variant="determinate"
                        color="info"
                        value={90}
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
                        value={30}
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
                        value={15}
                      />
                    </div>
                    <div style={{ padding: 10 }}>
                      <i
                        style={{ fontSize: "150px" }}
                        className="devicon-django-plain colored"
                      ></i>
                      <Grid px={"5"} margin-top={20}>
                      <CustomLinearProgress
                        variant="determinate"
                        color="info"
                        value={60}
                      />
                    </Grid>
                    </div>
                    
                    <div style={{ padding: 40 }}>
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
                        className={"devicon-docker-plain-wordmark colored"}
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
    </Grid>
  );
}
