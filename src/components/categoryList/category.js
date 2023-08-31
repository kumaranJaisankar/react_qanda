import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
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
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
// tost

import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
import AddSubCategory from "./AddSubCategory";
const subCategoryTemplate = {
  id: v4(),
  name: "Sub Category with Questions and Sub-Category",
  hasQuestions: true,
  hasSubCategories: true,
  intScore: null,
  percentScore: null,
  level: "Level 2",
  weightage: 15,
  questions: [
    {
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
        textAnswer: "Rohit Kumar",
        intAnswer: null,
        floatAnswer: null,
        selectedChoices: null,
        evalScore: null,
      },
      choices: null,
      questionText: "What is your name",
    },
    {
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
      questionType: "INTEGER",
      defaultAnswer: null,
      answer: {
        textAnswer: null,
        intAnswer: 32,
        floatAnswer: null,
        selectedChoices: null,
        evalScore: null,
      },
      choices: null,
      questionText: "What is your age",
    },
    {
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
      questionType: "MULTICHECK",
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
    },
  ],
  subCategories: [
    {
      id: v4(),
      name: "Super Sub Category with only Questions",
      hasQuestions: true,
      hasSubCategories: false,
      intScore: null,
      percentScore: null,
      level: "Level 3",
      weightage: 10,
      questions: [
        {
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
            textAnswer: "Rohit Kumar",
            intAnswer: null,
            floatAnswer: null,
            selectedChoices: null,
            evalScore: null,
          },
          choices: null,
          questionText: "What is your name",
        },
        {
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
          questionType: "INTEGER",
          defaultAnswer: null,
          answer: {
            textAnswer: null,
            intAnswer: 32,
            floatAnswer: null,
            selectedChoices: null,
            evalScore: null,
          },
          choices: null,
          questionText: "What is your age",
        },
        {
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
          questionType: "MULTICHECK",
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
        },
      ],
      subCategories: null,
    },
  ],
};
const subCategoryObjectArray = [
  {
    id: v4(),
    name: "Sub Category with only Questions",
    hasQuestions: true,
    hasSubCategories: false,
    intScore: null,
    percentScore: null,
    level: "Level 2",
    weightage: 15,
    questions: [
      {
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
          textAnswer: "Rohit Kumar",
          intAnswer: null,
          floatAnswer: null,
          selectedChoices: null,
          evalScore: null,
        },
        choices: null,
        questionText: "What is your name",
      },
      {
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
        questionType: "INTEGER",
        defaultAnswer: null,
        answer: {
          textAnswer: null,
          intAnswer: 32,
          floatAnswer: null,
          selectedChoices: null,
          evalScore: null,
        },
        choices: null,
        questionText: "What is your age",
      },
      {
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
        questionType: "MULTICHECK",
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
      },
    ],
    subCategories: null,
  },
  {
    id: v4(),
    name: "Sub Category with Questions and Sub-Category",
    hasQuestions: true,
    hasSubCategories: true,
    intScore: null,
    percentScore: null,
    level: "Level 2",
    weightage: 15,
    questions: [
      {
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
          textAnswer: "Rohit Kumar",
          intAnswer: null,
          floatAnswer: null,
          selectedChoices: null,
          evalScore: null,
        },
        choices: null,
        questionText: "What is your name",
      },
      {
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
        questionType: "INTEGER",
        defaultAnswer: null,
        answer: {
          textAnswer: null,
          intAnswer: 32,
          floatAnswer: null,
          selectedChoices: null,
          evalScore: null,
        },
        choices: null,
        questionText: "What is your age",
      },
      {
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
        questionType: "MULTICHECK",
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
      },
    ],
    subCategories: [
      {
        id: v4(),
        name: "Super Sub Category with only Questions",
        hasQuestions: true,
        hasSubCategories: false,
        intScore: null,
        percentScore: null,
        level: "Level 3",
        weightage: 10,
        questions: [
          {
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
              textAnswer: "Rohit Kumar",
              intAnswer: null,
              floatAnswer: null,
              selectedChoices: null,
              evalScore: null,
            },
            choices: null,
            questionText: "What is your name",
          },
          {
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
            questionType: "INTEGER",
            defaultAnswer: null,
            answer: {
              textAnswer: null,
              intAnswer: 32,
              floatAnswer: null,
              selectedChoices: null,
              evalScore: null,
            },
            choices: null,
            questionText: "What is your age",
          },
          {
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
            questionType: "MULTICHECK",
            defaultAnswer: null,
            answer: {
              textAnswer: null,
              intAnswer: null,
              floatAnswer: null,
              selectedChoices: [
                {
                  id: v4(),
                  choiceTypeList: [
                    "TEXT",
                    "RADIO",
                    "CHECK",
                    "INTEGER",
                    "NUMBER",
                  ],
                  name: "Mathematics",
                  displayValue: "Mathematics",
                  choiceType: "CHECK",
                  score: 10.0,
                },
                {
                  id: v4(),
                  choiceTypeList: [
                    "TEXT",
                    "RADIO",
                    "CHECK",
                    "INTEGER",
                    "NUMBER",
                  ],
                  name: "Science",
                  displayValue: "Science",
                  choiceType: "CHECK",
                  score: 10.0,
                },
                {
                  id: v4(),
                  choiceTypeList: [
                    "TEXT",
                    "RADIO",
                    "CHECK",
                    "INTEGER",
                    "NUMBER",
                  ],
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
          },
        ],
        subCategories: null,
      },
    ],
  },
];
const CategoryList = (props) => {
  const [isRendering, setRendering] = useState(false);
  const [toggler, clickTogle] = useState({
    ans: false,
    subCat: false,
    currentActive: false,
  });
  const { categoryDetail, reRenderThisPages } = props;
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
  const { pathname } = useLocation();

  const isDefaultPage = pathname === "/default";

  const triggerOpenClose = () => {
    clickTogle({ ...toggler, currentActive: !toggler.currentActive });
  };
  const expandSubCatBtn = () => {
    clickTogle({ ...toggler, subCat: !toggler.subCat });
  };

  const addThisQuest = (quest) => {
    clickTogle({ ...toggler, ans: !toggler.ans });
  };
  // const forPreventDuplicate = (prev) => {
  //   const filtering = prev.some((each) => each.currentId === id);
  //   console.log(filtering)
  //   if (filtering.length > 0) {
  //     return {};
  //   } else {
  //     return { ...ele, currentId: id };
  //   }
  // };

  if (questions !== null) {
    if (id !== undefined) {
      const previousQuestions = JSON.parse(localStorage.getItem("addQuest"));
      const isNullOr = previousQuestions === null ? [] : previousQuestions;
      const isContainSame = isNullOr.some((ques) => ques.currentId === id);
      const withCurrentId = isContainSame
        ? []
        : questions.map((each) => ({ ...each, currentId: id }));
      let arr = [...withCurrentId];
      if (previousQuestions !== null) {
        previousQuestions.forEach((datum) => {
          if (!arr.find((item) => item.id === datum.id)) {
            arr.push(datum);
          }
        });
      }
      localStorage.setItem("addQuest", JSON.stringify(arr));
    }
  }

  const storage = JSON.parse(localStorage.getItem("addQuest"));
  const seprateQuestion = (store, pk) => {
    const questionFromLocal = JSON.parse(localStorage.getItem("addQuest"));
    let questArray = [];
    if (questionFromLocal !== null) {
      questArray = questionFromLocal.filter((each) => each.currentId === pk);
      // for (let k of store) {
      //   if (k.currentId === pk) {
      //     questArray.push(k);
      //   }
      // }
    }
    return questArray;
  };
  const onAddSubCategory = (extraSub) => {
    const correctSubCategory = { ...subCategoryTemplate, ...extraSub };
    subCategories.push(correctSubCategory);
    setRendering(!isRendering);
  };

  // add extra
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const cancelRefs = useRef();
  // deleting main category
  const deleteMainCategory = () => {
    const fromStorage = JSON.parse(localStorage.getItem("jsonData"));
    const mainCategory = fromStorage.categories.filter(
      (each) => each.id !== id
    );
    localStorage.setItem(
      "jsonData",
      JSON.stringify({ ...fromStorage, categories: mainCategory })
    );
    reRenderThisPages();
    onClose();
  };
  // adding new subcategory
  const successToast = useToast();
  const addingNewSubCategory = (currentId) => {
    const getFromLocal = JSON.parse(localStorage.getItem("jsonData"));
    const filterAndAdd = getFromLocal.categories.map((each) => {
      if (each.id === currentId) {
        return {
          ...each,
          hasSubCategories: true,
          subCategories: subCategoryObjectArray,
        };
      }
      return each;
    });
    const newjsonData = { ...getFromLocal, categories: filterAndAdd };
    localStorage.setItem("jsonData", JSON.stringify(newjsonData));
    onClose();
    reRenderThisPages();
    successToast({
      title: "Added Subcategory successfully",
      position: "top",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <li className="d-flex w-100 owne">
      {pathname === "/default" && (
        <button type="button" className="delete-button" onClick={onOpen}>
          <i
            className="fa-solid fa-delete-left fa-rotate-180"
            style={{ color: "red" }}
          ></i>
        </button>
      )}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete <span className="text-danger">{first}</span>
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deleteMainCategory} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <div className="outer mb-2  p-3 w-100 ">
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

                    {isDefaultPage && (
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
                  {isDefaultPage && (
                    <div
                      className={`question-form mt-1 ${
                        toggler.ans && "opening"
                      }`}
                    >
                      {toggler.ans && (
                        <AddQuestion
                          addThisQuest={addThisQuest}
                          currentId={id}
                        />
                      )}
                    </div>
                  )}
                  <ol className="ans-list">
                    {seprateQuestion(storage, id).map((each) =>
                      each === null ? (
                        ""
                      ) : (
                        <AnsList
                          key={v4()}
                          questionDetails={each}
                          setRendering={setRendering}
                          isRendering={isRendering}
                        />
                      )
                    )}
                  </ol>
                  {hasSubCategories === false && (
                    <>
                      {isDefaultPage && (
                        <button
                          type="button"
                          className="unmuted-btn p-0"
                          onClick={onOpen}
                        >
                          <h6 className=" font-weight-bold text-muted txt-decoration">
                            Sub Categories
                          </h6>
                        </button>
                      )}

                      <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRefs}
                        onClose={onClose}
                      >
                        <AlertDialogOverlay>
                          <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                              Add Subcategory
                            </AlertDialogHeader>

                            <AlertDialogBody>
                              Do you want to Add subCategories on{" "}
                              <span className="text-primary">{first}</span>?
                            </AlertDialogBody>

                            <AlertDialogFooter>
                              <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                              </Button>
                              <Button
                                colorScheme="blue"
                                onClick={() => addingNewSubCategory(id)}
                                ml={3}
                              >
                                ADD
                              </Button>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialogOverlay>
                      </AlertDialog>
                    </>
                  )}
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
                  {hasQuestions === false && (
                    <>
                      {isDefaultPage && (
                        <button
                          type="button"
                          className="unmuted-btn p-0"
                          onClick={onOpen}
                        >
                          <h6 className=" font-weight-bold text-muted txt-decoration">
                            Questions
                          </h6>
                        </button>
                      )}

                      <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRefs}
                        onClose={onClose}
                      >
                        <AlertDialogOverlay>
                          <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                              Add Questions
                            </AlertDialogHeader>

                            <AlertDialogBody>
                              Do you want to Add Questions on{" "}
                              <span className="text-primary">{first}</span>?
                            </AlertDialogBody>

                            <AlertDialogFooter>
                              <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                              </Button>
                              <Button
                                colorScheme="blue"
                                onClick={onClose}
                                ml={3}
                              >
                                ADD
                              </Button>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialogOverlay>
                      </AlertDialog>
                    </>
                  )}
                  <div className="arround" onClick={expandSubCatBtn}>
                    <h6 className="pre-class font-weight-bold">
                      Sub Categories
                    </h6>

                    <button className="close-open mr-5" type="button">
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
                    <>
                      {isDefaultPage && (
                        <div className="w-100 text-center">
                          {" "}
                         
                          <AddSubCategory onAddSubCategory={onAddSubCategory} />
                        </div>
                      )}
                      <ul className="ans-list">
                        {subCategories.map((each) => (
                          <CategoryCont key={v4()} categoryDetail={each} />
                        ))}
                      </ul>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default CategoryList;
