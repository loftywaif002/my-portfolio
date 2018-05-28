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


class IntellectualProperty extends React.Component {
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
                  <div className={classes.postItem} style={{background: "#FEF0DA"}}>
                               <div clasName={classes.postBody}>
                                <div className={classes.content}>
                                  <h3 className={classes.postTitle}>Intellectual Property</h3>
                                  <h5 className={classes.postSubTitle}>Januray 2016</h5>
                                  <br />
                                  <p>
                                  The word Intellectual is closely related to the word cognition that is related to the concept of mental action or progress. So, from the definition we have a hint that a property titled as intellectual does not fall into a category of tangible substances. If we go back in the history, the first U.S law was passed in 1790’s for protecting unauthorized distribution of properties such as books or printed media and it was only applicable for tangible materials. As the use of personal computers and internet grew over time, the copy right law was amended accordingly to protect the right of individuals who seek to hold their copyrights for intangible materials. Therefore, the intellectual property refers to an intangible creative work and when we buy those products we only buy the right to use it but not to give it to someone else because we are not the people who hold the right to do so. “The main social purpose of protection of copyright and related rights is to encourage and reward creative work. (WTO)”
                                  </p>
                                  <br />
                                  <p>
                                  If I produced a piece of music that can demonstrate that it is very unique and if I want to prevent other people from copying my music and distribute using their own name, then in United States, I would have to file a patent regarding the material in the to the United State office of Patent and Trademark office. The copyright law protects the intellectual work for the life time of the creator with an addition to seventy years. After that, it will enter in the public domain where anyone can use it or distribute it.
                                  </p>
                                  <br />
                                  <p>
                                  There were many past incidents where the innovator company sued another company for copying the same design pattern. Right now the internet is dominated by the social networking website Facebook. Several people sued Facebook for violating the Intellectual property right and claiming that the original idea of creating such a website came from many different sources. Also “over the course of three years, Apple Inc. asserted ten utility patents, eight design patents and twenty-two forms of trade dress and trademarks in the United States against Samsung” (Diamond, Maggie). Apple also filed several cases across the Globe in nine different countries but the case in the Federal court resulted in a huge victory for Apple in the Unites States. “Ultimately federal court affirmed Apple ‘s claims of infringement, with design rights securing the majority of the $548 million damages award (Diamond, Maggie)”.
                                  </p>
                                  <br />
                                  <p>
                                  In 1976, the U.S copyright Law explicitly included four options that will initially define the use of creative works under the law. These four options are called the Fair Use Doctrine. The first option is the purpose and nature of use. The second option is the nature of the copyrighted work. The third is the amount and significance of the portion used. And the last option is the effect of the use on the potential market. But the law is not bound within the fair use doctrine. It is just there to help the case move forward. For example, the first case about private, noncommercial copying of material was filed back in 1984. At that time, Sony made a video recording machine called Betamax that users used to record movies from the television and later distribute other people to watch it. Two studios including the Universal Studios sued Sony Inc. for making such a machine. The factors 2 and 3 from the fair use doctrine obviously argue against the taping. But later the factor 2 was interpreted by the court saying that the movies studios receive a large amount of money for broadcasting the movies on the screen, so it does not go against Sony Inc.  Finally, “on the issue of legitimacy of the Betamax machine, the court said makers of a device with substantial legal uses should not be penalized because some people use it to infringe copyright (Baase, Sara).” Another case can be reviewed as stated in the textbook is Sega Enterprises Vs Accolade Incorporated. Accolade was a videogame company that was making games that runs on Sega gaming machine. In order to understand the mechanics properly that had to transform he machine to code to a higher level state that can be read and understood by the programmers. Sega sued Accolade because this process is called Reverse Engineering which is illegal. But based on the fair use doctrine the Sega Enterprise lost the case. According to the court “Accolade was encouraging production of new creative work (Baase, Sara)”.
                                  </p>
                                  <br />
                                  <p>
                                  All these examples were inside the United States. But not all countries have similar copyright laws.  In some countries, the term Intellectual property is not even officially recognized. Copying different brand names or using it with a different logo design is a very usual scenario in some countries. So, when it comes to software and music, the priority of getting a copyright stays at the bottom of the to-do list. 
                                  </p>
                                  <br />
                                  <p>
                                  In United states, we have DRM (Digital Rights Management technologies) that can prevent a user making illegal distribution of movies of e-books etc. But the experts always make their way to break these security systems and copy the materials anyway. In 1998, The Congress passed the Digital Millennium Copyright Act (DMCA) that basically protects the DRM from infringements. The DMCA has two main parts. Some of its provisions are there to prevent the circumvention of the DRM and some stated as “safe harbor” for website owners or the material that contains infringed properties. What DRM basically does is encrypt the intellectual properties such as movies or music in such a way that the user cannot use the material that violates the copyright act. In the provisions of DMCA that promotes the anti-circumvention, prevent those tools that can decrypt the encryption by the DRM. Another part of the DMCA act provides a “safe harbor”, that protects “websites from lawsuits and criminal charges for copyright infringement when users post infringing material in their website (Baase, Sara).”
                                  </p>
                                  <br />
                                  <p>
                                  The internet is a huge network consist of computers and servers. Millions of websites are hosting thousands of products and it is really hard for music companies to find out who is sharing copyrighted materials with which network. So, there are some music companies that use their property as decoys to many file sharing sites. For example, a person might try to download a latest song that is showing downloadable on a certain website. In the middle of the download, it failed. This has done on purpose so that the user who is trying to that copy of music illegally gets discouraged to do so and eventually buy it legally from the store. This is on of the techniques that is trying to prevent copyright violation on the internet.
                                  </p>
                                  <br />
                                  <p>
                                  I think if someone comes up with some idea that he or she thinks is unique then it must be officially copyrighted unless the innovator wants to make it an open source project. But whoever is behind the idea is less important than who uses that idea in which society and community. The media and the publicity plays a major role making an innovator popular. For instance, we all know that the radio was invented by the German Scientist Gugliemo Marconi but not many people know that Sir J. C. Bose invented the Mercury Coherer used by Guglielmo Marconi to receive the radio signal in his first transatlantic radio communication. At that time, England was going through industrial revolutions and anything new happens in there took higher priority.
                                  </p>
                                  <br />
                                  <p>
                                   A vast part of the technology is virtual and falls in the category for Intellectual property. Above all, the U.S constitution ensured protection for the intellectual property rights for authors or innovators. Being in the constitution makes it obvious that this is a very important issue and these rights will surely help to improve the on going innovation in America
                                  </p>
                                  <br />
                                  <p>
                                  <i><u>Works Cited</u></i>
                                  <br />
                                  <p>
                                  "WORLD TRADE ORGANIZATION." WTO. Web. 12 Apr. 2016. <a href="https://www.wto.org/english/tratop_e/trips_e/intel1_e.html" target="_blank" rel="noopener noreferrer">Link</a>
                                  </p>
                                  <br />
                                  <p>
                                  DIAMOND, MAGGIE. "A DEFENSE OF INDUSTRIAL DESIGN RIGHTS IN THE UNITED STATES." JOURNAL OF INTELLECTUAL PROPERTY AND ENTERTAINMENT LAW 1st ser. 5.1 (2015): 2-3. Web. 12 Apr. 2016.
                                  </p>
                                  <br />
                                  <p>
                                  Baase, Sara. A Gift of Fire: Social, Legal, and Ethical Issues for Computing and the Internet. Upper Saddle River, NJ: Prentice Hall, 2012. Print.
                                  </p>
                                  </p>
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

export default withStyles(componentsStyle)(IntellectualProperty);
