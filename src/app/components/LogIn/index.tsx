import React from "react";

// style
import { LoginWrapper, LoginImg, LoginForm } from "./components";

// material-ui
import { Grid } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";

// components
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import ButtonSubmint from "./ButtonSubmint";

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <InputEmail />
          <InputPassword />
          <ButtonSubmint />
        </LoginForm>
      </LoginWrapper>
    </React.Fragment>
  );
};

export default Login;
