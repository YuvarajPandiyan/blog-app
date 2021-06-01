import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../actions/lgoin.js";
import "./LoginForm.css";

function LoginForm(props) {
  const { login } = props;

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function validateForm(value) {
    console.log(errors);
    console.log(value);
    login(value.userName, value.password).then((result) => {
      console.log("🚀 ~ file: LoginForm.js ~ line 27 ~ login ~ result", result);
      if (result.authenticated) {
        history.push("/");
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit(validateForm)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <FormControl id="username" isRequired>
        <FormLabel color="brand.100">User Name</FormLabel>
        <Input
          color="brand.100"
          placeholder="User Name"
          {...register("userName", { required: "User Name Required" })}
        />
        <FormErrorMessage>{errors.userName}</FormErrorMessage>
      </FormControl>

      <FormControl
        id="password"
        isRequired
        isInvalid={errors.password?.message}
      >
        <FormLabel color="brand.100">Password</FormLabel>
        <Input
          color="brand.100"
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Password Required",
            minLength: {
              value: 4,
              message: "Please Enter More then 2 character",
            },
          })}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
      <button type="submit" className="login-btn" id="login">
        Submit
      </button>
    </form>
  );
}

export default connect(null, { login })(LoginForm);
