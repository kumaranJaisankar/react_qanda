import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";

import "./App.css";
import { storeJsonDatas } from "./utils/json_data";
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

  useEffect(() => {
    document.body.classList.remove("dark");
  }, []);

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
