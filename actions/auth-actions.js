export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }
  if (password.trim() < 8) {
    errors.password = "Password should be at least 8 characters.";
  }

  console.log(formData);
  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }
}
