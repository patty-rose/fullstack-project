import validateForm from "../../components/validateForm";

describe("validateForm", () => {
  test("returns empty object for valid form data", () => {
    const formData = {
      recipeName: "Test Recipe",
      makeAgain: "Yes",
      recipe: "test recipe content",
      rating: "7",
      notes: "test content",
    };

    const errors = validateForm(formData);

    expect(errors).toEqual({});
  });

  test("returns errors for empty form data", () => {
    const formData = {
      recipeName: "",
      makeAgain: "",
      recipe: "",
      rating: "",
      notes: "",
    };

    const errors = validateForm(formData);

    expect(errors).toEqual({
      recipeName: "Recipe Name is required",
      makeAgain: "Selection required",
      recipe: "Recipe is required",
      rating: "Rating is required",
      notes: "Notes is required",
    });
  });

  test("returns errors for invalid form data", () => {
    const formData = {
      recipeName: "test",
      makeAgain: "test invalid answer",
      recipe: "test",
      rating: "20",
      notes: "test",
    };

    const errors = validateForm(formData);

    expect(errors).toEqual({
      makeAgain: "Please select either 'Yes' or 'No'",
      rating: "Rating should be between 0 and 10",
    });
  });
});
