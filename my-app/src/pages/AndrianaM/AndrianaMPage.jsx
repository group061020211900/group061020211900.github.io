import React from "react";
// import s from "./AndrianaMPage.module.css"
import 'rsuite/dist/rsuite.min.css';
import { Form, Button, ButtonToolbar, Input} from 'rsuite';


const AndrianaMPage = () => {

    const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);


    return (
        <div>
            <h1>Andriana Mykolaievych</h1>
            <Form>
                <Form.Group controlId="name">
                    <Form.ControlLabel>Username</Form.ControlLabel>
                    <Form.Control name="name" />
                    <Form.HelpText>Username is required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.ControlLabel>Email</Form.ControlLabel>
                    <Form.Control name="email" type="email" />
                    {/* <Form.HelpText tooltip>Email is required</Form.HelpText> */}
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.ControlLabel>Password</Form.ControlLabel>
                    <Form.Control name="password" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group controlId="textarea">
                    <Form.ControlLabel>Textarea</Form.ControlLabel>
                    <Form.Control rows={5} name="textarea" accepter={Textarea} />
                </Form.Group>
                <Form.Group>
                    <ButtonToolbar>
                        <Button appearance="primary">Submit</Button>
                        <Button appearance="default">Cancel</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>

        </div>
    )
}

export default AndrianaMPage;