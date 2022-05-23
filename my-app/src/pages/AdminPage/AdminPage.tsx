import styles from "./AdminPage.module.css"
import { useNavigate, useParams } from "react-router-dom";
import { RouteConst } from "../../common/RouteConst";
import { useEffect, useState } from "react";
import {

    Outlet,
} from "react-router-dom";
import LoginFrom from "../Igor/form/LoginnForm";
interface FormValue {
    name: string,
    passWord: string,
    date: string
}

interface SuperForm extends FormValue {
    key: number
}

const IhorKurylovPage = () => {
    const navigate = useNavigate();
    // const { userId } = useParams();


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formValue);
    }
    const [formValue, setFormValue] = useState<FormValue | SuperForm>({
        name: "",
        passWord: "",
        date: "",
        key: 12,
    })

    const [isAdmin, setIsAdmin] = useState<boolean>(true);

    // useEffect(()=>{
    //     console.log(formValue);
    // },[formValue])

    return (
        <div className={styles.container}>


            {/*<h1 onClick={()=> navigate(RouteConst.NOT_FOUND_PAGE)}>Ihor Kurylov</h1>*/}
            {/*<Outlet />*/}

            {/*<form>*/}
            {/*    <label>*/}
            {/*        Ім'я:*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            value={formValue.name}*/}
            {/*            onChange={(e)=> setFormValue({*/}
            {/*                ...formValue,*/}
            {/*                name: e.target.value*/}
            {/*            })}*/}
            {/*        />*/}
            {/*    </label>*/}
            {/*    <label>*/}
            {/*        Пароль:*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            value={formValue.passWord}*/}
            {/*            onChange={(e)=> setFormValue({*/}
            {/*                ...formValue,*/}
            {/*                passWord: e.target.value*/}
            {/*            })}*/}
            {/*        />*/}
            {/*    </label>*/}
            {/*    <label>*/}
            {/*        Дата:*/}
            {/*        <input*/}
            {/*            type="date"*/}
            {/*            value={formValue.date}*/}
            {/*            onChange={(e)=> setFormValue({*/}
            {/*                ...formValue,*/}
            {/*                date: e.target.value*/}
            {/*            })}*/}
            {/*        />*/}
            {/*    </label>*/}
            {/*    <button type="reset" onClick={()=> setFormValue({*/}
            {/*        name: "",*/}
            {/*        passWord: "",*/}
            {/*        date: ""*/}
            {/*    })}>Reset</button>*/}
            {/*    <button onClick={handleSubmit}>Submit</button>*/}
            {/*</form>*/}
            {/*<LoginFrom />*/}
        </div>
    )
}

export default IhorKurylovPage;