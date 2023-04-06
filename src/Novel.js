import React from 'react';
import outerSpace from './space.jpg';
import { Link } from 'react-router-dom';
import outboundBlack from './outbound_black.png';
function About(props) {
  return <div id="About" className="layout">
    <h1>Eden Fenn</h1>
    <h2>the dweller's house</h2>
    <div class="about-content">
      <p>
        <em>The Dweller's House</em> is a science fiction novel about interstellar youth missionaries.
        It combines an ensemble adventure and robust LGBTQ+ cast with a deep critique of religious proselytization and savior narratives.
        The book draws on five years of my experience as a teenage missionary with major evangelical organizations.
      </p>
    </div>
    <img src={outerSpace} className="portrait small" alt="outer space" />

  </div>;
}
export default About;