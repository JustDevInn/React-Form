import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
   return (
      firstName.trim() !== "" &&
      email.trim() !== "" &&
      password.length >= 8 &&
      role &&
      validateEmail
    );
  };

  const clearForm = () => {
      setFirstName = "",
      setLastName = "",
      setEmail = "",
      setPassword = ""
  };

  const handleSubmit = () => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              id='name'
	            type="text"
	            value={firstName}
              required
	            onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              id='lastname'
	            type="text"
              value={lastName}
	            onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              id='email'
	            type="text"
	            value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              placeholder=""
              id='password'
	            type="password"
              value={password}
              required
	            onChange={(e) => setPassword(e.target.value)} />
              {!password.isTouched && password.length < 8 && <PasswordErrorMessage />}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role" required>Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
