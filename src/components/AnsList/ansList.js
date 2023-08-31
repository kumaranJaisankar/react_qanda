import { v4 } from "uuid";
import { useState, useId, useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
//core

//icons
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import "./index.css";
import { UserContext } from "../CatIn/catin";
import RadioChoice from "./choices/radioChoice";
import CheckChoice from "./choices/checkChoice";
import IntAns from "./intAns";
import TextAns from "./textAns";

const AnsList = (props) => {
  const [render, setRender] = useState(false);
  const { questionDetails, setRendering, isRendering } = props;
  const { questionText, questionType, choices, questionTypeList, id } =
    questionDetails;
  const uniqId = useId();
  const theme = useContext(UserContext);
  const xMark = theme ? "white" : "#0909095c";
  //  path name
  const { pathname } = useLocation();
  const isDefaultPage = pathname === "/default";
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
        return <TextAns currentId={id} setRender={setRender} render={render} />;

      case "INTEGER":
        return <IntAns currentId={id} setRender={setRender} render={render} />;

      case "MULTICHECK":
        if (choices.length < 3) {
          const extraChoise = [...choices, { name: "Positive" }];
          const chois = extraChoise.map((each) => {
            return (
              <CheckChoice
                key={v4()}
                checkDetail={each}
                currentId={id}
                setRender={setRender}
                render={render}
              />
            );
          });
          return chois;
        } else {
          const cho = choices.map((each) => {
            return (
              <CheckChoice
                key={v4()}
                checkDetail={each}
                currentId={id}
                setRender={setRender}
                render={render}
              />
            );
          });

          return cho;
        }
      case "RADIO":
        if (choices.length > 2) {
          const extraChoise = [...choices];
          extraChoise.pop();
          const radioCho = extraChoise.map((each) => (
            <RadioChoice
              key={v4()}
              choiceDetail={each}
              currentId={id}
              setRender={setRender}
              render={render}
            />
          ));

          return radioCho;
        } else {
          const radioCho = choices.map((each) => (
            <RadioChoice
              key={v4()}
              currentId={id}
              choiceDetail={each}
              setRender={setRender}
              render={render}
            />
          ));

          return radioCho;
        }

      default:
        return "";
    }
  };
  const quesDel = isDelete ? "label-text" : "";
  const fontWe = isDelete ? "font-weight-bolder text-primary" : "";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const deleteQuestion = () => {
    const fromLocal = JSON.parse(localStorage.getItem("addQuest"));
    const filterQuestion = fromLocal.filter((each) => each.id !== id);
    localStorage.setItem("addQuest", JSON.stringify(filterQuestion));
    setRendering(!isRendering);

    onClose();
  };
  return (
    <>
      {" "}
      <li className="qus-list mt-1">
        {isDefaultPage && (
          <button
            title="remove"
            type="button"
            className={`ans-remove text-danger ${fontWe}`}
            onClick={() => setDeleteQues(!isDelete)}
          >
            -
          </button>
        )}
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
              <>
                <button
                  title="delete"
                  id={uniqId}
                  className="ans-btn"
                  onClick={onOpen}
                  type="button"
                >
                  <i class="fa-solid fa-check" style={{ color: "#45c322" }}></i>
                </button>
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Remove Question
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={deleteQuestion}
                          ml={3}
                        >
                          Remove
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </>
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
              {isDefaultPage && (
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
              )}
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
              {isDefaultPage && (
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
              )}
              <ul>{typeOfQus(ChangedType, choices)}</ul>
            </div>
          </div>
        )}
      </li>
    </>
  );
};
export default AnsList;
