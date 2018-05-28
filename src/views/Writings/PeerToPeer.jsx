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



class PeerToPeer extends React.Component {
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
                                  <h3 className={classes.postTitle}>Torrent and peer to peer protocol</h3>
                                  <h5 className={classes.postSubTitle}>Januray 2016</h5>
                                  <p>
                                  People have achieved much more advancement in the past fifty years than it did ever before. Like different type of communication system such as road transportation, water transportation etc. Data moving from one point to another in the Internet has also have similar protocols that most of the devices follow while communicating. Internet is a big part of our digital life with so many devices today. Data travelling from one device to another goes through many another different points on the network before its’ reach its destination and that makes it a huge network on the globe. Digital devices follow different kind of communication protocols such as USART, UART, RS232, Http, Https, Bluetooth, Infrared and many more. There protocols are just agreement of how two or more devices can transfer the data between them. Peer-to-peer connection is just one of them. Analyzing some of the details of the torrent network can clear many misconceptions about it.
                                  </p>
                                  <br />
                                  <p>
                                  On the internet, the majority of the devices are computers today. Usually when a computer tries to connect to another computer where it can be a server or personal computer, the data actually goes through multiple machines before it reaches the destination. Routers are special type of mini computers that gives direction to each packet of data to go to the next router, which is one-step closer to its destination. OSI (open system communication) is the most used communication layers between computers today since it is secured and less costly. Data transfer between computers on the different abstract levels on the OSI model. We are specifically interested in transport layer to get a better idea about the peer-to-peer connection. “The transport level provides end-to-end communication between processes executing on different machines” (Kumar, Sumit).
                                  </p>
                                  <br />
                                  <p>
                                  To understand what a torrent file is, we need to first look at the file system it uses. The torrent file is just a part of a large file distribution system that follows a special protocol known as bit torrent file sharing protocol. A programmer named Bran Cohen in July 2001 created it. Its main purpose was to reduce load from a network or a server. In usual scenario, a file is supposed to be download from a single server where the server that has the file is the host. However, in bit torrent protocol, the client can download from several different sources where any computer that is insider the bit torrent network has that particular file can act as a server and a client can get different parts of the file from many different servers at once. Since this is a good way to save bandwidth, it became popular in the digital world. “Bit Torrent is one of the most popular protocols for content distribution and accounts for more than 15% of the total Internet traffic (Vivek, IEEE)”. A torrent file contains metadata about how to connect to the bit torrent protocol and which tracker servers it should try to search first for those specific resources. Now, a question might arise that, what is a meta-data? Well, it is just a fancy term of saying that this special data tells about where other data can be find, that is, a data that describes other data called a metadata. A torrent file consists of trackers that are just IP addresses of certain computers that has the file. These computers are just acting as a server on the network. Sometimes, its’ called nodes. Therefore, when we have more nodes on the network, the more is the possibility to get the complete copy of a file. In a downloading file scenario, when one computer is acting as a client and others are just acting as servers or nodes, then the nodes are seeders and the computer that is downloading called leechers in the torrent world. The usual extension of a torrent file is .torrent. It has a special extension type just like any other file system on windows or mac OSX. Today, the most used protocol to transfer data over the network is transport control protocol that runs on the internet protocol. It is widely used because data goes through many different computers and router before it gets to its’ destination and TCP/IP protocol gives us the safety of transferring data over the internet without being hacked by the bad people. However, when we open a torrent file, we can see that the trackers information has the URL, the port that starts with UDP, which is another protocol that did not get a lot of popularity because UDP is not very promising with reliability like TCP/IP. The common format in a torrent file for a tracker follows this rule, udp://(resource url): port. When this torrent file is opened using a torrent software like bit torrent or other available torrent file reading software, then it tries to find these trackers on the torrent network and if found, it connects with them and start downloading the parts of the file. The download speed depends on two different factors. First, one is how many seeders are online, and second the bandwidth of the client side that allows what would be the maximum download speed of incoming or outgoing data. Other than tracker, a torrent file has a dictionary that contains all the important information such as file length in bytes, name of the file, and length of each pieces in binary format that is stored in a hash dictionary. The data in this dictionary is stored as encrypted, so the information is not totally insecure because the dictionary is the one where the most useful data are stored that the soft wares uses to read from. For example, a has might contain this information of a specific node on the network ‘nodes’: [[127.0.0.1,’6881’]], [[“your. router.node”, 4804]]. In English torrent is a fast moving stream of water and that perfectly makes sense when it comes to torrent file behavior. 
                                  </p>
                                  <br/>
                                  <p>
                                  The torrent protocol works on a peer-to-peer connection. It is just a connection between computers but the only difference is it does not have a centralized sever that acts as a hub or main server. In a peer-to-peer network, all the nodes on the network can be a client or a host. The benefit of using this kind of connection is to reduce the cost of data transferring by using less bandwidth. The torrent uses this peer-to-peer network system to locate the files on the network. Peer to peer network is very useful when we are downloading a large amount of data such as video or audio files. If we are doing video streaming that means a lots of bytes of data is streaming through the network and it would be easier for the data just to travel directly to its’ destination instead of first visiting the central server and get redirected to the client. “Strong growth in video delivery via localized P2P could lower overall future aggregation and core network bandwidth of IP video traffic by 58.2%, and total consumer Internet traffic by 43.5%. This assumes aggressive adoption of technologies and business practices that enable highly localized P2P video (Stan Moyer)”.
                                  </p>
                                  <br />
                                  <p>
                                  Since peer to peer protocol consists of servers and clients, the host or the server must have some kind of mechanism to serve files or data to the network so that clients on the network can find those files. When a server computer hosts a file, it goes through several steps before doing it. It starts running a tracker that has its information to get found, to host the file, it uses a simple web server similar to apache or tomcat. The webserver knows the type of files that only declared as mime type coded in it. So, the webserver associates the mime types with a .torrent so that it can recognize the requested file type from the client and also creates that file and associate with a web page where the client goes and find that file. Then it starts a special process which is called downloader that enables users to download the files from this server. On the client side, a software must be used to that reads the torrent file and that software simply handle all the search for trackers and starts downloading the file from the server.
                                  </p>
                                  <br />
                                  <p>
                                  Now let’s look at the inside of the peer to peer network in details. So, in the torrent world, node and peer has two different definitions. As we know bit torrent works with two different protocol, TCP and UDP. The peer on the network is using the bit torrent software that is implementing the bit torrent protocol on the other hand the nodes on the network implement the distributed hash table that stores information about the peers and nodes in an encrypted format which is known as SHA1 cryptography. The nodes are the keys of the table and the location of each peer are the values for that specific keys. Distributed Hash table or DHT has a helper known as routing table. This routing table is dynamic and the data on it changes depending on connections.  DHT uses this routing table and try to provide the program the closest possible peer that has the requested data or part of the requested data. Among several different data structures, the hash table has the maximum efficiency while searching. So, we can say that implementing DHT to do the backend job is a very efficient way of handling the peer searching on a huge internet network. “The novelty of the protocol is that it uses parallel lookup to reduce retrieve latency and bounds communication overhead to a dynamically adjusted routing table. Tambour estimates the probabilities of routing entries' lively ness based on statistics of node lifetime history and evicts dead entries after lookup failures” (Shu, Xiao).
                                  </p>
                                  <br />
                                  <p>
                                  The software to use the torrent is called bit torrent client software. There are a lot of free soft wares in the market and most of them are free. The widely used bit torrent client is called bit torrent, which is named after the protocol. There is also u torrent, ABC, acquisition, BitComet, LimeWire, VUZE, FlashGet etc. A recent release of bit torrent client that is getting popular is Opera 12, released by Opera software. It runs on windows, OSX and Linux operating system. Some of the soft wares mentioned above does not run on all platforms or operating systems. Many different software companies are making bit torrent clients because of the number of users of this protocol. Most of the software has it own portion to show advertisement to make money. And there are rumors on the internet that some of these client soft-wares are secretly mining bit coins in the background. Bit coins are a type of crypto currency that can be made by letting your machine to do some computations. It’s not always the companies who are making these soft-wares. For example, there is a client software called bit tornado developed by a person named John Hoffman from MIT, and it was released on 2006.
                                  </p>
                                  <br />
                                  <p>
                                  If we have a client software and a torrent file, then we can just run the file using a client software and it will do the rest, all we need to do is wait it it notifies us that the download is finished. Now, as it sounds very promising, in most cases it is not. Because, we also need seeders and leechers for the torrent file. Seeders are the hosts that is connected to the network and are willing to share the part of their file with the client. The most used site for downloading a torrent file is known as a piratebay.se. To download a torrent file, we ned to search for it first on their search bar. One the file is found; we have to make sure that at least one seeder is available for sharing the data. This is how we can download and use a torrent file and a client software to easily download data from any other hosts on the network. 
                                  </p>
                                  <br />
                                  <p>
                                  Now, considering the legal issues, we can use torrent client and it is completely legal everywhere. But the tricky part is the data that we are downloading from the hosts. Can we just download something that we do not own? The answer is no, we cannot. If we do, it is illegal, at least in the United states because of the intellectual property rights! For example, we can search for a new movie that just has been released last month on the Pirate bay and use the torrent file to download the movie from someone else who actually bought it. The person who is hosting the file and the person who is downloading the movie without paying for it, are both guilty. This is a huge legal issue right now, and the popular torrent site, piratebay.org had to change their legal domain name to piratebay.se because of some serious legal problems they faced in the court in Denmark.
                                  </p>
                                  <br />
                                  <p>
                                  In the United States, there are laws on copyright materials that protects the rights of of the owner of the intellectual property. The copyright law protects the intellectual work for the life time of the creator with an addition to seventy years. After that, it will enter in the public domain where anyone can use it or distribute it. In 1976, the U.S copyright Law explicitly included four options that will initially define the use of creative works under the law. These four options are called the Fair Use Doctrine. The first option is the purpose and nature of use. The second option is the nature of the copyrighted work. The third is the amount and significance of the portion used. And the last option is the effect of the use on the potential market. But the law is not bound within the fair use doctrine. It is just there to help the case move forward. We also have DRM (Digital Rights Management technologies) that can prevent a user making illegal distribution of movies of e-books etc. But the experts always make their way to break these security systems and copy the materials anyway. In 1998, The Congress passed the Digital Millennium Copyright Act (DMCA) that basically protects the DRM from infringements. But not all countries have similar copyright laws.  In some countries, the term Intellectual property is not even officially recognized. Copying different brand names or using it with a different logo design is a very usual scenario in some countries. So, when it comes to software and music, the priority of getting a copyright stays at the bottom of their to-do list.
                                  </p>
                                  <br />
                                  <p>
                                  In September, 2002, there was a software called Napster released by the developer named Sean parker. I was the first popular peer to peer network sharing software that gained a large popularity for it’s user friendly interface and easily accessible files on a different computer. It got popular because people could download the latest music releases instantly. This software allowed people to search for music files (all files for that manner) on other users’ hard drives and download them for free. Even without the DMCA, this action was illegal.
                                     <i>“It copied these songs without the consent of the creator/owner which breaks the first U.S. copyright statue from 1790. Although the Founding Fathers originally drafted this law to cover maps, charts and books, Congress soon amended it to include most intellectual property: Someone who halt or have purchased or legally acquired the copyright of any such map, chart, book or books, in order to print, reprint, publish or vend the same, shall have the sole right and liberty of printing, reprinting, publishing and vending such map, chart, book. (DMCA, pbworks)”</i>
                                  </p>
                                  <br />
                                  <p>
                                  Apparently, it was not going well for the music company and as a result Napster had to stop their services because of the complains coming from different music production houses.
                                  </p>
                                  <br />
                                  <p>
                                  But this did not stop users from sharing each other information’s on the torrent network. Today, people still accessing each other’s hard disk’s and because of strong law enforcement looking over people’s activity on the internet, people often try to hide themselves while using peer to peer connection. One of the most used hiding strategy on the internet is to use onion routing or the tor browser. It is a special browser that follows a special type of routing protocol. The information that is sent from a browser to it’s destination is divided into small segments called packets. The tor browser sends these packets through a longer path that travels more other servers before going to the destination. In this way it is almost impossible to track the data packets in a peer to peer communication.
                                  </p>
                                  <br />
                                  <p>
                                  The benefits of using torrent fie comes with a risk. Most of the malwares and viruses are also distributed via the torrent network and it is easy to get access through a peer to peer network that it is to regular network because peer to peer network uses UDP protocol which is not very reliable. On the websites there is something called magnet link that is an alternative to a torrent file. It is basically the same thing, in this case, the users do not have to download the whole file, but to copy and paste the magnet link on the certain space in the client software in order to start downloading data.
                                  <p>
                                  <br />
                                  <p>
                                  Torrents are not only used to download music or movies but also useful articles and journals that is free to public. There are many different resources like http://gen.lib.rus.ec, where anyone can go and search for academic papers on their choice of topic.
                                  </p>
                                  <br />
                                  <p>
                                  Other than this, the advantages of this amazing protocol, is mostly abused. When asked in general, people think of torrent as something illegal digital work while it is not. Anyone can use this service; we just have to be careful when downloading materials so that our machine does not get affected by spyware or any other malicious soft-wares. One can use the popular antivirus in the market to get secured from these soft-wares. So, it is understood that torrent is not used for wrong purpose just because some people chose to do so.
                                  </p>
                                  <br />
                                  <p>
                                  Because of the low data transfer cost, many companies use this protocol in order to transfer files inside their private network. “A social network such as Facebook uses an internal publish-subscribe system that uses peer-to-peer network that keep the users updated about the latest news, another social network twitter uses this as a core interface to it’s users” (Patel, Jay). The government agency NASA also used bit torrent to transfer big images of earth. Also a company called Blizzard Entertainment uses bit torrent protocol to connect the players with other players. When we are downloading a multiplayer gaming software, we are just downloading a bit torrent client software. So, bit torrent is just a tool to utilize for proper data transfer and it has nothing to do with piracy of copyright infringement. It is the people who are abusing this tool to make their profit.
                                  </p>
                                  <br />
                                  <p>
                                  From my point of view, the use of torrent should be protected and this protection should be provided by the software makers. For example, if I use Google’s email service, I would hope that google have closed all the insecure loop whole where my data are securely transfer to the other end. Same goes to the bit torrent client, the software company that makes these soft-wares should provide some mechanism so that general users can easily use this service for beneficial purposes without exposing their personal data to the crackers.
                                  We might not notice when we are downloading a movie for free using torrent but it is a crime as it is sharing a DVD with the people in your town so that no one has to buy it. In this way, only one person can buy a movie and the rest of the world just use torrent and download it for free! Just using our common sense, we can see that this is not ethical. We also have laws to enforce this behavior. It is our duty to value the innovations and innovators so that America can create more new innovators in future.
                                  </p>
                                   <p>
                                  <i><u>Works Cited</u></i>
                                  <br />
                                  <p> Kumar, Sumit, Sumit Dalal, and Vivek Dixit. "THE OSI MODEL: OVERVIEW ON THE SEVEN LAYERS OF COMPUTER NETWORKS." International Journal of Computer Science and Information Technology Research 2.3 (2014): 4. Web. 13 May 2016.
                                  </p>
                                  <br />
                                  <p>Rai, Vivek, and Sandjai Bhulai. "A Multiphased Approach for Modeling and Analysis of the Bit Torrent Protocol." Http://ieeexplore.ieee.org/. IEEE, 25 June 2007. Web. 15 May 2016.
                                  </p>
                                  <br />
                                  <p>Moyer, Stan. "Bandwidth Reduction via Localized Peer-to-Peer (P2P) Video." Bandwidth Reduction via Localized Peer-to-Peer (P2P) Video. June-July 2009. Web. 16 May 2016. 
                                  </p>
                                  <br />
                                  <p>Shu, Xiao. "A Scalable and Robust DHT Protocol for Structured P2P Network." A Scalable and Robust DHT Protocol for Structured P2P Network. Oct.-Nov. 2012. Web. 16 May 2016. 
                                  </p>
                                  <br />  
                                  <p>DMCA. "How Napster Changed Music Piracy." Dmca.pbworks.com. 01 June 2007. Web. 17 May 2016. <a href="http://dmca.pbworks.com/w/page/17963772/How Napster Changed Music Piracy" target="_blank" rel="noopener noreferrer">Link</a>
                                  </p> 
                                  <br />
                                  <p>
                                  Patel, Jay A. "Exploiting System Diversity in Peer-to-peer Publish-subscribe Systems.01 Jan. 2009. Web. 17 May 2016. 
                                  </p> 
                                  </p>
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

export default withStyles(componentsStyle)(PeerToPeer);
