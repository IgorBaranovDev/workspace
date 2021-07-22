import React, { useState } from "react";
import { connect } from 'react-redux';

// style
import { LoginWrapper, LoginImg, LoginForm, AuthInput } from "./components";

// material-ui
import { Checkbox, FormControlLabel, Grid } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";

// components
import ButtonSubmint from "./ButtonSubmint";

// actions
import { logIn, signUp, logOut } from "../../redux/actions";

// types
import { ILogin } from './types';

const mapStateToProps = ( state: any ) => ({
   user: 'user'// selector userSelector(state);
});

const mapDispatchToProps = {
  logIn,
  signUp,
  logOut 
};

export const Login: React.FC<ILogin> = ({user, logIn, signUp}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistration, setIsRegistration] = useState(false);

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "username") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const handlerChekbox = (event: React.ChangeEvent<HTMLInputElement>) => {   
    setIsRegistration((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const authFunc = isRegistration ? logIn : signUp;
    authFunc({ email, password });
    setEmail("");
    setPassword("");
  };

  return user ? <span>`You are already signed in as ${user}`</span> : (
    <React.Fragment>      
      <LoginWrapper elevation={10}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <LoginImg>
            <LockOpenIcon fontSize="large" />
          </LoginImg>
        </Grid>
        <LoginForm noValidate onSubmit={handleSubmit}>
          <AuthInput
            type="email"
            name="username"
            label="Email"
            placeholder="Enter email"
            margin="normal"
            value={email}
            onChange={handlerChange}
            fullWidth
            variant="outlined"
            required
          />
          <AuthInput
            type="password"
            name="password"
            label="Password"
            placeholder="Enter password"
            margin="normal"
            value={password}
            onChange={handlerChange}
            fullWidth
            variant="outlined"
            required
          />
          <FormControlLabel
            control={
              <Checkbox
              color="primary"
                checked={isRegistration}
                onChange={handlerChekbox}
                name="newUser"                
              />
            }
            label="New user"
          />
          <ButtonSubmint />
        </LoginForm>
      </LoginWrapper>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
