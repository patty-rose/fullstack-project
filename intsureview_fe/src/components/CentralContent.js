import React, { useState } from "react";
import InputField from "./InputField";

const CentralContent = () => {
  const [recipeName, setRecipeName] = useState("");
  return (
    <main data-testid="central-content">
      {/* 
      this will contain:
      -title
      -form
      -input for recipe name
      -select input for make again
      -text area for recipe
      -number input for rating
      -text area for notes
      -submit button
      */}
      <InputField
        label="Recipe Name"
        id="recipeName"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        required
      />
    </main>
  );
};

export default CentralContent;
