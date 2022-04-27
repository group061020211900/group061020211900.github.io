import React, { useState, useEffect } from "react";
import 'rsuite/dist/rsuite.min.css';
import { Form, Button, ButtonToolbar, Input } from 'rsuite';
import { RouteConst } from "../../../common/RouteConst";
import { Link, useNavigate } from "react-router-dom";
import s from "./AndrianaForm.module.css"


const AndrianaForm = () => {
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: "",
        textarea: ""

    });

    useEffect(() => {
        console.log(formValue)
    }, [formValue]);

    const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);
    return (
        <div>
            <h1>Andriana Mykolaievych</h1>
            <Form>
                <Form.Group controlId="name">
                    <Form.ControlLabel>Username</Form.ControlLabel>
                    <Form.Control
                        onChange={(e) => setFormValue({
                            ...formValue,
                            name: e
                        })}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.ControlLabel>Email</Form.ControlLabel>
                    <Form.Control 
                    type="email"
                    onChange={(e) => setFormValue({
                        ...formValue,
                        email: e
                    })}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.ControlLabel>Password</Form.ControlLabel>
                    <Form.Control 
                    type="password" 
                     autoComplete="off" 
                     onChange={(e) => setFormValue({
                        ...formValue,
                        password: e
                    })} />
                </Form.Group>
                <Form.Group controlId="textarea">
                    <Form.ControlLabel>Textarea</Form.ControlLabel>
                    <Form.Control 
                    onChange={(e) => setFormValue({
                        ...formValue,
                        textarea: e
                    })}
                     />
                </Form.Group>
                <Form.Group>
                    <ButtonToolbar>
                        <Button appearance="primary">Submit</Button>
                        <Button appearance="default">Cancel</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
            <Link className={s.backLink} to={RouteConst.ANDRIANA_M}>back</Link>
        </div>
    )
}

export default AndrianaForm;