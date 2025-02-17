import React from "react";
import { Link } from "react-router-dom";
import "../CSS/HelpModal.css";
// import translation from "../translation";

const AleartModal = ({ isOpen, onClose, countryId, caseFile }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="alert-modal-content">
        <h2>Read the Case File?</h2>
        <ul>
          <li>Have you reviewed the details of the case?</li>
          <li>
            You won't be able to go back once you start collecting evidence.
          </li>
        </ul>
        <div className="evidence-button-container">
          <Link
            to={`/countries/${countryId}/case_files/${caseFile.article_id}/questions`}
            className="questions-link"
          >
            <button className="questions-button">Collect Evidence</button>
          </Link>
        </div>
        <div className="alert-close-container">
          <button onClick={onClose} className="close-button-aleart">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AleartModal;
