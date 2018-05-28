import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import image from "assets/img/faces/github-profile.jpg";
class SectionTypography extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.container}>
            <GridContainer>
              <GridItem xs={2} sm={2} className={classes.marginLeft}>
              </GridItem>
              <GridItem xs={2} sm={2} className={classes.marginLeft}>
              </GridItem>
              <GridItem xs={2} sm={2} className={classes.marginLeft}>
              </GridItem>
              <GridItem xs={2} sm={2} className={classes.marginLeft}>
              </GridItem>
              <GridItem xs={2} sm={2}>
              <div className={classes.profile} style={{marginTop: -70}}>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
               </div>
              </GridItem>
               <GridItem xs={2} sm={2} className={classes.marginLeft}>
              </GridItem>
             </GridContainer>
      </div>
    );
  }
}

export default withStyles(typographyStyle)(SectionTypography);
