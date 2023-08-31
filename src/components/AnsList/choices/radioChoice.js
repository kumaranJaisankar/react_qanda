import React, { useState, useId, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../index.css";
// const getValue = JSON.parse(sessionStorage.getItem("storeText"));
const RadioChoice = (props) => {
  console.log(props, "kum");
  const { choiceDetail, setRender, render, currentId } = props;
  const { name, id } = choiceDetail;
  const radioRef = useRef(null);
  console.log(radioRef);
  // default path page
  const { pathname } = useLocation();
  const isDefaultPage = pathname === "/default";
  const uniqId = useId();
  const [isEditable, setEdit] = useState(false);
  const [textEdit, setText] = useState(name);
  sessionStorage.setItem("storeText", JSON.stringify(textEdit));
  sessionStorage.setItem("isChecked", JSON.stringify({ id }));
  const fromlocalStoreQuestions = JSON.parse(localStorage.getItem("addQuest"));
  const firstFilter = fromlocalStoreQuestions.filter(
    (each) => each.id === currentId
  );
  const radioChecking = () => {
    const forEachEle = fromlocalStoreQuestions.map((each) => {
      if (each.id === currentId) {
        return {
          ...each,
          answer: { ...each.answer, selectedChoices: id },
        };
      } else {
        return each;
      }
    });
    localStorage.setItem("addQuest", JSON.stringify(forEachEle));
    // const fromFirstFilter = firstFilter[0];
    // fromFirstFilter.answer.selectedChoices = id;
    // const unFilter = fromlocalStoreQuestions.filter(
    //   (each) => each.id !== currentId
    // );
    // const extraVal = [...firstFilter, ...unFilter];
    // extraVal.sort();
    // console.log(extraVal);

    // localStorage.setItem("addQuest", JSON.stringify(extraVal));

    setRender(!render);
  };

  return (
    <li className="ml-3">
      <input
        checked={firstFilter[0].answer.selectedChoices === id}
        ref={radioRef}
        id={`${name}-${uniqId}`}
        type="radio"
        onChange={radioChecking}
        // value={each.displayValue}
        name={currentId}
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
      {isDefaultPage && (
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
      )}
    </li>
  );
};

export default RadioChoice;
