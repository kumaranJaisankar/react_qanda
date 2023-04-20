import { v4 } from "uuid";
import { useState, useId, useContext } from "react";

//core

//icons

import "./index.css";
import { UserContext } from "../CatIn/catin";
import RadioChoice from "./choices/radioChoice";
import CheckChoice from "./choices/checkChoice";

const AnsList = (props) => {
  const { questionDetails } = props;
  const { questionText, questionType, choices, questionTypeList } =
    questionDetails;
  const uniqId = useId();
  const theme = useContext(UserContext);
  const xMark = theme ? "white" : "black";

  //  show full question or
  const [show, setAct] = useState({
    showAns: false,
    choiceVal: "",
  });
  const [isDelete, setDeleteQues] = useState(false);
  // question editable
  const [questEdit, setQuest] = useState(questionText);
  const [isEditable, setEdit] = useState(false);
  // changeing question type
  const [ChangedType, setQuestiontype] = useState(questionType);
  const showAnsBtn = () => {
    setAct({ ...show, showAns: !show.showAns });
  };
  const typeOfQus = (type, choices) => {
    switch (type) {
      case "TEXT":
        return <input type="text" placeholder="Enter Your Ans.." />;

      case "INTEGER":
        return <input type="number" className="wid" placeholder="" />;

      case "MULTICHECK":
        if (choices.length < 3) {
          const extraChoise = [...choices, { name: "Positive" }];
          const chois = extraChoise.map((each) => {
            return <CheckChoice key={v4()} checkDetail={each} />;
          });
          return chois;
        } else {
          const cho = choices.map((each) => {
            return <CheckChoice key={v4()} checkDetail={each} />;
          });

          return cho;
        }
      case "RADIO":
        if (choices.length > 2) {
          const extraChoise = [...choices];
          extraChoise.pop();
          const radioCho = extraChoise.map((each) => (
            <RadioChoice key={v4()} choiceDetail={each} />
          ));

          return radioCho;
        } else {
          const radioCho = choices.map((each) => (
            <RadioChoice key={v4()} choiceDetail={each} />
          ));

          return radioCho;
        }

      default:
        return "";
    }
  };
  const quesDel = isDelete ? "label-text" : "";
  const fontWe = isDelete ? "font-weight-bolder text-primary" : "";
  return (
    <>
      {" "}
      <li className="qus-list mt-1">
        <button
          title="remove"
          type="button"
          className={`ans-remove text-danger ${fontWe}`}
          onClick={() => setDeleteQues(!isDelete)}
        >
          -
        </button>
        {!show.showAns && (
          <>
            <label htmlFor={uniqId} className={`text-wrap ${quesDel}`}>
              {questEdit} ?
            </label>
            {!isDelete && (
              <button
                title="open"
                id={uniqId}
                className="ans-btn"
                type="button"
                onClick={showAnsBtn}
              >
                <i
                  className="fa-solid fa-chevron-down fa-beat-fade"
                  style={{ fontSize: "10px", color: "red" }}
                ></i>
              </button>
            )}
            {isDelete && (
              <button
                title="delete"
                id={uniqId}
                className="ans-btn"
                type="button"
              >
                <i class="fa-solid fa-check" style={{ color: "#45c322" }}></i>
              </button>
            )}
          </>
        )}

        {show.showAns && (
          <div className="ans-box rounded-lg ">
            <button
              type="button"
              className="pos rounded-circle p-1"
              onClick={showAnsBtn}
            >
              <i
                className="fa-solid fa-x "
                style={{ fontSize: "15px", color: `${xMark}` }}
              ></i>
            </button>
            <div className="ml-4 mb-4">
              <pre>
                Question Type :{" "}
                <select
                  value={ChangedType}
                  onChange={(event) => setQuestiontype(event.target.value)}
                >
                  {questionTypeList.map((each) => (
                    <option key={v4()} value={each}>
                      {each}
                    </option>
                  ))}
                </select>
              </pre>
              <span className="ans">Q.</span>
              {!isEditable && <h6 className="d-inline ">{questEdit} </h6>}
              {isEditable && (
                <input
                  type="text"
                  value={questEdit}
                  style={{ width: `${(questEdit.length + 1) * 8}px` }}
                  onChange={(e) => setQuest(e.target.value)}
                />
              )}
              <span>?</span>
              <button
                type="button"
                className="tooltips"
                onClick={() => setEdit(!isEditable)}
              >
                {isEditable && (
                  <i
                    class="fa-solid fa-check "
                    style={{ color: "#25710a", fontSize: "16px" }}
                  ></i>
                )}
                {!isEditable && (
                  <i
                    className="fa-solid fa-pen"
                    style={{ color: "#25710a", fontSize: "15px" }}
                  ></i>
                )}
              </button>
              <ul>{typeOfQus(ChangedType, choices)}</ul>
            </div>
          </div>
        )}
      </li>
    </>
  );
};
export default AnsList;
