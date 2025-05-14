import React from "react";
import "./CustomAlert.css"; // Import CSS cho alert

const CustomAlert = ({ message, type, onClose }) => {
  return (
    <div className={`custom-alert custom-alert-${type}`}>
      <span>{message}</span>
      <button className="close-alert" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default CustomAlert;