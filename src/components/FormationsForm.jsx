import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
export default function FormationsForm() {
  const [submit, setSubmit] = useState(false);

  const formInputs = [
    {
      label: "Nom",
      name: "lastName",
      type: "text",
    },
    {
      label: "Prenom",
      name: "firstName",
      type: "text",
    },
    {
      label: "Téléphone ",
      name: "phoneNumber",
      type: "number",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      label: "Formation souhaitée",
      name: "formation",
      type: "text",
    },
  ];

  const [user, setUser] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    formation: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);

  function onChangeInputs(e) {
    const name = e.target.name;
    const value = e.target.value;
    !!value.length && setErrorMessage(false);

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
  }

  return (
    <form className="formations-form">
      {formInputs.map((input, index) => (
        <div className="input-content" key={index}>
          <div className="label-container">
            <label>{input.label}</label>
            <div className="label-required">*</div>
          </div>
          <div className="input-container">
            <input
              name={input.name}
              type={input.type}
              onChange={onChangeInputs}
              value={user[input.name]}
              required
              onFocus={() =>
                setErrorMessage({ ...errorMessage, [index]: false })
              }
              onBlur={() =>
                user[input.name]?.length === 0 &&
                setErrorMessage({ ...errorMessage, [index]: true })
              }
            />
            <div className="status">
              {errorMessage[index] ? (
                <FontAwesomeIcon
                  icon={faExclamation}
                  size="xl"
                  style={{ color: "red" }}
                />
              ) : (
                user[input.name]?.length > 2 && (
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="xl"
                    style={{ color: "green" }}
                  />
                )
              )}
            </div>
          </div>
          {errorMessage[index] && (
            <p style={{ color: "red" }}>Ce champ est obligatoire.</p>
          )}
        </div>
      ))}
      <div className="input-content">
        <label>Message</label>
        <textarea></textarea>
      </div>

      <button className="submit" type="submit" onClick={handleSubmit}>
        Envoyer
      </button>
    </form>
  );
}
