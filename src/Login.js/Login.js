import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { login } from "../../models/Auth/action"

const Login = ({ login }) => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onLogin = user => {
    login(user);
    setUser({ ...user, email: "", username: "", password: "" });
  };

  return (
    <div>
      <div>
        <h1>Login</h1>

        <TextField
          id="outlined-email-input"
          label="Username"
          type="username"
          name="username"
          value={user.username}
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={e => handleChange(e)}
        />

        <TextField
          id="outlined-adornment-password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          label="Password"
          name="password"
          margin="normal"
          value={user.password}
          fullWidth
          onChange={e => handleChange(e)}
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
          disabled={user.username === "" || user.password === "" ? true : false}
          onClick={() => onLogin(user)}
        >
          Login
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
  { login }
)(Login);