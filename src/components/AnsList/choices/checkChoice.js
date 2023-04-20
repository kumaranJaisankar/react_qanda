import React, { useState, useId } from "react";
import "../index.css";

const CheckChoice = (props) => {
  const { checkDetail } = props;
  const { name } = checkDetail;
  const uniqId = useId();
  const [isEditable, setEdit] = useState(false);
  console.log(isEditable);
  const [textEdit, setText] = useState(name);
  return (
    <li className="ml-3">
      <input type="checkbox" value={name} className="mr-1" />

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

export default CheckChoice;
