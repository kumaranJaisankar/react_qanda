import { useState } from "react";
const IntAns = (props) => {
  const { currentId } = props;
  const fromlocalStoreQuestions = JSON.parse(localStorage.getItem("addQuest"));
  const firstFilter = fromlocalStoreQuestions.filter(
    (each) => each.id === currentId
  );
  const baforeToState =
    firstFilter[0].answer.textAnswer === null
      ? ""
      : firstFilter[0].answer.textAnswer;
  const [intVal, setinval] = useState(baforeToState);
  const onIntVal = (e) => {
    setinval(e.target.value);
    const forEachEle = fromlocalStoreQuestions.map((each) => {
      if (each.id === currentId) {
        return {
          ...each,
          answer: { ...each.answer, textAnswer: e.target.value },
        };
      } else {
        return each;
      }
    });
    localStorage.setItem("addQuest", JSON.stringify(forEachEle));
    // firstFilter[0].answer.textAnswer = Number(e.target.value);
    // const unFilter = fromlocalStoreQuestions.filter(
    //   (each) => each.id !== currentId
    // );
    // const extraVal = [...firstFilter, ...unFilter];
    // extraVal.sort();
    // localStorage.setItem("addQuest", JSON.stringify(extraVal));
  };
  return (
    <>
      <span className="ans">Ans:</span>{" "}
      <input
        value={intVal}
        type="number"
        className="wid"
        placeholder=""
        onChange={onIntVal}
      />
    </>
  );
};

export default IntAns;

//  const fromlocalStoreQuestions = JSON.parse(
//           localStorage.getItem("addQuest")
//         );
//         const firstFilter = fromlocalStoreQuestions.filter(
//           (each) => each.id === id
//         );
//         const [forvalue, setvalue] = useState(firstFilter[0].answer.intAnswer);
//         const onintText = (e) => {
//           firstFilter[0].answer.intAnswer = e.target.value;
//           const unFilter = fromlocalStoreQuestions.filter(
//             (each) => each.id !== id
//           );
//           localStorage.setItem(
//             "addQuest",
//             JSON.stringify([...firstFilter, ...unFilter])
//           );
//         };

//         return (
//           <>
//             {" "}
//             <span className="ans">Ans:</span>{" "}
//             <input
//               value={firstFilter[0].answer.intAnswer}
//               type="number"
//               className="wid"
//               placeholder=""
//               onChange={onintText}
//             />
//           </>
//         );
