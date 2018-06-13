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
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionTypography from "./Sections/SectionTypography.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import ShortText from "@material-ui/icons/ShortText";
import Work from "@material-ui/icons/Work";
import GroupWork from "@material-ui/icons/GroupWork";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Archive from "@material-ui/icons/Archive";
import NavPills from "components/NavPills/NavPills.jsx";
import liberation from "assets/img/screen-shot.jpg";
import bloodnr from "assets/img/screen-shot-bldrnr.jpg";
import strbcks from "assets/img/str-bucks.jpg";

var divStyle = {
  position: "absolute"
};

class Components extends React.Component {
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
          <SectionTypography style={divStyle} />
           <div className={classes.container}>
             <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={3}>
                 <div className={classes.profile}>
                  <div className={classes.name}>         
                     <h3 className={classes.title}>Dipro Chowdhury</h3>
                     <h5 className={classes.subtitle}>San Jose State University</h5>
                   <br />
                    <div style={{textAlign: "center"}}>
                    <a href="https://www.github.com/loftywaif002" target="_blank" rel="noopener noreferrer">
                     <IconButton
                      color="github"
                      className={classes.margin5}>
                      <i className={classes.socialButtonsIcons + " fab fa-github"} />
                    </IconButton>
                    </a>
                    </div>
                  </div>
                 </div> 
                </GridItem>
             </GridContainer>
            </div>
            {/* CODE WORK OTHER SECTION STARTS HERE*/} 
            <GridContainer justify="center">
                <GridItem xs={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="info"
                    tabs={[
                      {
                        tabButton: "Recent Work",
                        tabIcon: Work,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12}>
        {/*First Item for Recent Work Tab*/}
                             <div className={classes.postItem}>
                              <h5 className={classes.postSubTitle}>White Cloud Apps Inc.</h5>
                               <a href="http://www.helprope.org/">                                                           
                                <h2 className={classes.postTitle}>Open Resources</h2>
                               </a>
                               <div clasName={classes.postBody}>
                               <div className={classes.content}>
                                  <h4 className={classes.postSubTitle}>Mobile Application Tech Stack (React-Native) </h4>
                                  <ul>
                                    <li>Worked with client to create custom mock up for better user interface</li>
                                    <li>Setup and integrated redux with the project</li>
                                    <li>Configured integration  mapbox with dummy data</li>
                                    <li>Used javascript validation using regex on the client side</li>
                                    <li>Used <a href="https://reactnavigation.org/">react-navigation</a> for routing</li>
                                    <li>Added authentication for  Facebook and Google login</li>
                                    <li>Styled all Components using CSS stylesheet</li>
                                    <li>Modularized components into small parts like header and footer</li>
                                    <li>Created reusable and functional components such as Buttons and input fields</li>
                                  </ul>
                               </div>
                              </div>
                              <a className={ this.state.hover ? classes.readMoreHover : classes.readMore}
                                 href="#"
                                 onMouseEnter={this.hoverOn} 
                                 onMouseLeave={this.hoverOff} 
                                 >Github: private repo</a>
                             </div>
        {/*Second Item for Recent Work Tab*/}
                              <div className={classes.postItem}>
                              <a href="https://www.amax.com" target="_blank" rel="noopener noreferrer">
                              <h5 className={classes.postSubTitle}>Amax Engineering Corp.</h5>
                              </a>                                                         
                               <div clasName={classes.postBody}>
                               <div className={classes.content}>
                                  <h4 className={classes.postSubTitle}>Intranet Web App</h4>
                                  <h4 className={classes.postSubTitle}>Custom Wordpress Sites</h4>
                                  <h4 className={classes.postSubTitle}>
                                  <a href="https://www.amax.com">www.amax.com</a> &nbsp;
                                  <a href="https://www.amax.ai">www.amax.ai</a>
                                  </h4>
                                <h2 className={classes.postTitle}>E-Commerce</h2>
                                <h4 className={classes.postSubTitle}>Tech Stack (React.js+MongoDb+Node.js)</h4>
                                 <ul>
                            <li>Involved in Requirements gathering, analysis and design and documentation as the application was started from scratch</li>
                            <li> Worked with Marketing team, configured apache2 web server, built and maintained websites using Word Press 5.6 for 3 websites on Ubuntu 16.04.4 LTS OS</li>
                            <li>Used Google analytics reports, optimized the page load time for the pages that had heavy traffic and improvised those pages using CSS</li> 
                            <li> Worked on HTML/HTML5, CSS/CSS3 style sheets, JavaScript, React.Js(Node/express backend) and jQuery to tie together a diverse range of pages with an easily understandable structure</li> 
                            <li>Built single page apps, modules, graphics and reusable components using React.JS</li>
                            <li>Worked on Lifecycle Methods, State, Specs, Props, Events to create interactive and stateful/functional React.JS Components</li>
                            <li> Involved in Requirements gathering, analysis and design and documentation as the application was started from scratch</li>
                            <li>Worked on HTML/HTML5, CSS/CSS3 style sheets, JavaScript, Bootstrap and jQuery to tie together a diverse range of pages with an easily understandable structure</li>
                            <li>Built single page apps, modules, graphics and reusable components using Jquery</li>
                            <li>Designed various modules using technologies like JSON, and JavaScript</li>
                            <li>Developed Custom web portals with Php, JavaScript, html and Css</li>
                            <li>Added subscribe/unsubscribe mechanism with php script that works with MySql backend</li>
                            <li>Utilized various JavaScript and JQuery libraries, AJAX for form validation and other interactive features</li>
                            <li> Used Google analytics reports, optimized the page load time for the pages that had heavy traffic and improvised those pages using CSS</li> 
                            <li>Created prototypes in HTML, Photoshop, JavaScript and CSS for different UI pages</li> 
                            <li>Improved the UI for better User experience by adding custom CSS transitions and animations to feature major products</li>
                                 </ul>
                               </div>
                              </div>                     
                             </div>
      {/*Third Item for Recent Work*/}
                             <div className={classes.postItem}>
                              <h5 className={classes.postSubTitle}>Edigree Inc.</h5>
                               <a href="http://www.helprope.org/">                                                           
                                <h2 className={classes.postTitle}>Donor Home</h2>
                               </a>
                               <div clasName={classes.postBody}>
                               <div className={classes.content}>
                                  <h4 className={classes.postSubTitle}>Application Tech Stack (Ruby On Rails + React.js) </h4>
                                  <ul>
                             <li>Integrated React.js as View to the Rails framework using react-rails gem</li>
                             <li>Implemented search functionality and tested code (Rspec)</li>
                             <li> Built ORM models and methods from ER. Diagrams along with Routing and Controller Methods</li>
                             <li>Development of applications using Ruby on Rails (RoR), and REACT (.jsx) for Web Services Calls</li>
                             <li>Worked in the design and development phases of the application using Ruby on Rails framework</li>
                             <li>Responsible for layout design, implementation, using HTML5 and CSS3</li>
                             <li>Developed cross-browser/platform using HTML, CSS, and JQuery</li>
                             <li>Designed and implemented front-end and friendly user interface with Twitter Bootstrap</li>
                             <li>Developed client side validation code using JavaScript, JavaScript libraries, and JQuery</li>
                             <li>Experience in writing functional/unit Rspec test using TDD, built base test framework around mobile site (Rspec)</li>
                             <li>Used Rspec to create Test driven development. Experienced with all of the GEMS and libraries</li>
                             <li>Worked on creating a responsive website for smart devices using responsive design and media queries</li>
                             <li>Developed web applications with W3C XHTML, HTML5, CSS3 standards and using Ruby, Rails, Git and Heroku</li>
                                  </ul>
                               </div>
                              </div>
                              <a className={ this.state.hover ? classes.readMoreHover : classes.readMore}
                                 href="#"
                                 onMouseEnter={this.hoverOn} 
                                 onMouseLeave={this.hoverOff} 
                                 >Github: private repo</a>
                             </div>                                      
                            </GridItem>   
                          </GridContainer>
                        )
                      },
                    {
                      tabButton: "Other Projects",
                      tabIcon: GroupWork,
                      tabContent: (
                              <GridContainer justify="center">
                                 <GridItem xs={12}>
                   {/*First Item in GroupWork*/}              
                                   <div className={classes.postItem}>
                                     <div clasName={classes.postBody}>
                                       <div className={classes.content}>
                                         <h5 className={classes.postTitle}>Starbucks Web App</h5>
                                          <GridItem xs={6} sm={2} md={4}> 
                                              <img
                                                alt="..."
                                                src={strbcks}
                                                className={navImageClasses}
                                              />
                                          <h4 className={classes.postSubTitle}>React+Express+KongAPI++Cassandra+MongoDB+AWS</h4>
                                         </GridItem>
                                       </div>  
                                     </div>
                                     <Grid container spacing={16}>
                                              <Grid item xs={2}>
                                               <img
                                                   alt="..."
                                                   src="http://i66.tinypic.com/2008av7.png"
                                                   className={navImageClasses}
                                               />
                                              </Grid>
                                              <Grid item xs={2}>
                                                <img
                                                   alt="..."
                                                   src="http://i68.tinypic.com/2yl74n4.png"
                                                   className={navImageClasses}
                                               />
                                              </Grid>
                                              <Grid item xs={2}>
                                                <img
                                                   alt="..."
                                                   src="http://i68.tinypic.com/2djug7o.png"
                                                   className={navImageClasses}
                                               />
                                              </Grid>
                                              <Grid item xs={2}>
                                                <img
                                                   alt="..."
                                                   src="http://i64.tinypic.com/xqm93q.png"
                                                   className={navImageClasses}
                                              />
                                              </Grid>
                                              <Grid item xs={2}>
                                                  <img
                                                    alt="..."
                                                    src="http://i66.tinypic.com/2vkaqe9.png"
                                                    className={navImageClasses}
                                                    />
                                              </Grid> 
                                        </Grid> 
                                         <h4 className={classes.postSubTitle}>Description</h4>
                                         <p>
                                          Internal web application based on React.js. Users can order hot or cold beverages 
                                          using friendly UI and the order gets placed to the 3 node MongoDB cluster hosted 
                                          in AWS instance. The communication from frontend to backend is happeing through 
                                          an open source technology called KongAPI gateway (https://getkong.org/) that is 
                                          using a 3 node cassandra cluster to store api interaction the data.
                                         </p> 
                                         <br />
                                          <a className={ this.state.hover ? classes.readMoreHover : classes.readMore}
                                           href="https://github.com/loftywaif002/starbucksAppTeamProject"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           onMouseEnter={this.hoverOn} 
                                           onMouseLeave={this.hoverOff} 
                                           >Github Repo</a> 
                                   </div>
          {/*Second Item in GroupWork*/}
                                <div className={classes.postItem}>
                                     <div clasName={classes.postBody}>
                                       <div className={classes.content}>
                                         <h5 className={classes.postTitle}>gRpc-Streaming-RocksDB</h5>
                                         <h4 className={classes.postSubTitle}>Description</h4>
                                         <p>
                                           Implement a key-value store <a href="https://grpc.io/">gRPC</a> 
                                           service using <a href="https://rocksdb.org/">RocksDB</a>
                                         </p>
                                         <br />
                                          <a className={ this.state.hover ? classes.readMoreHover : classes.readMore}
                                           href="https://github.com/loftywaif002/273-Lab2-gRPC-Streaming/tree/master/lab2"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           onMouseEnter={this.hoverOn} 
                                           onMouseLeave={this.hoverOff} 
                                           >Github Repo</a>  
                                       </div>
                                     </div>
                                </div> 
          {/*Third Item in GroupWork*/} 
                               <div className={classes.postItem}>
                                     <div clasName={classes.postBody}>
                                       <div className={classes.content}>
                                         <h3 className={classes.postTitle}>3d-Motion Planning</h3>
                                         <h4 className={classes.postSubTitle}>Udacity Flying Car Project</h4>
                                         <h5 className={classes.postSubTitle}>Python 3.6.2</h5>
                                         <p>
                                           Drone will fly to the destination co-ordinates passed as a parameter.
                                           Drone will also parse a 2d matrix map and find the shortest path to its goal.
                                         </p>
                                         <br />
                                          <a className={ this.state.hover ? classes.readMoreHover : classes.readMore}
                                           href="https://github.com/loftywaif002/ud-p1-motion-planning"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           onMouseEnter={this.hoverOn} 
                                           onMouseLeave={this.hoverOff} 
                                           >Github Repo
                                          </a>  
                                       </div>
                                     </div>
                                </div>
            {/*Fourth Item in GroupWork*/}
                               <div className={classes.postItem}>
                                     <div clasName={classes.postBody}>
                                       <div className={classes.content}>
                                         <h3 className={classes.postTitle}>Pattern Recognition</h3>
                                         <h4 className={classes.postSubTitle}>Open CV (Python)</h4>
                                         <p>
                                           A python script is used to analyze given 
                                           images to recognize a specific pattern in the photos.
                                         </p>
                                         <br />
                                         <a className={ this.state.hover ? classes.readMoreHover : classes.readMore}
                                           href="https://github.com/loftywaif002/open_cv_experiment"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           onMouseEnter={this.hoverOn} 
                                           onMouseLeave={this.hoverOff} 
                                           >Github Repo
                                          </a>   
                                       </div>
                                     </div>
                                </div> 
            {/*Fifth Item in GroupWork*/}
                               <div className={classes.postItem}>
                                     <div clasName={classes.postBody}>
                                       <div className={classes.content}>
                                         <h3 className={classes.postTitle}>Simple Folder Explorer</h3>
                                         <h4 className={classes.postSubTitle}>React.js</h4>
                                         <Grid item xs={4}>
                                         <img
                                           alt="..."
                                           src="http://i63.tinypic.com/wc0qr5.png"
                                           className={navImageClasses}
                                          />
                                         </Grid> 
                                         <br />
                                         <a className={ this.state.hover ? classes.readMoreHover : classes.readMore}
                                           href="https://github.com/loftywaif002/folder-explorer"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           onMouseEnter={this.hoverOn} 
                                           onMouseLeave={this.hoverOff} 
                                           >Github Repo
                                          </a>   
                                       </div>
                                     </div>
                                </div>                                           
                              </GridItem>   
                          </GridContainer>
                        )
                    },
                      {
                        tabButton: "Writings",
                        tabIcon: ShortText,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12}>
        {/*First Item for Writings*/}                    
                             <div className={classes.postItem}>
                              <a href="#">
                               <h2 className={classes.postTitle}>Torrent and Peer to Peer Protocol</h2>                               
                              </a>
                              <div clasName={classes.postBody}>
                               <div className={classes.content}>
                                  <p>
                                    The torrent protocol works on a peer-to-peer connection. 
                                    It is just a connection between computers but the only difference is it does not have a centralized sever that acts as a hub or main server. 
                                    In a peer-to-peer network, all the nodes on the network can be a client or a host. 
                                    The benefit of using this kind of connection is to reduce the cost of data transferring by using less bandwidth. 
                                    The torrent uses this peer-to-peer network system to locate the files on the network. 
                                    Peer to peer network is very useful when we are downloading a large amount of data such as video or audio files. 
                                    If we are doing video streaming that means a lots of bytes of data is streaming through the network and 
                                    it would be easier for the data just to travel directly to its’ destination instead of first visiting 
                                    the central server and get redirected to the client. 
                                  </p>
                               </div>
                               <div>
                                <Link to="/peertopeer" className={ this.state.hover ? classes.readMoreHover : classes.readMore}
                                 onMouseEnter={this.hoverOn} 
                                 onMouseLeave={this.hoverOff} 
                                 >Read More</Link>
                                 <ul className={classes.shareSocial}>
                                   <li className={classes.socialList}>
                                     <a className={classes.socialATag}>
                                        <i className={"fab fa-facebook"} />
                                     </a>
                                   </li>
                                   <li className={classes.socialList}>
                                     <a className={classes.socialATag}> 
                                       <i className={"fab fa-twitter"} />  
                                     </a>
                                   </li>
                                   <li className={classes.socialList}>
                                     <a className={classes.socialATag}>
                                      <i className={"fab fa-linkedin"} />
                                     </a>
                                   </li>
                                 </ul>
                               </div>
                              </div> 
                             </div>
         {/*Second Item For Writing*/}
                           <div className={classes.postItem}>
                              <a href="#">
                               <h2 className={classes.postTitle}>Intellectual Property</h2>                               
                              </a>
                              <div clasName={classes.postBody}>
                               <div className={classes.content}>
                                  <p>
                                     There were many past incidents where the innovator company sued another company for copying the same design pattern. Right now the internet is dominated by the social networking website Facebook. Several people sued Facebook for violating the Intellectual property right and claiming that the original idea of creating such a website came from many different sources. Also “over the course of three years, Apple Inc. asserted ten utility patents, eight design patents and twenty-two forms of trade dress and trademarks in the United States against Samsung” (Diamond, Maggie). Apple also filed several cases across the Globe in nine different countries but the case in the Federal court resulted in a huge victory for Apple in the Unites States. “Ultimately federal court affirmed Apple ‘s claims of infringement, with design rights securing the majority of the $548 million damages award (Diamond, Maggie)”.
                                  </p>
                               </div>
                               <div>
                                <Link to="/intellectualp" className={ this.state.hover ? classes.readMoreHover : classes.readMore}
                                 onMouseEnter={this.hoverOn} 
                                 onMouseLeave={this.hoverOff} 
                                 >Read More</Link>
                                 <ul className={classes.shareSocial}>
                                   <li className={classes.socialList}>
                                     <a className={classes.socialATag}>
                                        <i className={"fab fa-facebook"} />
                                     </a>
                                   </li>
                                   <li className={classes.socialList}>
                                     <a className={classes.socialATag}> 
                                       <i className={"fab fa-twitter"} />  
                                     </a>
                                   </li>
                                   <li className={classes.socialList}>
                                     <a className={classes.socialATag}>
                                      <i className={"fab fa-linkedin"} />
                                     </a>
                                   </li>
                                 </ul>
                               </div>
                              </div> 
                             </div>                    
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Past Projects",
                        tabIcon: Archive,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12}>
        {/*First Item for Past Projects*/}
                              <div className={classes.postItem}>
                               <a href="https://play.google.com/store/apps/details?id=com.gmail.row4.deep.LiberationWar">                                                           
                                <h2 className={classes.postTitle}>Liberation War</h2>
                                <h5 className={classes.postTitle}>2013</h5>
                               </a>
                               <div clasName={classes.postBody}>
                               <div className={classes.content}>
                                  <h4 className={classes.postSubTitle}>Tech Stack (<a href="https://libgdx.badlogicgames.com/">libGDX</a>) </h4>
                                  <br />
                                <GridItem xs={12} sm={12} md={6}>
                                 <a href="https://play.google.com/store/apps/details?id=com.gmail.row4.deep.LiberationWar">
                                  <img
                                    alt="..."
                                    src={liberation}
                                    className={navImageClasses}
                                  />
                                 </a>
                                </GridItem>
                               </div>
                              </div>
                             </div>
        {/*Second Item for Past Projects*/}
                            <div className={classes.postItem}>                                                 
                              <h2 className={classes.postTitle}>Blood Donor App</h2>                                
                              <GridItem xs={12} sm={12} md={6}>
                                  <img
                                    alt="..."
                                    src={bloodnr}
                                    className={navImageClasses}
                                  />
                                </GridItem>
                               <div clasName={classes.postBody}>
                               <div className={classes.content}>
                                  <h4 className={classes.postSubTitle}>Tech Stack (Ruby On Rails 4.2.10 + React.js) </h4>
                                  <br />
                                  <a className={ this.state.hover ? classes.readMoreHover : classes.readMore}
                                 href="#"
                                 onMouseEnter={this.hoverOn} 
                                 onMouseLeave={this.hoverOff} 
                                 >Github: private repo</a>
                               </div>
                              </div>
                             </div>
          {/*Third Item for past projects*/}
                           <div className={classes.postItem}>                                                 
                              <h2 className={classes.postTitle}>Blog/Website</h2>                                
                               <div clasName={classes.postBody}>
                               <div className={classes.content}>
                                  <h4 className={classes.postSubTitle}>Code Rectangle</h4>
                                  <br />
                                <a className={ this.state.hover ? classes.readMoreHover : classes.readMore}
                                 href="https://www.coderectangle.com/"
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 onMouseEnter={this.hoverOn} 
                                 onMouseLeave={this.hoverOff} 
                                 >Link</a>
                               </div>
                              </div>
                             </div>                                                      
                            </GridItem>
                          </GridContainer>
                        )
                      },
                       {
                        tabButton: "About",
                          tabIcon: AccountCircle,
                           tabContent: (
                          <GridContainer justify="center">
                             <GridItem xs={12}>
                         {/*First Item for Recent Work Tab*/}
                              <div className={classes.postItem}>
                                <h3 className={classes.postTitle}><strong>About Me</strong></h3>
                                   <div clasName={classes.postBody}>
                                   <div className={classes.content}>
                                     <ul>
                                       <li><i className={"fa fa-graduation-cap"}/> B.S. &nbsp; <i>from</i> San Francisco State University, Major:<strong> Computer Science </strong></li>
                                        <li><i className={"fa fa-university"}/>   M.S. &nbsp; <i>from</i> San Jose State University, Major:<strong> SoftWare Engineering</strong></li>
                                     </ul>
                                   </div>
                                   </div>
                                </div> 
                              </GridItem>   
                            </GridContainer>
                           )
                         }
                    ]}
                  />
                </GridItem>
              </GridContainer>
               {/* CODE WORK OTHER SECTION ENDS HERE*/} 
         </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
