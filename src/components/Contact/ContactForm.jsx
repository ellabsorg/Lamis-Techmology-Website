import React, { useState } from "react";
import "../Shared/Form/form.css";
import Input from "../Shared/Form/Input";
import TextArea from "../Shared/Form/TextArea";
// import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);

  // ------------REGEX------------------
  const lastNameRegex = /^[a-zA-Z\-'. ]{3,15}$/;
  const lastNameValidation =
    !!formData.lastName?.trim().length &&
    lastNameRegex.test(formData?.lastName);
  // ------------------------------
  const phoneNumberRegex = /^(06|07|05)\d{8}$/;
  const phoneNumberValidation = phoneNumberRegex.test(formData?.phoneNumber);
  // ------------------------------
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailValidation = emailRegex.test(formData?.email);
  // ------------------------------
  const formationRegex = /^[a-zA-Z\-'. ]{3,15}$/;
  const formationValidation =
    !!formData.formation?.trim().length &&
    formationRegex.test(formData?.formation);
  // ------------------------------
  const messageRegex = /^[a-zA-Z0-9.\-'. ]{3,150}$/;
  const messageValidation =
    !!formData.message?.trim().length && messageRegex.test(formData?.message);
  // ------------------------------

  const validateForm = (name) => {
    const value = formData[name]?.trim();
    let error = null;
    if (!value) {
      error = "Ce champ est obligatoire.";
    } else if (value?.length < 4 && (name !== "phoneNumber" || "email")) {
      error = "Ce champ doit contenir au moins 3 caractères.";
    } else if (name === "phoneNumber" && !phoneNumberValidation) {
      error = "Le numéro de téléphone doit contenir 10 chiffres.";
    } else if (name === "email" && !emailValidation) {
      error = "Email non valide.";
    }
    setErrorMessage({ ...errorMessage, [name]: error });
  };

  function submitting(ms) {
    return new Promise((resolve) =>
      setTimeout(() => {
        if (
          lastNameValidation &&
          // phoneNumberValidation &&
          emailValidation &&
          formationValidation &&
          messageValidation
        ) {
          setIsSubmitting(false);
          try {
            // await axios.post("/api/users", formData);
            setSubmitSuccess(true);
            setSubmitClicked(false);
            resolve();
          } catch (error) {
            setSubmitSuccess(false);
            console.error("Error submitting form:", error);
          }
        } else {
          setIsSubmitting(false);
        }
      }, ms)
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitClicked(true);
    await submitting(500);
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        lastName: "",
        phoneNumber: "",
        email: "",
        formation: "",
        message: "",
      });
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="name">
        <Input
          name={"lastName"}
          label={"Nom"}
          type={"text"}
          required={true}
          value={formData?.lastName}
          handleChange={handleChange}
          validateForm={validateForm}
          isError={lastNameValidation}
          errorMessage={errorMessage?.lastName}
        />
        <Input
          name={"phoneNumber"}
          label={"Telephone"}
          type={"text"}
          required={false}
          value={formData?.phoneNumber}
          handleChange={handleChange}
          validateForm={validateForm}
          isError={phoneNumberValidation}
          errorMessage={errorMessage?.phoneNumber}
        />
      </div>

      <Input
        name={"email"}
        label={"Email"}
        type={"email"}
        required={true}
        value={formData?.email}
        handleChange={handleChange}
        validateForm={validateForm}
        isError={emailValidation}
        errorMessage={errorMessage?.email}
      />
      <Input
        name={"formation"}
        label={"Formation"}
        type={"text"}
        required={true}
        value={formData?.formation}
        handleChange={handleChange}
        validateForm={validateForm}
        isError={formationValidation}
        errorMessage={errorMessage?.formation}
      />
      <TextArea
        name={"message"}
        label={"Message"}
        required={true}
        value={formData?.message}
        handleChange={handleChange}
        validateForm={validateForm}
        isError={messageValidation}
        errorMessage={errorMessage?.message}
      />

      {submitSuccess ? (
        <p className="submit-success">Merci de nous avoir contactés!</p>
      ) : isSubmitting ? (
        <div className="submit">
          <div className="spinner" />
        </div>
      ) : (
        <input
          className="submit"
          type="submit"
          value="Envoyer"
          disabled={submitSuccess}
        />
      )}

      {!submitSuccess && submitClicked && (
        <p className="submit-error">
          Un ou plusieurs champs contiennent des erreurs. Veuillez vérifier et
          réessayer à nouveau.
        </p>
      )}
    </form>
  );
}
