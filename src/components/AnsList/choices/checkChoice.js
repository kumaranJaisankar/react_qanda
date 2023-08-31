import React, { useState, useId, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../index.css";

const CheckChoice = (props) => {
  const { checkDetail, setRender, render, currentId } = props;
  const checkBoxRef = useRef();
  const { name, id } = checkDetail;
  const uniqId = useId();
  const [isEditable, setEdit] = useState(false);
  //  path for default
  const { pathname } = useLocation();
  const isDefaultPage = pathname === "/default";
  const [textEdit, setText] = useState(name);

  const checkBoxChange = () => {
    const fromlocalStoreQuestions = JSON.parse(
      localStorage.getItem("addQuest")
    );
    const firstFilter = fromlocalStoreQuestions.filter(
      (each) => each.id === currentId
    );
    const fromFirstFilter = firstFilter[0];
    const beforeFilter = [...firstFilter[0].answer.selectedChoices];

    const isTrue = checkBoxRef.current.checked;
    let forEachEle = [];
    if (isTrue) {
      forEachEle = fromlocalStoreQuestions.map((each) => {
        if (each.id === currentId) {
          console.log(each, "kjabvhjabb");
          return {
            ...each,
            answer: { ...each.answer, selectedChoices: [...beforeFilter, id] },
          };
        } else {
          return each;
        }
      });

      localStorage.setItem("addQuest", JSON.stringify(forEachEle));
      // fromFirstFilter.answer.selectedChoices = [...beforeFilter, id];
      // const unFilter = fromlocalStoreQuestions.filter(
      //   (each) => each.id !== currentId
      // );
      // localStorage.setItem(
      //   "addQuest",
      //   JSON.stringify([...firstFilter, ...unFilter])
      // );
    } else {
      forEachEle = fromlocalStoreQuestions.map((each) => {
        if (each.id === currentId) {
          console.log(each, "kjabvhjabb");
          return {
            ...each,
            answer: {
              ...each.answer,
              selectedChoices: beforeFilter.filter((each) => each !== id),
            },
          };
        } else {
          return each;
        }
      });

      localStorage.setItem("addQuest", JSON.stringify(forEachEle));
    }
    setRender(!render);
  };
  const fromlocalStoreQuestions = JSON.parse(localStorage.getItem("addQuest"));
  const firstFilter = fromlocalStoreQuestions.filter(
    (each) => each.id === currentId
  );
  function isCheckedEach(element) {
    return element === id;
  }
  return (
    <li className="ml-3">
      <input
        checked={firstFilter[0].answer.selectedChoices.some(isCheckedEach)}
        ref={checkBoxRef}
        type="checkbox"
        value={name}
        className="mr-1"
        onChange={checkBoxChange}
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

export default CheckChoice;
