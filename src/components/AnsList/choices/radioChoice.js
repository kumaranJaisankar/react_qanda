import React, { useState, useId } from "react";
import "../index.css";
const getValue = JSON.parse(sessionStorage.getItem("storeText"));
const RadioChoice = (props) => {
  const { choiceDetail } = props;
  const { name } = choiceDetail;
  const uniqId = useId();
  const [isEditable, setEdit] = useState(false);
  const [textEdit, setText] = useState(name);
  sessionStorage.setItem("storeText", JSON.stringify(textEdit));

  return (
    <li className="ml-3">
      <input
        id={`${name}-${uniqId}`}
        type="radio"
        // value={each.displayValue}
        name="each.name"
        className="mr-1"
      />
      {isEditable && (
        <input
          type="text"
          className="mt-1"
          style={{ width: `${(textEdit.length + 1) * 8}px` }}
          value={textEdit}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      {!isEditable && <label htmlFor={`${name}-${uniqId}`}>{textEdit}</label>}
      <button
        title="edit"
        type="button"
        className="tooltips"
        onClick={() => setEdit(!isEditable)}
      >
        {isEditable && (
          <i
            class="fa-solid fa-check "
            style={{ color: "#25710a", fontSize: "15px" }}
          ></i>
        )}
        {!isEditable && (
          <i
            className="fa-solid fa-pen"
            style={{ color: "#25710a", fontSize: "13px" }}
          ></i>
        )}
      </button>
    </li>
  );
};

export default RadioChoice;
