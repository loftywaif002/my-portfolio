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

import EmbeddedGist from "./EmbeddedGist.jsx";
import YouTube from 'react-youtube';


class KnockLock extends React.Component {
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

    _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const { classes, ...rest } = this.props;
    const opts = {
      height: '290',
      width: '540',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        rel: 0,
        controls: 0
      }
    };
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
                                  <h3 className={classes.postTitle}>Knock-Lock</h3>
                                  <YouTube
                                      videoId="PgSmZbtFHxg"
                                      opts={opts}
                                      onReady={this._onReady}
                                    />
                                  <h4 className={classes.postSubTitle}> Component List </h4> 
                                  <ul>
                                    <li>Switch</li>
                                    <img
                                      alt="..."
                                      height="70" 
                                      width="70"
                                      src="https://image.ibb.co/g7ZKMF/switch.png"
                                    />
                                    <li>LED(3- diffrent colors would be great)</li>
                                    <img
                                      alt="..."
                                      height="70" 
                                      width="70"
                                      src="https://image.ibb.co/cyvhaa/led.png"
                                    /> 
                                    <li>10k ohm Resistor (1)</li>
                                    <img
                                      alt="..."
                                      height="70" 
                                      width="70"
                                      src="https://image.ibb.co/ieTDgF/resistor.png"
                                    />  
                                    <li>220 ohm Resistor (3)</li>
                                    <img
                                      alt="..."
                                      height="70" 
                                      width="70"
                                      src="https://image.ibb.co/nDhjov/Screen_Shot_2017_02_06_at_11_16_08_AM.png"
                                    />
                                    <li>1 Mega ohm Resistor(1)</li>
                                    <img
                                      alt="..."
                                      height="70" 
                                      width="70"
                                      src="https://image.ibb.co/cONTFa/1mOhm.png"
                                    /> 
                                    <li>100 uF capacitor</li>
                                    <img
                                      alt="..."
                                      height="70" 
                                      width="70"
                                      src="https://image.ibb.co/iJc61F/capacitopr.png"
                                    />
                                    <li>Servo motor</li>
                                     <img
                                      alt="..."
                                      height="70" 
                                      width="70"
                                      src="https://image.ibb.co/fNXTFa/servo_motor.png"
                                    />
                                    <li>Piezo</li>
                                     <img
                                      alt="..."
                                      height="70" 
                                      width="70"
                                      src="https://image.ibb.co/j2gc8v/piezo.png"
                                    />
                                  </ul>
                                  <h5 className={classes.postSubTitle}>Description/Instruction</h5>
                                  <ul>
                                    <li>On both ends of the bread board, the vertical strips should be connected to the 5v and GND pin in the arduino</li>
                                    <li>The switch on the board, 1 end goes to the "-" strip of the board, anther end goes to pin 2 (PWM), another end goes to "-" strip of the board through a 10khm resitor</li>
                                    <li>A peizo has to pins, one end goes to "+" stip of 5v on the board,the other goes to A0 pin on the arduino boaed as well as "-" strip of the bread board through a 220 ohm resistor</li>
                                    <li>Add leds, the cathode (short-leg) goes in the "-" strip or ground and 220 ohm resistor series with all the anodes</li>
                                    <li>Connect the resitors to Arduino pin, 3,4 5</li>
                                    <li>Connect the servo motor's red wire to 5v strip on the bread board and black wire to the "-" strip / ground</li>
                                    <li>Connect a 100 uF capacitor to handle irregularities in the voltage</li>
                                    <li>Connect the middle or white wire of the servo motor to the Arduino pin 9</li>
                                  </ul>
                               </div>
                               <h4 className={classes.postTitle}>Code</h4>
                               <EmbeddedGist gist="loftywaif002/c4ed06e710eab1a9c3b16d78d807a0a6" file="knock-lock"></EmbeddedGist>
                              </div>
                              <a className={ this.state.hover ? classes.readMoreHover : classes.readMore}
                                 href="https://github.com/loftywaif002/IoT/tree/master/Knock-Lock"
                                 onMouseEnter={this.hoverOn} 
                                 onMouseLeave={this.hoverOff} 
                                 >Github: Link</a>
                             </div>
                </GridItem>
              </GridContainer>
         </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(KnockLock);
