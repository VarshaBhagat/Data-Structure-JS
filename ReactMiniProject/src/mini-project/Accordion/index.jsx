import React, { useEffect, useState } from "react";
import questions from "./ questions";
const AccordionItem = ({
  title,
  description,
  accordionId,
  setIdOfOpenAccordion,
  id,
}) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
    setIdOfOpenAccordion(id);
  };
  useEffect(() => {
    if (accordionId) {
      setShow(accordionId === id);
    }
  }, [accordionId, id]);

  // const toggle = () => {
  //   setShow((prev) => !prev);
  //   setIdOfOpenAccordion(id);
  // };

  // useEffect(() => {
  //   if (openAccordionId) {
  //     setShow(openAccordionId === id);
  //   }
  // }, [id, openAccordionId]);)
  return (
    <div
      style={{
        border: "1px solid grey",
        padding: "10px 20px",
        marginBottom: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: "bold",
        }}
      >
        <p>{title}</p>
        <button
          style={{
            background: "lightslategrey",
            border: 0,
            borderRadius: "50%",
            color: "white",
          }}
          onClick={toggle}
        >
          {show ? "-" : "+"}
        </button>
      </div>
      {show && <p style={{ textAlign: "start" }}>{description}</p>}
    </div>
  );
};
const Accordion = () => {
  const [isMultiple, setMultiple] = useState(false);
  const [accordionId, updateIdOfOpenAccordion] = useState("");
  const setIdOfOpenAccordion = (id) => {
    updateIdOfOpenAccordion(isMultiple ? null : id);
  };
  const onMultipleChange = () => {
    if (isMultiple) {
      setIdOfOpenAccordion(-1);
    }
    setMultiple(!isMultiple);
  };

  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="checkbox">Is multiple open accordion allowed?</label>
        <input
          type="checkbox"
          id="checkbox"
          value={isMultiple}
          onChange={onMultipleChange}
        ></input>
      </div>
      {questions.map((q) => (
        <AccordionItem
          key={q.id}
          title={q.title}
          description={q.info}
          accordionId={accordionId}
          setIdOfOpenAccordion={setIdOfOpenAccordion}
          id={q.id}
          isMultiple={isMultiple}
        />
      ))}
    </div>
  );
};

export default Accordion;
