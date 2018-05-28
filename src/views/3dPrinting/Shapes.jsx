import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Grid from "material-ui/Grid";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionBasics from "views/Components/Sections/SectionBasics.jsx";
import SectionNavbars from "views/Components/Sections/SectionNavbars.jsx";
import SectionTabs from "views/Components/Sections/SectionTabs.jsx";
import SectionPills from "views/Components/Sections/SectionPills.jsx";
import SectionNotifications from "views/Components/Sections/SectionNotifications.jsx";
import SectionJavascript from "views/Components/Sections/SectionJavascript.jsx";
import SectionCarousel from "views/Components/Sections/SectionCarousel.jsx";
import SectionCompletedExamples from "views/Components/Sections/SectionCompletedExamples.jsx";
import SectionLogin from "views/Components/Sections/SectionLogin.jsx";
import SectionExamples from "views/Components/Sections/SectionExamples.jsx";
import SectionDownload from "views/Components/Sections/SectionDownload.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import image from "assets/img/faces/avatar.jpg";

import Code from "@material-ui/icons/Code";
import ShortText from "@material-ui/icons/ShortText";
import Work from "@material-ui/icons/Work";
import GroupWork from "@material-ui/icons/GroupWork";
import Archive from "@material-ui/icons/Archive";
import NavPills from "components/NavPills/NavPills.jsx";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";

import liberation from "assets/img/screen-shot.jpg";
import bloodnr from "assets/img/screen-shot-bldrnr.jpg";
import strbcks from "assets/img/str-bucks.jpg";


var divStyle = {
  position: "absolute"
};

class Shapes extends React.Component {
   constructor(props){
    super(props);
     this.state={
       hover: false
     };
     this.hoverOn= this.hoverOn.bind(this);
     this.hoverOff= this.hoverOff.bind(this);
  }

   hoverOn(){
      this.setState({ hover: true });
    }
    hoverOff(){ 
      this.setState({ hover: false });    
    }


  render() {
    const { classes, ...rest } = this.props;
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    
    return (
      <div>
        <Header
          brand="[p-o-r-t-f-o-l-i-o]"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        {/* Parralax Background */} 
        <Parallax small filter image={require("assets/img/bg4.jpg")} />
        {/* Profile pic, Name, subtitle and github Icon */} 
         <div className={classNames(classes.main, classes.mainRaised)}>
           <div className={classes.container}>
             <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={3}>
                 <div className={classes.profile}>
                  <div className={classes.name}>         
                    <div style={{textAlign: "center"}}>
                    <Link to="/" className={classes.dropdownLink}>    
                     <IconButton
                      color="github"
                      className={classes.margin5}>
                      <i className={classes.socialButtonsIcons + " fa fa-home"} />
                    </IconButton>
                    </Link>
                    </div>
                  </div>
                 </div> 
                </GridItem>
             </GridContainer>
            </div>
            {/* CODE WORK OTHER SECTION STARTS HERE*/} 
            <GridContainer justify="center">
                <GridItem xs={12} md={8} className={classes.navWrapper}>
                  <div className={classes.postItem}>
                               <div clasName={classes.postBody}>
                                <div className={classes.content}>
                                  <h2>Priting awesome stuffs using <a href="https://ultimaker.com/en/products/ultimaker-cura-software" target="_blank" rel="noopener noreferrer">Cura</a></h2>
                                  <h3 className={classes.postTitle}>Working on It!</h3>
                                </div>  
                               </div>
                  </div>             
                </GridItem>
              </GridContainer>
         </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Shapes);
