import React, { useState } from "react";
import "./formation-form.css";
// import axios from "axios";
import Input from "./Input";
import "ldrs/tailspin";

export default function FormationsForm() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (name) => {
    const value = formData[name]?.trim();
    if (!value) {
      setErrorMessage((prev) => ({
        ...prev,
        [name]: "Ce champ est obligatoire.",
      }));
    } else if (
      value?.length < 3 &&
      name !== "phoneNumber" &&
      name !== "email"
    ) {
      setErrorMessage((prev) => ({
        ...prev,
        [name]: "Ce champ doit contenir au moins 3 caractères.",
      }));
    } else if (name === "phoneNumber" && value?.length !== 10) {
      setErrorMessage((prev) => ({
        ...prev,
        [name]: "Le numéro de téléphone doit contenir 10 chiffres.",
      }));
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(formData[name])) {
      setErrorMessage((prev) => ({
        ...prev,
        [name]: "Email non valid.",
      }));
    }
  };

  const firstNameValidation = formData?.firstName?.trim()?.length > 2;
  const lastNameValidation = formData?.lastName?.trim()?.length > 2;
  const phoneNumberValidation = formData?.phoneNumber?.length === 10;
  const emailValidation =
    formData?.email && /^\S+@\S+\.\S+$/.test(formData?.email);
  const formationValidation = formData?.formation?.trim()?.length > 2;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (
        firstNameValidation &&
        lastNameValidation &&
        phoneNumberValidation &&
        emailValidation &&
        formationValidation
      ) {
        try {
          // await axios.post("/api/users", formData);
          setSubmitSuccess(true);
          setFormData({
            lastName: "",
            firstName: "",
            phoneNumber: "",
            email: "",
            formation: "",
            message: "",
          });
        } catch (error) {
          setSubmitSuccess(false);
          console.error("Error submitting form:", error);
        }
      }
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="formations-form" onSubmit={handleSubmit}>
      <div className="name">
        <Input
          name={"firstName"}
          label={"Nom"}
          type={"text"}
          formData={formData.firstName}
          handleChange={handleChange}
          validateForm={validateForm}
          isError={firstNameValidation}
          errorMessage={errorMessage.firstName}
        />
        <Input
          name={"lastName"}
          label={"Prenom"}
          type={"text"}
          formData={formData.lastName}
          handleChange={handleChange}
          validateForm={validateForm}
          isError={lastNameValidation}
          errorMessage={errorMessage.lastName}
        />
      </div>
      {/* ------------------------------------------- */}

      <Input
        name={"phoneNumber"}
        label={"Telephone"}
        type={"number"}
        formData={formData.phoneNumber}
        handleChange={handleChange}
        validateForm={validateForm}
        isError={phoneNumberValidation}
        errorMessage={errorMessage.phoneNumber}
      />
      <Input
        name={"email"}
        label={"Email"}
        type={"email"}
        formData={formData.email}
        handleChange={handleChange}
        validateForm={validateForm}
        isError={emailValidation}
        errorMessage={errorMessage.email}
      />
      <Input
        name={"formation"}
        label={"Formation"}
        type={"text"}
        formData={formData.formation}
        handleChange={handleChange}
        validateForm={validateForm}
        isError={formationValidation}
        errorMessage={errorMessage.formation}
      />
      <div className="input-content">
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      {submitSuccess ? (
        <p className="submit-success">Merci pour votre inscription!</p>
      ) : isSubmitting ? (
        <div className="submit">
          <div className="spinner"></div>
        </div>
      ) : (
        <input className="submit" type="submit" value={"Envoyer"} />
      )}
    </form>
  );
}
