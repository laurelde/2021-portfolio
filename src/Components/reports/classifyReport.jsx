import React, { Component } from "react";
import ReportOverview from "../reportOverview/reportOverview";
import Header from "../header/header";
import Footer from "../footer/footer";
import persona1 from "../../images/interaction/persona1.png";
import persona2 from "../../images/interaction/persona2.png";
import persona3 from "../../images/interaction/persona3.png";
import persona4 from "../../images/interaction/persona4.png";
import sketches from "../../images/interaction/sketches.jpg";
import storyboard1 from "../../images/interaction/storyboard1.png";
import storyboard2 from "../../images/interaction/storyboard2.png";
import userflow1 from "../../images/interaction/userFlow1.jpeg";
import userflow2 from "../../images/interaction/userFlow2.jpeg";
import wireframe1 from "../../images/interaction/wireframe1.png";
import wireframe2 from "../../images/interaction/wireframe2.png";
import wireframe3 from "../../images/interaction/wireframe3.png";
import wireframe4 from "../../images/interaction/wireframe4.png";
import wireframe5 from "../../images/interaction/wireframe5.png";
import wireframe6 from "../../images/interaction/wireframe6.png";
import wireframe7 from "../../images/interaction/wireframe7.png";
import wireframe8 from "../../images/interaction/wireframe8.png";
import screen1 from "../../images/interaction/screen1.png";
import screen2 from "../../images/interaction/screen2.png";
import screen3 from "../../images/interaction/screen3.png";
import screen4 from "../../images/interaction/screen4.png";
import screen5 from "../../images/interaction/screen5.png";
import screen6 from "../../images/interaction/screen6.png";
import screen7 from "../../images/interaction/screen7.png";
import screen8 from "../../images/interaction/screen8.png";

