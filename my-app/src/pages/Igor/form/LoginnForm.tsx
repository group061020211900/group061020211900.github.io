import { Button, ButtonToolbar, Form, Schema } from "rsuite";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Interface } from "readline";
const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  user_name: StringType().isRequired("This field is required."),
  user_email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
  age: NumberType("Please enter a valid number.")
    .range(18, 30, "Please enter a number from 18 to 30")
    .isRequired("This field is required."),
  password: StringType().isRequired("This field is required."),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, "The two passwords do not match")
    .isRequired("This field is required."),
});

interface Props {
  name: string;
  label: string;
  accepter?: any;
  type?: any;
  autoComplete?: any
  rest?: any
}

const TextField = forwardRef(
  ({ name, label, accepter, type, autoComplete, ...rest }: Props, ref) => {
    return (
      //@ts-ignore
      <Form.Group controlId={`${name}-4`} ref={ref}>
        <Form.ControlLabel>{label} </Form.ControlLabel>
        <Form.Control name={name} accepter={accepter} {...rest} />
      </Form.Group>
    );
  }
);

const LoginFrom = () => {
  const formRef:  React.ForwardedRef<unknown> = useRef();
  const [formError, setFormError] = useState({});
  const [formValue, setFormValue] = useState({
    user_name: "",
    user_email: "",
    age: "",
    password: "",
    verifyPassword: "",
  });

  useEffect(() => console.log(formValue), [formValue]);
  const handleSubmit = () => {
    // @ts-ignore
    if (!formRef?.current?.check()) {
      console.log("Form Error");
      return;
    }
    console.log(formValue, "Form Value");
  };

  // const handleCheckEmail = () => {
  //     formRef.current.checkForField('email', checkResult => {
  //         console.log(checkResult);
  //     });
  // };


    return (
    <Form
      style={{ backgroundColor: "red" }}
      // @ts-ignore
      ref={formRef}
      // @ts-ignore
      onChange={setFormValue}
      // onCheck={setFormError}
      formValue={formValue}
      model={model}
    >
      <TextField name="user_name" label="Username1111" />
      <TextField name="user_email" label="Email2222" />
      <TextField name="age" label="Age" />
      <TextField
        name="password"
        label="Password"
        type="password"
        autoComplete="off"
      />
      <TextField
        name="verifyPassword"
        label="Verify password"
        type="password"
        autoComplete="off"
      />

      <ButtonToolbar>
        <Button appearance="primary" onClick={handleSubmit}>
          Submit
        </Button>

        {/*<Button onClick={handleCheckEmail}>Check Email</Button>*/}
      </ButtonToolbar>
    </Form>
  );
};

export default LoginFrom;
