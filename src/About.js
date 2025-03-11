import React from "react";
import portrait from "./eden.png";
import { Link } from "react-router-dom";
import outboundBlack from "./outbound_black.png";
function About(props) {
  return (
    <div id="About" className="layout">
      <h1>Eden Fenn</h1>
      <h2>all about me</h2>
      <div class="about-content">
        <p>
          <strong>Eden Fenn</strong> (she/they) is a Baltimore-based writer and
          software developer. Eden was born in Danvers, MA, a mile from Rebecca
          Nurse's house. Rebecca was hanged in the Salem Witch Trials; Eden has
          not yet been caught.
        </p>
        <p>
          Eden is represented by{" "}
          <a href="https://www.lizadawsonassociates.com/lauren-bajek">
            <span className="about-link">
              Lauren Bajek <img src={outboundBlack} />
            </span>
          </a>
          . Eden's current project is <em>The Candle at Both Ends</em>, a
          contemporary fantasy/horror novel about a toxic nonprofit wielding
          magic that consumes its employees' life essence.
        </p>
        <p></p>
        <p>
          Eden's{" "}
          <Link
            to="/stories"
            className="about-link"
            onClick={() => {
              props.setRoute("stories");
            }}
          >
            short stories
          </Link>{" "}
          have appeared in <em>Nature Futures</em>,{" "}
          <em>Daily Science Fiction</em>, and{" "}
          <em>Asimov's Science Fiction Magazine</em>.
        </p>
        <p>
          <strong>
            <em>let's create together //</em>
          </strong>
          <br />
          <a href="mailto:eden@edenfenn.com">
            <span className="about-link">
              email <img src={outboundBlack}></img>
            </span>
          </a>{" "}
          <a href="https://bsky.app/profile/edenfenn.bsky.social">
            <span className="about-link">
              bluesky <img src={outboundBlack}></img>
            </span>
          </a>{" "}
          <a href="https://instagram.com/eden.fenn">
            <span className="about-link">
              instagram <img src={outboundBlack}></img>
            </span>
          </a>
        </p>
      </div>
      <img
        src={portrait}
        className="portrait small"
        alt="photograph of Eden Fenn"
      />
    </div>
  );
}
export default About;
