import React from 'react';
import "./index.scss";

import Button from '../../components/Button';

export default function Home({reference}) {
  const handleButton = () => {
    window.open("https://www.linkedin.com/in/gettealan/", "_blank");
  }

  return (
    <section className="home" ref={reference}>
{/*       <div className="button-container">
        <Button text="Contact Me" handleClick={handleButton}></Button>
      </div>    */}
    </section>
  );
}
