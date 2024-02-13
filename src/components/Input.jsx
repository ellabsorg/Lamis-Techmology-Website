import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";

function Input({
  name,
  label,
  type,
  formData,
  handleChange,
  validateForm,
  isError,
  errorMessage,
}) {
  return (
    <div className="input-content">
      <div className="label-container">
        <label>{label}</label>
        <div className="label-required">*</div>
      </div>
      <div className="input-container">
        <input
          name={name}
          type={type}
          value={formData}
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
            formData?.trim() && (
              <FontAwesomeIcon
                icon={faExclamation}
                size="xl"
                style={{ color: "red" }}
              />
            )
          )}
        </div>
      </div>
      {!isError && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Input;
