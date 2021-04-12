import React from "react";
import useFetch from "./hook/usefetch";
import "./style.css";

const App = () => {
  const posts = useFetch(true);

  const showLoader = () => {
    return <h2>Loading...</h2>;
  };

  const showError = () => {
    retrun(<h2>{posts.errorMessage}</h2>);
  };

  return (
    <>
      <div className="container">
        {posts && posts.isLoading
          ? showLoader()
          : posts.errorMessage
          ? showError()
          : posts.data.map((data, index) => {
              return (
                <div className="card" key={index}>
                  <h4>{data.title}</h4>
                  <p>{data.body}</p>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default App;
