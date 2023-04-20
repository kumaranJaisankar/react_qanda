import { useState } from "react";
import { withRouter } from "react-router-dom";
import { v4 } from "uuid";

import {
  AiFillCloseCircle,
  AiOutlineDown,
  AiOutlineMinus,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsChevronDoubleDown } from "react-icons/bs";
import { RiCloseCircleLine } from "react-icons/ri";
import "./index.css";
import AnsList from "../AnsList/ansList";
import CategoryCont from "../categoryContainer/container";
import AddQuestion from "../AddQuestions/addquestion";
import { Tooltip } from "primereact/tooltip";

import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

const CategoryList = (props) => {
  const [toggler, clickTogle] = useState({
    ans: false,
    subCat: false,
    currentActive: false,
  });
  const { categoryDetail } = props;
  const {
    id,
    first,
    name,
    questions,
    subCategories,
    hasQuestions,
    hasSubCategories,
    level,
    weightage,
  } = categoryDetail;

  const clickingBtn = () => {
    console.log(questions);
    clickTogle({ ...toggler, ans: !toggler.ans });
  };

  // let isTrue = false;
  // if (activeId === id) {
  //   const { isActive } = state;
  //   isTrue = isActive;
  // }
  // const triggerOpenClose = () => {
  //   console.log(id);
  //   btnClicked(id);
  // };
  const { history } = props;
  const isCurrent = history.location.pathname === "/default";

  const triggerOpenClose = () => {
    clickTogle({ ...toggler, currentActive: !toggler.currentActive });
  };
  const expandSubCatBtn = () => {
    clickTogle({ ...toggler, subCat: !toggler.subCat });
  };

  const addThisQuest = (quest) => {
    clickTogle({ ...toggler, ans: !toggler.ans });
  };

  const addSubCategory = () => {
    console.log("add");
  };

  const storage = JSON.parse(localStorage.getItem("addQuest"));
  const seprateQuestion = (store, pk) => {
    let questArray = [];
    if (questions !== null) {
      questArray = [...questions];
      for (let k of store) {
        if (k.currentId === pk) {
          questArray.push(k);
        }
      }
    }
    console.log(questArray, "na dha da");
    return questArray;
  };
  return (
    <li className="outer mb-2  p-3">
      <div
        className="d-flex flex-row curser justify-content-between"
        onClick={triggerOpenClose}
      >
        <h3 className="head-size">{first}</h3>
        <Tooltip target=".close-open" mouseTrackLeft={10} />
        <small>{level}</small>
        <button
          data-pr-tooltip={!toggler.currentActive ? "open" : "close"}
          className="close-open mr-5"
          type="button"
        >
          {toggler.currentActive ? (
            <AiOutlineMinus size={25} color="#125398" />
          ) : (
            <AiOutlineDown size={25} color="#125398" />
          )}
        </button>
      </div>
      {toggler.currentActive && (
        <div>
          <hr />
          <div className="pre-class d-flex flex-row justify-content-start flex-wrap align-items-start">
            <p className="c-name">
              <span className="pre-class"> Name :</span>{" "}
              <input
                type="text"
                value={name}
                style={{ width: `${name.length * 8}px` }}
              />
            </p>

            <p className="c-name ml-5">
              <span className="pre-class"> weightage :</span>{" "}
              <input
                type="number"
                value={weightage}
                style={{ width: `${(weightage + "").length * 20}px` }}
              />
            </p>
            {/* <p className="c-name lighter">
              
              <span className="pre-class"> Percent :</span>{" "}
              <input type="number" className="w-25" placeholder="0" /> %
            </p> */}
          </div>
          {/* quetion session */}
          <hr />
          <div>
            {hasQuestions && (
              <>
                <div className="arround">
                  <h6 className="pre-class font-weight-bold">Questions</h6>

                  {isCurrent && (
                    <>
                      <Tooltip target=".close-open" />
                      <button
                        className="close-open mr-5"
                        data-pr-tooltip={
                          !toggler.ans ? "add question" : "close"
                        }
                        data-pr-position="top"
                        type="button"
                        onClick={clickingBtn}
                      >
                        {toggler.ans ? (
                          <AiFillCloseCircle size={25} color="#125398" />
                        ) : (
                          <AiOutlinePlusCircle size={25} color="#125398" />
                        )}
                      </button>
                    </>
                  )}
                </div>
                {/* adding question template */}
                {isCurrent && (
                  <div
                    className={`question-form mt-1 ${toggler.ans && "opening"}`}
                  >
                    {toggler.ans && (
                      <AddQuestion addThisQuest={addThisQuest} currentId={id} />
                    )}
                  </div>
                )}
                <ol className="ans-list">
                  {(storage === null
                    ? questions
                    : seprateQuestion(storage, id)
                  ).map((each) =>
                    each === null ? (
                      ""
                    ) : (
                      <AnsList key={v4()} questionDetails={each} />
                    )
                  )}
                </ol>

                {/* <h6 className={`mt-3 pre-class ${unactive} font-weight-bold`}>
                  Sub Categories
                </h6> */}
              </>
            )}
            {hasSubCategories && (
              <>
                {/* <h6 className="mb-4 pre-class unactive font-weight-bold">
                  Questions
                </h6> */}
                <div className="arround">
                  <h6 className="pre-class font-weight-bold">Sub Categories</h6>
                  <button
                    type="button"
                    className="add-cate rounded-pill"
                    onClick={addSubCategory}
                  >
                    Add
                  </button>
                  <button
                    className="close-open mr-5"
                    type="button"
                    onClick={expandSubCatBtn}
                  >
                    {toggler.subCat ? (
                      <RiCloseCircleLine size={30} color="#125398" />
                    ) : (
                      <BsChevronDoubleDown
                        size={25}
                        color="#125398"
                        className="fa-bounce"
                      />
                    )}
                  </button>
                </div>
                {toggler.subCat && (
                  <ul className="ans-list">
                    {subCategories.map((each) => (
                      <CategoryCont key={v4()} categoryDetail={each} />
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </li>
  );
};

export default withRouter(CategoryList);
