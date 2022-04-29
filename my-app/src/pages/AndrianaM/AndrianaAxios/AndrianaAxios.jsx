import { useState, useEffect } from "react";
import { RouteConst } from '../../../common/RouteConst';
import { JSONPlaceholder } from "../../../api/api";
import { Link } from "react-router-dom";
import s from "./AndrianaAxios.module.css";
import "bootstrap/dist/css/bootstrap.min.css"

const TodoItem = ({ todo }) => (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        {todo.title}
        <input type="checkbox" checked={todo.completed} />
    </li>
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
                ? todos.map(todos =><ul className="list-group"><TodoItem todo={todos} /></ul>)
                : error !== ""
                    ? <h3>{error}</h3>
                    : <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>}

           
        </div>
    )
}

export default AndrianaAxios;