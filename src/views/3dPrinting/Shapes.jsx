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

import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";


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
