import { useState } from "react";
import {Schema, Form, ButtonToolbar, Button} from "rsuite";

const DanyloForm = () => {
    const { StringType, NumberType } = Schema.Types;
    const model = Schema.Model({
        name: StringType().isRequired('This field is required.'),
        email: StringType()
            .isEmail('Please enter a valid email address.')
            .isRequired('This field is required.')
    });
    
    function TextField(props) {
        const { name, label, accepter, ...rest } = props;
        return (
            <Form.Group controlId={`${name}-3`}>
                <Form.ControlLabel>{label} </Form.ControlLabel>
                <Form.Control name={name} accepter={accepter} {...rest} />
            </Form.Group>
        );
    }
    const [info, setInfo] = useState("");
    const HandleChange = (e) => {
        console.log(e)
        const username = e;
        setInfo(e)
    }

    return (
        <div
            className="danyloPageFormDiv"
            style={{ backgroundColor: "tomato" }}
        >
            <Form model={model}>
                <TextField name="name" label="Username" value={info} onChange={HandleChange} />
                <TextField name="email" label="Email" />
                <ButtonToolbar>
                    <Button appearance="primary" type="submit">
                        Submit
                    </Button>
                </ButtonToolbar>
                <p style={{fontSize:"15px", color:"white", fontWeight:"bold"}}>Hello {info}!</p>
            </Form>
        </div>
    )
}

export default DanyloForm

