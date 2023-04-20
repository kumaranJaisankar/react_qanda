import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

import "./App.css";
// import CatIn from "./components/CatIn/catin";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
const CatIn = lazy(() => import("./components/CatIn/catin"));

const jsonDatasDummy = {
  measureTypeList: ["NUMBER", "PERCENT"],
  measureType: "NUMBER",
  categories: [
    {
      name: "Base Line, questions only",
      hasQuestions: null,
      hasSubCategories: null,
      intScore: null,
      percentScore: null,
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
                choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
                name: "Mathematics",
                displayValue: "Mathematics",
                choiceType: "CHECK",
                score: 10.0,
              },
              {
                choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
                name: "Science",
                displayValue: "Science",
                choiceType: "CHECK",
                score: 10.0,
              },
              {
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
              choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
              name: "Mathematics",
              displayValue: "Mathematics",
              choiceType: "CHECK",
              score: 10.0,
            },
            {
              choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
              name: "Science",
              displayValue: "Science",
              choiceType: "CHECK",
              score: 10.0,
            },
            {
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
      name: "Base Line, No Questions",
      hasQuestions: null,
      hasSubCategories: null,
      intScore: null,
      percentScore: null,
      questions: null,
      subCategories: [
        {
          name: "Sub Category with only Questions",
          hasQuestions: null,
          hasSubCategories: null,
          intScore: null,
          percentScore: null,
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
        {
          name: "Sub Category with Questions and Sub-Category",
          hasQuestions: null,
          hasSubCategories: null,
          intScore: null,
          percentScore: null,
          questions: [
            {
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
          subCategories: [
            {
              name: "Sub Category with only Questions",
              hasQuestions: null,
              hasSubCategories: null,
              intScore: null,
              percentScore: null,
              questions: [
                {
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
    },
  ],
};
const storeJsonDatas = {
  measureTypeList: ["NUMBER", "PERCENT"],
  measureType: "NUMBER",
  categories: [
    {
      name: "Base Line, Questions only",
      hasQuestions: true,
      hasSubCategories: false,
      intScore: null,
      percentScore: null,
      level: "Level 1",
      weightage: 30,
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
          questionType: "RADIO",
          defaultAnswer: null,
          answer: {
            textAnswer: "Rohit Kumar",
            intAnswer: null,
            floatAnswer: null,
            selectedChoices: null,
            evalScore: null,
          },
          choices: [
            {
              id: uuidv4(),
              choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
              name: "Positive",
              displayValue: "Positive?",
              choiceType: "RADIO",
              score: 10.0,
            },
            {
              id: uuidv4(),
              choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
              name: "Negative",
              displayValue: "Negative?",
              choiceType: "RADIO",
              score: -10.0,
            },
          ],
          questionText: "Would you like to choose Positive or Negative",
          questionId: "QID1001",
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
      name: "Base Line, With Only SubCategories",
      hasQuestions: false,
      hasSubCategories: true,
      intScore: null,
      percentScore: null,
      questions: null,
      level: "Level 1",
      weightage: 30,
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
        {
          id: uuidv4(),
          name: "Sub Category with Questions and Sub-Category",
          hasQuestions: true,
          hasSubCategories: true,
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
          subCategories: [
            {
              id: uuidv4(),
              name: "Super Sub Category with only Questions",
              hasQuestions: true,
              hasSubCategories: false,
              intScore: null,
              percentScore: null,
              level: "Level 3",
              weightage: 10,
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
    },
    {
      name: "Base Line, Questions and SubCategories",
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
    },
  ],
};
storeJsonDatas.categories[0].first = "Category - 1";
storeJsonDatas.categories[1].first = "Category - 2";
storeJsonDatas.categories[2].first = "Category - 3";
storeJsonDatas.categories.map((each) => (each.id = uuidv4()));

console.log(storeJsonDatas);
if (localStorage.getItem("jsonData") === null) {
  localStorage.setItem("jsonData", JSON.stringify(storeJsonDatas));
}

// class App extends Component {
//   state = { measureIn: "number", activeId: null, isActive: false };
//   currentValue = (event) => console.log(event.target.value);
//   isClicking = (id) =>
//     this.setState((prev) => ({ activeId: id, isActive: !prev.isActive }));
//   render() {
//     const { measureIn, activeId } = this.state;
//     return (
//       <div className="main-container">
//         <div className="container bg-white rounded-lg shadow-lg">
//           <h1 className="faq-heading text-center">Q&As</h1>
//           <pre className="text-right">
//             MEASURE TYPE :
//             <select
//               className="measure-type"
//               value={measureIn}
//               onChange={this.currentValue}
//             >
//               {jsonDatas.measureTypeList.map((each) => {
//                 return (
//                   <option
//                     key={uuidv4()}
//                     value={each === "NUMBER" ? "number" : "percent"}
//                   >
//                     {each}
//                   </option>
//                 );
//               })}
//             </select>
//           </pre>
//           <ul className="category-list">
//             {jsonDatas.categories.map((each) => (
//               <CategoryList
//                 key={each.id}
//                 categoryDetail={each}
//                 state={this.state}
//                 activeId={activeId}
//                 btnClicked={this.isClicking}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
const App = () => {
  const [rendering, setRendering] = useState(false);
  const jsonDatas = JSON.parse(localStorage.getItem("jsonData"));
  console.log(jsonDatas);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/default"
            component={() => (
              <Suspense
                fallback={
                  <div className="d-flex align-items-center loader justify-content-center">
                    <h1>Loading.....</h1>
                  </div>
                }
              >
                <CatIn
                  jsonDatas={jsonDatas}
                  setRendering={setRendering}
                  rendering={rendering}
                />
              </Suspense>
            )}
          />
          <Route
            exact
            path="/clintside"
            component={() => (
              <Suspense
                fallback={
                  <div className="d-flex align-items-center loader justify-content-center">
                    <h1>Loading.....</h1>
                  </div>
                }
              >
                <CatIn jsonDatas={jsonDatas} />
              </Suspense>
            )}
          />
          <Redirect replace to="/default" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
