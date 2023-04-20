import { v4 } from "uuid";

import "./index.css";
import AnsList from "../AnsList/ansList";
import "./index.css";
import CategoryList from "../categoryList/category";

const CategoryCont = (props) => {
  const { categoryDetail } = props;
  const {
    name,
    questions,
    subCategories,
    hasQuestions,
    hasSubCategories,
    weightage,
  } = categoryDetail;
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
              {questions.map((each) => (
                <AnsList key={v4()} questionDetails={each} />
              ))}
            </ol>

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
