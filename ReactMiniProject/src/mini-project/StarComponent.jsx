import React, {useState} from "react";

const Star = ({ marked, starId }) => {
  return (
    <span style={{ fontSize: "100px" }} role="button" data-star-id={starId}>
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};
const StarComponent = ({ length }) => {
  const [rating, setRating]=useState(0)
  const [selection, setSelection]=useState(0)
  let arr = Array.from({ length: length });
  const onClick = (e) => {setSelection(e.target.dataset.starId)};
  const onMouseOver = (e) => {
    setRating(e.target.dataset.starId)
  };
  const onMouseLeave = () => {
    setRating(0)
  };
  return (
    <div
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {arr.map((_, id) => {
      return (
        <Star key={`star_${id + 1}`} starId={id + 1} marked={(rating||selection)>id} />
      )})}
    </div>
  );
};

export default StarComponent;
