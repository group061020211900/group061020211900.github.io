import { forwardRef, useRef, useState } from "react";
import { Form, Schema, Button, ButtonToolbar } from "rsuite";

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
  age: NumberType("Please enter a valid number.").range(
    18,
    30,
    "Please enter a number from 18 to 30"
  ),
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

const TextField = forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const FormControl = () => {
  const formRef = useRef();
  const [formError, setFormError] = useState({});
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    verifyPassword: "",
  });

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      return;
    }
    console.log(formValue, "Form Value");
  };

  const handleCheckEmail = () => {
    formRef.current.checkForField("email", (checkResult) => {
      console.log(checkResult);
    });
  };

  return (
    <Form
      className="formstyle"
      ref={formRef}
      onChange={setFormValue}
      onCheck={setFormError}
      formValue={formValue}
      model={model}
    >
      <TextField name="name" label="Username" />
      <TextField name="email" label="Email" />
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

        <Button onClick={handleCheckEmail}>Check Email</Button>
      </ButtonToolbar>
    </Form>
  );
};
export default FormControl;
