import { forwardRef, useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Schema, Button, ButtonToolbar } from "rsuite";
import { actions } from "../../../redux/reducers/VitrikushReducer";
import { RouteConst } from "../../../common/RouteConst";
import { RoutVitrikushIhorHome } from "../../../common/UsersRout/RoutVitrikushIhorHome";





const { StringType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
  password: StringType().isRequired("This field is required."),
  verifyPassword: StringType()
    .addRule((value, data) => {
      if (value !== data.password) {
        return false;
      }
      return true;
    }, "The two passwords do not match")
    .isRequired("This field is required."),
});

const TextField = forwardRef((props, ref) => {
  // @ts-ignore
  const { name, label, accepter, ...rest } = props;
  return (// @ts-ignore
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

export const VitrikushIhorForm = () => {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formRef = useRef()as React.MutableRefObject<HTMLInputElement>;

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const handleSubmit = () => {// @ts-ignore
    if (!formRef.current.check()) {
      return;
    }
    dispatch(actions.setLogin(formValue));
    setIsAuth(true);
  };

  useEffect(() => {
    if (isAuth) {
      navigate(RouteConst.Vitrikush_Ihor_Registered);
    }
  });

  return (
    <div>
      <div>
        <RoutVitrikushIhorHome />
      </div>
      <h2>Vitrikush Ihor Form</h2>
      <Form
      // @ts-ignore
        ref={formRef}
          // @ts-ignore
        onChange={setFormValue}
        formValue={formValue}
        model={model}
      >
        <TextField
          // @ts-ignore
          name="name" label="Name" placeholder="Enter your name" />
        <TextField
          // @ts-ignore
          name="email" label="Email" placeholder="Enter your email" />
        <TextField
          // @ts-ignore
          name="password"
          label="Password"
          type="password"
          autoComplete="off"
          placeholder="Enter your password"
        />
        <TextField
          // @ts-ignore
          name="verifyPassword"
          label="Verify password"
          type="password"
          autoComplete="off"
          placeholder="Enter your password again"
        />
        <ButtonToolbar>
          <Button appearance="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </ButtonToolbar>
        <Form.ErrorMessage></Form.ErrorMessage>
      </Form>
    </div>
  );
};
