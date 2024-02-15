import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";

function TextArea({
  name,
  label,
  required,
  value,
  handleChange,
  validateForm,
  isError,
  errorMessage,
}) {
  return (
    <div className="textArea-content">
      <div className="label-container">
        <label>{label}</label>
        {required && <div className="label-required">*</div>}
      </div>
      <div className="textarea-container">
        <textarea
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
          onBlur={() => validateForm(name)}
        />
        <div className="status">
          {isError ? (
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="xl"
              style={{ color: "green" }}
            />
          ) : (
            value?.trim() && (
              <FontAwesomeIcon
                icon={faExclamation}
                size="xl"
                style={{ color: "red" }}
              />
            )
          )}
        </div>
      </div>
      {!isError && required && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default TextArea;
