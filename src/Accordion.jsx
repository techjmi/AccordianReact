import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="main_heading">
        <span>
          <p onClick={() => setShow(!show)}>
            <strong>{show ? "−" : "+"}</strong>
          </p>
        </span>
        <h3>{question}</h3>
      </div>

      {show && <p>{answer}</p>}
    </>
  );
};

export default Accordion;
