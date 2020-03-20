import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/profilePage.js";

import StraightenIcon from "@material-ui/icons/Straighten";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

import InfoArea from "../../components/InfoArea/InfoArea.js";
import badmintonIcon from "@iconify/icons-mdi/badminton";

import { Icon, InlineIcon } from "@iconify/react";

function badmintonIcon1() {
    return <Icon icon={badmintonIcon} height={"61px"} height={"61px"} />;
  }
  

const useStyles = makeStyles(styles);

export default function Hobbies() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Some Talk About Myself</h2>
          <h5 className={classes.description}>
            Some friends of mine tell me that it seems like I{"'"}m not
            interested in anything but that{"'"}s not true at all. I am
            interested in so many things that the opposite seems to be true.
            Following is, not all but a part of my interests.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Badminton"
              description="Since I started when I was 12, I have been playing badminton continously. 
              Playing singles is quite too intense so I prefer playing doubles, epecially in later years.
              Not only in a part of school club activities, but also I play in some local teams, mainly managed by older people 
              (It should be noted that the fact they are older than me does not necessarily mean that they are easy plyers to play against).
              I also love watching badminton games on Youtube Live. Honestly, the time I watch games is when I can be most emotional, sad or happy in my daily life. 
              So yes, I'm really into it.
              "
              icon={badmintonIcon1}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Piano"
              description=""
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
  );
}
