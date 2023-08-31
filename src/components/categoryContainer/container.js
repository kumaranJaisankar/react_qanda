import { v4 } from "uuid";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import AnsList from "../AnsList/ansList";
import "./index.css";
import CategoryList from "../categoryList/category";
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

const CategoryCont = (props) => {
  const [isRendering, setRendering] = useState(false);

  const { categoryDetail } = props;
  const {
    id,
    name,
    questions,
    subCategories,
    hasQuestions,
    hasSubCategories,
    weightage,
  } = categoryDetail;
  // default path
  const { pathname } = useLocation();
  const isDefaultPage = pathname === "/default";
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef = useRef();
  const cancelRefs = useRef();
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
  const seprateQuestion = (pk) => {
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

  return (
    <div className="border-style mt-2">
      <hr />
      <div className="pre-class d-flex flex-row justify-content-start flex-wrap align-items-start">
        <p className="c-name">
          <span className="pre-class"> Name :</span>{" "}
          <input
            type="text"
            style={{ width: `${(name.length + 1) * 8}px` }}
            value={name}
          />
        </p>

        <p className="c-name ml-5">
          <span className="pre-class"> weightage :</span>
          <input
            type="number"
            value={weightage}
            style={{ width: `${(weightage + "").length * 20}px` }}
          />
        </p>
        {/* <p className="c-name">
          <span className="pre-class"> Int Score :</span>
          <input type="number" className="w-25" placeholder="0" />
        </p>
        <p className="c-name lighter">
          <span className="pre-class"> Percent :</span>
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

              {/* <button className="close-open mr-5" type="button">
                <AiOutlinePlusCircle size={25} color="rgb(216, 150, 26)" />
              </button> */}
            </div>

            <ol className="ans-list">
              {seprateQuestion(id).map((each) => (
                <AnsList
                  key={v4()}
                  questionDetails={each}
                  setRendering={setRendering}
                  isRendering={isRendering}
                />
              ))}
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
                        Do you want to Add subCategories ?
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button colorScheme="blue" onClick={onClose} ml={3}>
                          ADD
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </>
            )}

            {/* <h6 className="mt-3 pre-class unactive font-weight-bold">
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

              {/* <button className="close-open mr-5" type="button">
                <AiOutlinePlusCircle size={25} color="rgb(216, 150, 26)" />
              </button> */}
            </div>

            <ul className="ans-list">
              {subCategories.map((each) => (
                <CategoryList key={v4()} categoryDetail={each} />
                // <li key={v4()}>{each.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryCont;
