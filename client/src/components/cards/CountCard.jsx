import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import "/src/assets/css/components/cards/countcard.scss";

const CountCard = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="countcard">
      <div className="card">
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <h1>
              {counterOn &&
              <CountUp className="countup" start={0} end={567} duration={5} delay={0}/>
              } Ml
            </h1>
            <p>under managment</p>
        </ScrollTrigger>
      </div>
      <div className="card">
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <h1>
              {counterOn &&
              <CountUp className="countup" start={0} end={4} duration={5} delay={0}/>
              } 
            </h1>
            <p>Offices State-Side</p>
        </ScrollTrigger>
      </div>
      <div className="card">
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <h1>
              {counterOn &&
              <CountUp className="countup" start={0} end={10} duration={5} delay={0}/>
              }
            </h1>
            <p>Loss Aversion Strategies</p>
        </ScrollTrigger>
      </div>
    </div>
  )
}

export default CountCard;