import React, { useState } from "react";
import InputField from "./InputField";
import FormTitle from "./FormTitle";
import TextAreaField from "./TextAreaField";
import SelectField from "./SelectField";
import Button from "./Button";
import validateForm from "./validateForm";
import SuccessOrFailure from "./SuccessOrFailure";

const CentralContent = () => {
  const [recipeName, setRecipeName] = useState("");
  const [makeAgain, setMakeAgain] = useState("");
  const [recipe, setRecipe] = useState("");
  const [rating, setRating] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      recipeName,
      makeAgain,
      recipe,
      rating,
      notes,
    };
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      const formSubmitData = {
        recipe_name: recipeName,
        make_again: makeAgain,
        recipe: recipe,
        rating: rating,
        notes: notes,
      };
      fetch("http://localhost:8000/test-recipes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formSubmitData),
      })
        .then((response) => {
          if (response.ok) {
            setSubmissionStatus("success");
            setRecipeName("");
            setMakeAgain("");
            setRecipe("");
            setRating("");
            setNotes("");
            setErrors({});
          } else {
            setSubmissionStatus("failure");
            return response.json();
          }
        })
        .catch((error) => {
          console.error(error);
          setErrors((prevErrors) => ({
            ...prevErrors,
            general: `${error}`,
          }));
        });
    } else {
      setErrors(validationErrors);
      setSubmissionStatus("failure");
    }
  };

  return (
    <main data-testid="central-content">
      <FormTitle text="Add a Test Recipe:" />
      <form>
        <InputField
          label="Recipe Name"
          id="recipeName"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          required
          error={errors.recipeName}
        />

        <SelectField
          label="Would you make this again?"
          id="makeAgain"
          value={makeAgain}
          onChange={(e) => setMakeAgain(e.target.value)}
          required
          options={["Yes", "No"]}
          error={errors.makeAgain}
        />

        <TextAreaField
          label="Recipe"
          id="recipe"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          required
          error={errors.recipe}
        />

        <InputField
          label="Rating 0-10"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
          type="number"
          min={0}
          max={10}
          error={errors.rating}
        />

        <TextAreaField
          label="Notes"
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          required
          error={errors.notes}
        />
        <Button type="submit" onClick={handleSubmit}>
          Submit Test Recipe
        </Button>

        {submissionStatus === "success" && (
          <SuccessOrFailure
            type="success"
            message="Form submitted successfully! You may submit another."
          />
        )}

        {submissionStatus === "failure" && (
          <SuccessOrFailure type="failure" message={`Form submission failed. ${errors.general || ""}`} />
        )}
      </form>
    </main>
  );
};

export default CentralContent;
