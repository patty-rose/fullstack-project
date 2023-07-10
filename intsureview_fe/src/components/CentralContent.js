import React, { useState } from "react";
import InputField from "./InputField";
import FormTitle from "./FormTitle";
import TextAreaField from "./TextAreaField";
import SelectField from "./SelectField";
import Button from "./Button";

const CentralContent = () => {
  const [recipeName, setRecipeName] = useState("");
  const [makeAgain, setMakeAgain] = useState("");
  const [recipe, setRecipe] = useState("");
  const [rating, setRating] = useState("");
  const [notes, setNotes] = useState("");

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
        />

        <SelectField
          label="Would you make this again?"
          id="makeAgain"
          value={makeAgain}
          onChange={(e) => setMakeAgain(e.target.value)}
          required
          options={["Yes", "No"]}
        />

        <TextAreaField
          label="Recipe"
          id="recipe"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          required
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
        />

        <TextAreaField
          label="Notes"
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          required
        />
        <Button type="submit">Submit Test Recipe</Button>
      </form>
    </main>
  );
};

export default CentralContent;