class classifyReport extends Component {
  state = {
    name: "Classify Application",
    client: "UMSI Project",
    role: "UX Designer (Team of 5)",
    duration: "Fall 2019",
    skills: [
      "UX Design",
      "Persona Creation",
      "Storyboarding",
      "Sketching",
      "Wireframing",
      "Paper & Digital Prototyping",
      "Figma",
      "iMovie",
    ],
    themeColor: "#9765a3",
  };
  render() {
    return (
      <div className="report">
        <Header />
        <ReportOverview key="1" overview={this.state} />
        <section className="project-walkthrough">
          <h2>Problem:</h2>
          <p>
            University of Michigan students have difficulty exploring interests
            outside of their college curriculum because there is no centralized
            resource for learning outside of regular courses. When students
            start college, they must choose a specific path or major to center
            their studies around. While it is important to become well-educated
            in a field that a student intends to pursue a career in, this often
            leaves little time to explore other interests or develop other
            skills that are unrelated to their major. This is an interaction
            design problem because it can be solved by connecting communities
            that offer classNamees and seminars with students who are interested
            in taking them through a centralized platform.
          </p>

          <p>
            The first step in solving this problem was identifying the type of
            person affected by the problem. This involved researching the types
            of people that struggled with learning new skills in a low-stakes
            setting. After talking with fellow classNamemates about their
            struggles, my group and I created four personas to represent the
            various user types for our product.
          </p>

          <h2>Personas:</h2>

          <img src={persona1} className="right-block" id="persona"></img>
          <img src={persona2} className="left-block" id="persona"></img>
          <img src={persona3} className="right-block" id="persona"></img>
          <img src={persona4} className="left-block" id="persona"></img>

          <p>
            To build off these personas, we decided to scope out the specific
            situations in which these users would actually use a product to find
            free classNamees around Ann Arbor. We found that, while some users
            might have a specific skill they want to find a className on, others
            might simply want to explore their options to see what the
            possibilities for learning are. Additionally, some professionals or
            students in the Ann Arbor area could be interested in hosting a
            className because they are passionate about sharing their field with
            students who are excited about learning. With these in mind, we
            created two scenarios that our product could be used for.
          </p>

          <h2>Scenarios:</h2>
          <div className="scenario">
            <p>
              "Mary Brown is an expert in marketing and branding and lives in
              Ann Arbor. She loves sharing her knowledge of industry tools with
              students and other interested people in the Ann Arbor area. Her
              goal is to teach people how to use these tools so that they can be
              successful in the coursework or in their jobs. Mary loves giving
              back to the Ann Arbor community to reinforce her learning by
              teaching others how to use tools. Mary does not have a lot of free
              time because she has a job but would like to hold classNamees
              randomly throughout the year. She creates a profile for her
              workshop on the classNameify app, describing exactly what she
              plans on teaching during the className. She only lists one date
              because she is not sure when she will have more time to hold
              additional classNamees, but she saves the className profile so
              that she can add more in the future if it goes well. The
              application posts her className profile on the site and allows
              people who are interested in learning marketing and branding to
              easily search for and find her className. Mary can view how many
              people have signed up for her className through the app, and she
              is able to successfully prepare for and hold her className because
              she reached people in the community that wanted to learn."
            </p>
          </div>
          <div className="scenario">
            <p>
              "Alice just got back to campus at the University of Michigan to
              start off her Junior Year as a psychology major. This summer, she
              interned at an advertising agency which helped her spark an
              interest in creativity. Often times, Alice had been tasked with
              creating designs on Photoshop at her internship and she felt
              unprepared and unknowledgeable about the software. Alice has just
              begun to apply to internships for the upcoming summer, and noticed
              that most of the positions she has expressed interest in prefer
              candidates with experience in Adobe Creative Cloud. Panicked,
              Alice looks for opportunities to expand her design software
              skills. Alice already has a full 16 credit course load, serves as
              the VP of Recruitment of her sorority, and has a job photographing
              for her school newspaper. She cannot afford a reputable online
              course as she is already paying her rent and taking out loans to
              pay tuition. Alice uses the classNameify app to find a free
              minicourse on Photoshop taking place right on campus, taught by a
              local Ann Arbor graphic designer."
            </p>
          </div>

          <p>
            These scenarios not only communicated the types of use cases that
            our product should allow, but they also made sure that everyone on
            the team was on the same page for who we were designing for. Quite
            often, design decisions were resolved by looking back at who we were
            making the product for and how they would be using it.
          </p>

          <p>
            Our next step was to start sketching out design ideas. I created 40
            sketches on my own of various elements of the final product, without
            a specific avenue in mind. Some of my sketches solved our problem
            with an app, some solved it with a website, and others solved it
            with no digital technology at all. I also sketched some screen
            formats and use cases to demonstrate what it might look like for
            someone to actually use our product.
          </p>

          <h2>Sketches:</h2>

          <img src={sketches} className="center-block"></img>

          <p>
            With our sketches in hand, my team and I tried to build off of our
            scenarios by sketching storyboards to represent how our personas
            could use our product to solve their problem. This involved
            combining many of the elements we had already created, and we found
            that our sketches covered a wide enough scope that we were able to
            piece together two stories from them.
          </p>

          <h2>Storyboards:</h2>
          <p>
            The first storyboard goes through the scenario of our persona, Alice
            Richards, wanting to gain some graphic design skills despite having
            a very full schedule. She downloads our application and browses a
            few graphic design classNamees, registering for one that fits into
            her schedule. She attends the className and is able to use the
            skills she learned to find a job.
          </p>
          <img src={storyboard1} className="center-block"></img>
          <p>
            The second storyboard mirrors the scenario where Mary Brown hosts a
            className on marketing. She is a different type of user, a
            professional in Ann Arbor, who contributes to the application by
            hosting a className on the skills that she uses in her career. She
            is able to host a single className that fits into her schedule
            without having to commit to teaching multiple times, and she finds
            that she enjoys teaching students who are really interested.
          </p>
          <img src={storyboard2} className="center-block"></img>
          <p>
            After describing how the product would be used in real-world
            scenarios, we decided to map our how a user would go about
            accomplishing their goal using our application. Since we chose to
            create a mobile application, we decided to create a centralized
            navigation bar with pages for exploring and searching new
            classNamees, your personal schedule of classNamees you are hosting
            or attending, an option to create a new className, and your personal
            profile. We build off of these four main pages based on the
            functionality necessary to accomplish the scenarios we created.
          </p>
          <h2>User Flows:</h2>
          <div className="row userflow">
            <img src={userflow1} className="center-block col-12 col-lg-6"></img>
            <img src={userflow2} className="center-block col-12 col-lg-6"></img>
          </div>

          <p>
            We then translated the user flow into wireframes to see what
            information would need to be displayed on each screen and what
            functionality would need to be created. This took quite a few
            iterations as well we usability testing to make sure our decisions
            were intuitive and useful to the people that would be using the
            application.
          </p>

          <h2>Wireframes</h2>

          <div className="row wireframes">
            <div className="col-lg-3 col-6">
              <img src={wireframe1} className="wireframeInt"></img>
            </div>
            <div className="col-lg-3 col-6">
              <img src={wireframe2} className="wireframeInt"></img>
            </div>
            <div className="col-lg-3 col-6">
              <img src={wireframe3} className="wireframeInt"></img>
            </div>
            <div className="col-lg-3 col-6">
              <img src={wireframe4} className="wireframeInt"></img>
            </div>
          </div>
          <div className="row wireframes">
            <div className="col-lg-3 col-6">
              <img src={wireframe5} className="wireframeInt"></img>
            </div>
            <div className="col-lg-3 col-6">
              <img src={wireframe6} className="wireframeInt"></img>
            </div>
            <div className="col-lg-3 col-6">
              <img src={wireframe7} className="wireframeInt"></img>
            </div>
            <div className="col-lg-3 col-6">
              <img src={wireframe8} className="wireframeInt"></img>
            </div>
          </div>
          <p>
            With the wireframes mapped out and initial usability testing
            completed, we got to focus on the UI of our product. This involved
            choosing a color scheme, fonts, and style guide to make sure our
            application had uniformity and flow. We decided to go with purple as
            our main color because it represents creativity, and we chose an
            easily legible font because there can be quite a bit of text on some
            screens. We also completed more usability testing with both paper
            and digital prototypes of these high-fidelity screens to make sure
            that the UI was usable and aesthetically pleasing.{" "}
          </p>

          <h2>High Fidelity Screens</h2>

          <div className="row wireframes">
            <div className="col-lg-3 col-6">
              <img src={screen1} className="wireframeInt"></img>
            </div>
            <div className="col-lg-3 col-6">
              <img src={screen2} className="wireframeInt"></img>
            </div>
            <div className="col-lg-3 col-6">
              <img src={screen3} className="wireframeInt"></img>
            </div>
            <div className="col-lg-3 col-6">
              <img src={screen4} className="wireframeInt"></img>
            </div>
          </div>
          <div className="row wireframes">
            <div className="col-lg-3 col-6">
              <img src={screen5} className="wireframeInt"></img>
            </div>
            <div className="col-lg-3 col-6">
              <img src={screen6} className="wireframeInt"></img>
            </div>
            <div className="col-lg-3 col-6">
              <img src={screen7} className="wireframeInt"></img>
            </div>
            <div className="col-lg-3 col-6">
              <img src={screen8} className="wireframeInt"></img>
            </div>
          </div>
          <p>
            Finally, we created a digital prototype using Figma to demonstrate
            the core functionality of our final product. In doing so, we again
            looked back at our scenarios to make sure we covered the most
            important features that our users would need. We also wanted to
            demonstrate the continuity of our UI by moving through the screens
            and illustrating their functionality.
          </p>
          <h2>Prototype</h2>
          <div>
            <iframe
              id="Prototype482"
              src="https://www.youtube.com/embed/GG9Te6GvPuc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <h2>Solution:</h2>
          <p>
            Connect students looking to explore new skills with professionals
            and other students that are passionate about sharing their
            knowledge.
          </p>
        </section>
        <Footer />
      </div>
    );
  }
}

export default classifyReport;
