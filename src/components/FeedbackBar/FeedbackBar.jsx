import React, { useEffect } from "react";
import "./FeedbackBar.css";

const FeedbackBar = ({ message, clearMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      clearMessage();
    }, 5000);

    return () => clearTimeout(timer);
  }, [message, clearMessage]);

  return message ? (
    <div className="feedback-bar">
      <span className="message-text">{message}</span>
      <button className="close-button" onClick={clearMessage}>
        <img src="./src/assets/closefeedbackbar.png" alt="Close" />
      </button>
    </div>
  ) : null;
};

export default FeedbackBar;
