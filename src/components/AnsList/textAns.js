import { useState } from "react";
const TextAns = (props) => {
  const { currentId } = props;
  const fromlocalStoreQuestions = JSON.parse(localStorage.getItem("addQuest"));
  const firstFilter = fromlocalStoreQuestions.filter(
    (each) => each.id === currentId
  );
  const baforeToState =
    firstFilter[0].answer.textAnswer !== "Rohit Kumar"
      ? firstFilter[0].answer.textAnswer
      : "";
  const [textVal, setinval] = useState(baforeToState);
  const onTextVal = (e) => {
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

    // const unFilter = fromlocalStoreQuestions.filter(
    //   (each) => each.id !== currentId
    // );
    // firstFilter[0].answer.textAnswer = e.target.value;

    // const extraVal = [...firstFilter, ...unFilter];
    // extraVal.sort();
    // console.log(extraVal, "is order");
    localStorage.setItem("addQuest", JSON.stringify(forEachEle));
  };
  return (
    <>
      <span className="ans">Ans:</span>{" "}
      <input
        value={textVal}
        type="text"
        placeholder="Enter Your Ans.."
        onChange={onTextVal}
      />
    </>
  );
};

export default TextAns;
