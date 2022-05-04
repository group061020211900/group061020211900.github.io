import { useState, useEffect } from "react";
import { RouteConst } from '../../../common/RouteConst';
import { JSONPlaceholder } from "../../../api/api";
import { Link } from "react-router-dom";
import s from "./AndrianaAxios.module.css";
import { Loader } from 'rsuite';

const TodoItem = ({ todo }) => (
    <div>
        <div>
            {todo.title}
            <input type="checkbox" checked={todo.completed} />
        </div>
        <hr />
    </div>
)


const AndrianaAxios = () => {
    const [todos, setTodos] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        JSONPlaceholder.getTodos()
            .then((response) => setTodos(response.data))
            .catch((e) => {
                e.response.status !== 200 && setError(`Error number ${e.response.status}`)
            })
            .finally(() => console.log("finally"))
    }, []);


    return (
        <div className={s.container}>
            <h1>USERS</h1>
            <Link className={s.backLink} to={RouteConst.ANDRIANA_M}>back</Link>
            {todos?.length > 0
                ? todos.map(todos => <TodoItem todo={todos} />)
                : error !== ""
                    ? <h3>{error}</h3>
                    :   <Loader content="Loading..." vertical />
                    }
            </div>
    )
}

export default AndrianaAxios;