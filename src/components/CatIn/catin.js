import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Suspense, createContext, memo } from "react";
import { v4 as uuidv4 } from "uuid";
import CategoryList from "../categoryList/category";
import { sampleCategories } from "../../utils/json_data";
import "./index.css";
import CatPopup from "./CatPopup";

export const UserContext = createContext();

class CatIn extends Component {
  state = {
    measureIn: "number",
    activeId: null,
    isActive: false,
    routView: "/clintside",
    theme: false,
    isChatOpen: false,
  };

  componentDidMount() {
    const { history } = this.props;
    const pathName =
      history.location.pathname === "/default" ? "/clintside" : "/default";
    this.setState({ routView: pathName });
  }
  currentValue = (event) => {
    this.setState({ measureIn: event.target.value });
  };
  isClicking = (id) =>
    this.setState((prev) => ({ activeId: id, isActive: !prev.isActive }));

  addCategory = (name, checkedDetails) => {
    const { setRendering, rendering } = this.props;

    const editCat = { ...sampleCategories, first: name, ...checkedDetails };
    const getFromStore = JSON.parse(localStorage.getItem("jsonData"));

    getFromStore.categories.push(editCat);
    localStorage.setItem("jsonData", JSON.stringify(getFromStore));
    setRendering(!rendering);
    // window.location.reload(false);
  };
  reRenderThisPages = () => {
    const { setRendering, rendering } = this.props;

    setRendering(!rendering);
    console.log("kumara rendered");
  };
  render() {
    const { measureIn, routView, theme } = this.state;
    const { jsonDatas, history } = this.props;

    const pathName = history.location.pathname;

    const namePre = routView === "/clintside" ? "clint view" : "default view";

    return (
      <UserContext.Provider value={theme}>
        <Suspense fallback={<div>loading....</div>}>
          <div className={theme ? "main-container-1" : "main-container-2"}>
            <button
              className="open-button"
              onClick={() => {
                this.setState((prev) => ({ isChatOpen: !prev.isChatOpen }));
                document.querySelector("gradio-app").classList.remove("dark");
              }}
            >
              Help
            </button>
            <div
              className={`form-popup ${!this.state.isChatOpen ? "d-none" : ""}`}
              id="myForm"
            >
              <button
                type="button"
                style={{ background: "#125398" }}
                className="btn btn-primary x-btn"
                onClick={() => {
                  this.setState((prev) => ({ isChatOpen: !prev.isChatOpen }));
                }}
              >
                X
              </button>
              <div className="gradio-container">
                <gradio-app src="https://kumaranjaisankar-personalgenerativealchatbot.hf.space"></gradio-app>
              </div>
            </div>
            <div className="container-fluid ">
              <h1 className="faq-heading text-center">Q&As</h1>
              <a href={routView} className="preview">
                {namePre} <i class="fa-solid fa-up-right-from-square"></i>
              </a>
              {pathName === "/default" && (
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
              )}
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
                {pathName === "/default" && (
                  <CatPopup addCategory={this.addCategory} />
                )}
              </nav>

              <ul className="category-list">
                {jsonDatas.categories.map((each, index) => (
                  <CategoryList
                    key={each.id}
                    categoryDetail={each}
                    reRenderThisPages={this.reRenderThisPages}
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
