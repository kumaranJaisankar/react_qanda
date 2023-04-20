import { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Suspense, createContext, memo } from "react";
import { v4 as uuidv4 } from "uuid";
import CategoryList from "../categoryList/category";
import "./index.css";
import CatPopup from "./CatPopup";
const sampleCategories = {
  name: "Base Line, Questions and SubCategories",
  first: "category -4",
  hasQuestions: true,
  hasSubCategories: true,
  intScore: null,
  percentScore: null,
  level: "Level 1",
  weightage: 40,
  questions: [
    {
      id: uuidv4(),
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
      id: uuidv4(),
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
      id: uuidv4(),
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
            id: uuidv4(),
            choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
            name: "Mathematics",
            displayValue: "Mathematics",
            choiceType: "CHECK",
            score: 10.0,
          },
          {
            id: uuidv4(),
            choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
            name: "Science",
            displayValue: "Science",
            choiceType: "CHECK",
            score: 10.0,
          },
          {
            id: uuidv4(),
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
          id: uuidv4(),
          choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
          name: "Mathematics",
          displayValue: "Mathematics",
          choiceType: "CHECK",
          score: 10.0,
        },
        {
          id: uuidv4(),
          choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
          name: "Science",
          displayValue: "Science",
          choiceType: "CHECK",
          score: 10.0,
        },
        {
          id: uuidv4(),
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
      id: uuidv4(),
      name: "Sub Category with only Questions",
      hasQuestions: true,
      hasSubCategories: false,
      intScore: null,
      percentScore: null,
      level: "Level 2",
      weightage: 15,
      questions: [
        {
          id: uuidv4(),
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
          id: uuidv4(),
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
          id: uuidv4(),
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
                id: uuidv4(),
                choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
                name: "Mathematics",
                displayValue: "Mathematics",
                choiceType: "CHECK",
                score: 10.0,
              },
              {
                id: uuidv4(),
                choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
                name: "Science",
                displayValue: "Science",
                choiceType: "CHECK",
                score: 10.0,
              },
              {
                id: uuidv4(),
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
              id: uuidv4(),
              choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
              name: "Mathematics",
              displayValue: "Mathematics",
              choiceType: "CHECK",
              score: 10.0,
            },
            {
              id: uuidv4(),
              choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
              name: "Science",
              displayValue: "Science",
              choiceType: "CHECK",
              score: 10.0,
            },
            {
              id: uuidv4(),
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
      id: uuidv4(),
      name: "Sub Category with Questions and Sub-Category",
      hasQuestions: true,
      hasSubCategories: true,
      intScore: null,
      percentScore: null,
      level: "Level 2",
      weightage: 20,
      questions: [
        {
          id: uuidv4(),
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
          id: uuidv4(),
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
          id: uuidv4(),
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
                id: uuidv4(),
                choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
                name: "Mathematics",
                displayValue: "Mathematics",
                choiceType: "CHECK",
                score: 10.0,
              },
              {
                id: uuidv4(),
                choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
                name: "Science",
                displayValue: "Science",
                choiceType: "CHECK",
                score: 10.0,
              },
              {
                id: uuidv4(),
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
              id: uuidv4(),
              choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
              name: "Mathematics",
              displayValue: "Mathematics",
              choiceType: "CHECK",
              score: 10.0,
            },
            {
              id: uuidv4(),
              choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
              name: "Science",
              displayValue: "Science",
              choiceType: "CHECK",
              score: 10.0,
            },
            {
              id: uuidv4(),
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
          id: uuidv4(),
          name: "Super Sub Category with only Questions",
          hasQuestions: true,
          hasSubCategories: false,
          intScore: null,
          percentScore: null,
          level: "Level 3",
          weightage: 15,
          questions: [
            {
              id: uuidv4(),
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
              id: uuidv4(),
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
              id: uuidv4(),
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
                    id: uuidv4(),
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
                    id: uuidv4(),
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
                    id: uuidv4(),
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
                  id: uuidv4(),
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
                  id: uuidv4(),
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
                  id: uuidv4(),
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
              questionText: "Pick your interest Topics",
            },
          ],
          subCategories: null,
        },
      ],
    },
  ],
};
export const UserContext = createContext();

class CatIn extends Component {
  state = {
    measureIn: "number",
    activeId: null,
    isActive: false,
    routView: "/clintside",
    theme: false,
  };
  componentDidMount() {
    const { history } = this.props;
    const which =
      history.location.pathname === "/default" ? "/clintside" : "/default";
    this.setState({ routView: which });
  }
  currentValue = (event) => {
    this.setState({ measureIn: event.target.value });
  };
  isClicking = (id) =>
    this.setState((prev) => ({ activeId: id, isActive: !prev.isActive }));

  addCategory = (name) => {
    const { setRendering, rendering } = this.props;
    const editCat = { ...sampleCategories, first: name };
    const getFromStore = JSON.parse(localStorage.getItem("jsonData"));

    getFromStore.categories.push(editCat);
    localStorage.setItem("jsonData", JSON.stringify(getFromStore));
    setRendering(!rendering);
    // window.location.reload(false);
  };
  render() {
    const { measureIn, routView, theme } = this.state;
    const { jsonDatas } = this.props;
    console.log(this.props);
    const namePre = routView === "/clintside" ? "clint view" : "default view";

    return (
      <UserContext.Provider value={theme}>
        <Suspense fallback={<div>loading....</div>}>
          <div className={theme ? "main-container-1" : "main-container-2"}>
            <div className="container-fluid ">
              <h1 className="faq-heading text-center">Q&As</h1>
              <a href={routView} className="preview">
                {namePre} <i class="fa-solid fa-up-right-from-square"></i>
              </a>
              <pre className="text-right">
                MEASURE TYPE :
                <select
                  className="measure-type"
                  value={measureIn}
                  onChange={this.currentValue}
                >
                  {jsonDatas.measureTypeList.map((each) => {
                    return (
                      <option
                        key={uuidv4()}
                        value={each === "NUMBER" ? "number" : "percent"}
                      >
                        {each}
                      </option>
                    );
                  })}
                </select>
              </pre>
              <nav className="d-flex align-items-center justify-content-between mb-1">
                <label className="switch">
                  <span className="sun">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <circle r="5" cy="12" cx="12"></circle>
                      <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                    </svg>
                  </span>
                  <span className="moon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                    </svg>
                  </span>
                  <input
                    type="checkbox"
                    className="input"
                    checked={theme}
                    onClick={(e) =>
                      this.setState((prev) => ({
                        theme: !prev.theme,
                      }))
                    }
                  />
                  <span className="slider"></span>
                </label>
                <CatPopup addCategory={this.addCategory} />
              </nav>

              <ul className="category-list">
                {jsonDatas.categories.map((each, index) => (
                  <CategoryList
                    key={each.id}
                    categoryDetail={each}
                    state={this.state}
                    currentId={index}
                    btnClicked={this.isClicking}
                  />
                ))}
              </ul>
            </div>
          </div>
        </Suspense>
      </UserContext.Provider>
    );
  }
}

export default withRouter(memo(CatIn));
