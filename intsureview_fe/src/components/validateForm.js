const validateForm = (formData) => {
  const errors = {};

  if (!formData.recipeName) {
    errors.recipeName = "Recipe Name is required";
  }

  if (!formData.makeAgain) {
    errors.makeAgain = "Selection required";
  } else if (formData.makeAgain !== "Yes" && formData.makeAgain !== "No"){
    errors.makeAgain = "Please select either 'Yes' or 'No'";
  }

  if (!formData.recipe) {
    errors.recipe = "Recipe is required";
  }

  if (formData.rating === "") {
    errors.rating = "Rating is required";
  } else if (formData.rating < 0 || formData.rating > 10) {
    errors.rating = "Rating should be between 0 and 10";
  }

  if (!formData.notes) {
    errors.notes = "Notes is required";
  }

  return errors;
};

export default validateForm;
