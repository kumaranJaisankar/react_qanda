import "./index.css";
import { useState } from "react";
import { v4 } from "uuid";
import { Button } from "primereact/button";
import { Chips } from "primereact/chips";
const questionDetailsAdd = {
  id: v4(),
  questionTypeList: [
    "TEXT",
    "DROPDOWN",
    "RADIO",
    "MULTICHECK",
    "INTEGER",
    "NUMBER",
  ],
  isRequired: null,
  questionType: "TEXT",
  defaultAnswer: null,
  answer: {
    textAnswer: null,
    intAnswer: null,
    floatAnswer: null,
    selectedChoices: [
      {
        id: v4(),
        choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
        name: "Mathematics",
        displayValue: "Mathematics",
        choiceType: "CHECK",
        score: 10.0,
      },
      {
        id: v4(),
        choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
        name: "Science",
        displayValue: "Science",
        choiceType: "CHECK",
        score: 10.0,
      },
      {
        id: v4(),
        choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
        name: "History",
        displayValue: "History",
        choiceType: "CHECK",
        score: 10.0,
      },
    ],
    evalScore: null,
  },
  choices: [
    {
      id: v4(),
      choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
      name: "Mathematics",
      displayValue: "Mathematics",
      choiceType: "CHECK",
      score: 10.0,
    },
    {
      id: v4(),
      choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
      name: "Science",
      displayValue: "Science",
      choiceType: "CHECK",
      score: 10.0,
    },
    {
      id: v4(),
      choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
      name: "History",
      displayValue: "History",
      choiceType: "CHECK",
      score: 10.0,
    },
  ],
  questionText: "Pick your interest Topics",
};

const questionTypes = [
  "TEXT",
  "DROPDOWN",
  "RADIO",
  "MULTICHECK",
  "INTEGER",
  "NUMBER",
];
const addingQuestionFromLoacalstorage = (quesDetails) => {
  const localStore = JSON.parse(localStorage.getItem("addQuest"));
  if (localStore === null) {
    return JSON.stringify([quesDetails]);
  } else {
    return JSON.stringify([...localStore, quesDetails]);
  }
};

const AddQuestion = (props) => {
  const { addThisQuest, currentId } = props;
  console.log(currentId);
  const [typ, setTyp] = useState("TEXT");
  const [value, setValue] = useState([]);
  console.log(value);
  const [qesDetails, setQues] = useState({ ...questionDetailsAdd, currentId });

  const submitQuestion = (event) => {
    event.preventDefault();
    let collectForLoaclStorage = [];

    collectForLoaclStorage.push(qesDetails);

    localStorage.setItem(
      "addQuest",
      addingQuestionFromLoacalstorage(qesDetails)
    );
    addThisQuest(qesDetails);
  };

  const changeType = (event) => {
    setQues({ ...qesDetails, questionType: event.target.value });
    setTyp(event.target.value);
  };
  const isDisabled = (qesDetail) => {
    if (
      qesDetail.questionText.length === 0 ||
      qesDetail.defaultAnswer === "" ||
      qesDetail.defaultAnswer === null
    ) {
      return true;
    } else {
      return false;
    }
  };
  console.log(isDisabled(qesDetails));
  return (
    <div className="container p-3">
      <form className="row" onSubmit={submitQuestion}>
        <pre className="col-md-5 col-lg-4">
          <label className="mr-1">
            <span className="text-danger">*</span>Question :{" "}
          </label>
          <input
            onChange={(event) =>
              setQues({ ...qesDetails, questionText: event.target.value })
            }
            type="text"
            placeholder="Enter question texts"
            className="question-input"
          />
          ?
        </pre>
        {/* question type dropbox */}
        <pre className="col-md-5 col-lg-4">
          <label>
            <span className="text-danger">*</span>Question Type :{" "}
          </label>
          <select onChange={changeType} value={typ}>
            {questionTypes.map((each) => {
              return (
                <option key={v4()} value={each}>
                  {each}
                </option>
              );
            })}
          </select>
        </pre>

        <pre className="p-fluid d-flex flex-row">
          <label htmlFor="chips1">
            <span className="text-danger">*</span>Choices :
          </label>

          {typ === "MULTICHECK" || typ === "RADIO" || typ === "DROPDOWN" ? (
            <Chips
              className="ml-1"
              inputId="chips1"
              value={value}
              onChange={(e) => setValue(e.value)}
            />
          ) : (
            <Chips
              disabled
              className="ml-1 chip"
              inputId="chips1"
              value={value}
              onChange={(e) => setValue(e.value)}
            />
          )}
        </pre>
        <pre className="col-md-5 col-lg-4">
          <label>
            <span className="text-danger">*</span>Default Ans :{" "}
          </label>
          <input
            onChange={(event) =>
              setQues({ ...qesDetails, defaultAnswer: event.target.value })
            }
            type="text"
            placeholder="Enter Default ans"
            className="question-input"
          />
        </pre>

        <div className="col-6 ">
          <div>
            <button
              disabled={isDisabled(qesDetails)}
              tooltip="add question"
              tooltipOptions={{ position: "bottom" }}
              type="submit"
              className="text-white add-button btn btn-success
              h-25"
              style={{ fontSize: "10px" }}
            >
              Add Question
            </button>
            <small className="small text-danger d-block">
              {isDisabled(qesDetails) ? "*Fill required field" : ""}
            </small>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddQuestion;
