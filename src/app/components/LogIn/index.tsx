import React, { useState } from "react";

// style
import { LoginWrapper, LoginImg, LoginForm, AuthInput } from "./components";

// material-ui
import { Grid } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";

// components
import ButtonSubmint from "./ButtonSubmint";
import { signIn } from "../../services/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {   
    if (event.target.name === 'username') {
      setEmail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    }    
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();    
    signIn({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
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
          <ButtonSubmint />
        </LoginForm>
      </LoginWrapper>
    </React.Fragment>
  );
};

export default Login;
