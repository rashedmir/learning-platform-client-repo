import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import './Blog.css'

const Blog = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("question.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <div className="background-blog">
      <Header></Header>
      <h1 className="text-5xl font-bold text-gray-700 text-center my-10 animate__animated animate__zoomIn">Question & Answer</h1>
      {questions.map((question) => (
        <Answer ques={question.ques} ans={question.ans} index={question.index}></Answer>
      ))}
    </div>
  );
};

function Answer(props) {
  return (
    <div className="text-center my-6 mx-16 md:mx-36 p-10 rounded-lg shadow-xl shadow-gray-500 animate__animated animate__zoomIn">
      <p className="text-2xl font-bold text-slate-600">Q.{props.index}. {props.ques}</p>
      <p className="text-xl font-medium p-5 text-slate-500 text-justify"><span className="font-extrabold">Answer:</span> {props.ans}</p>
    </div>
  );
}

export default Blog;
