import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

class About extends Component {
  state = {};
  render() {
    return (
      <div id="about">
        <Header></Header>
        <div className="jumbotron">
          <h1>About Me</h1>
          <p>
            Hi! I am a UX Designer / UI Developer with a passion for connecting
            cutting-edge technology with the people that use it.
          </p>

          <p>
            I began college as a Computer Science major and switched to the
            School of Information after discovering the UX Design track. My
            studies combined technology, business, and psychology to effectively
            research, design, and develop interactive products that connect
            businesses with their intended users. Usability testing, design
            theory, and iterative development help ensure that my prototypes
            function properly.
          </p>

          <p>
            Outside of work, I am an avid adventurer and love to travel. I spent
            four months studying in Denmark, where I lived with an outdoor
            living & learning community. Some of my favorite moments included
            getting a backstage tour of the EU Parliament in Brussels,
            paragliding through Switzerland, and kayaking through the Danish
            canals.
          </p>

          <p>
            I also have a passion for live production - I worked as a producer
            and lighting specialist on the tech team at my church where I helped
            organize and execute live events. I often think of developing a live
            production as building a 4D user experience - with a lot more
            adrenaline involved!
          </p>

          <p>
            I'm currently looking for projects involving UX design, web
            development, or product design. Email me at laurelde@umich.edu if
            you'd like to chat, or connect with me using my social media links
            below!
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
