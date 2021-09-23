import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { signup } from "../../models/Auth/action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Signup = ({ signup, isAuthenticated }) => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSignup = user => {
    signup(user);
    setUser({ ...user, email: "", username: "", password: "" });
  };

  if (isAuthenticated) {
    return <Redirect to="/map" />;
  }

  return (
    <div>
      <div>
        <h1>Register</h1>

        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          value={user.email}
          autoComplete="email"
          margin="normal"
          fullWidth
          variant="outlined"
          onChange={event => handleChange(event)}
        />

        <TextField
          id="outlined-email-input"
          label="Username"
          type="username"
          name="username"
          value={user.username}
          margin="normal"
          fullWidth
          variant="outlined"
          onChange={event => handleChange(event)}
        />

        <TextField
          id="outlined-adornment-password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          label="Password"
          margin="normal"
          name="password"
          value={user.password}
          fullWidth
          onChange={event => handleChange(event)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <Button
          variant="outlined"
          color="primary"
          onClick={() => onSignup(user)}
          disabled={
            user.username === "" || user.password === "" || user.email === ""
              ? true
              : false
          }
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);



