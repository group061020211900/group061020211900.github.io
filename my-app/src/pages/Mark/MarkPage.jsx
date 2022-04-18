import React from 'react';
import M from "./MarkPageStyle.module.css";
import {useNavigate} from "react-router-dom";

const MarkPage = () => {
    const Home = useNavigate();


    return (
        <div> <div className={M.main}>
            <div className={M.left}>
                <div>
                    <h3>Особисті дані</h3>
                    <h4>Прізвище, ім’я, по батькові</h4>
                    <h5>Горбайчук Марк А.</h5>
                    <h4>Адреса</h4>
                    <p>Безхатько</p>
                    <h4>Телефон</h4>
                    <p>+380978987654</p>
                    <h4>Мило</h4>
                    <p>ТиХто@gmail.com</p>
                    <h3>Навички</h3>
                    <ul className={M.list}>
                        <li>1.LoremLoem</li>
                        <li>2.Lorem</li>
                        <li>3.LoremLoremLor</li>
                    </ul>
                </div>
            </div>
            <div className={M.right}>
                <h3>Особисті дані</h3>
                <p>LoremLoremLoremLorem
                    LoremLoremLoremLoremLorem
                    LoremLoremLoremLoremLoremLorem
                    LoremLoremLoremLorem
                    <b> LoremLoremLoremLoremLorem
                        LoremLoremLoremLoremLoremLorem
                        LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</b>
                    LoremLoremLoremLoremLorem
                    LoremLoremLoremLoremLoremLorem
                    LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
                    LoremLoremLoremLoremLorem
                    LoremLoremLoremLoremLoremLorem
                    <i>LoremLoremLoremLoremLorLoremLoremLoremLorem
                        LoremLoremLoremLoremLorem
                        LoremLoremLoremLoremLoremLorem
                        LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
                        LoremLoremLoremLoremLorem
                        LoremLoremLoremLoremLoremLorem
                        LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
                        LoremLoremLoremLoremLorem
                        LoremLoremLoremLoremLoremLorem
                        LoremLoremLoremLoremLoremLore</i> mLoremLoremLoremLorem

                    <b> LoremLor  LoremLoremLoremLoremLorem
                        LoremLoremLoremLoremLoremLorem
                        LoremLoremLoremLoremLoremLorememLoremLoremLoremLoremLorememLoremLoremLorem
                        LoremLoremLoremLoremLoremLorem
                        LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</b>
                    LoremLoremLoremLoremLoremLorem
                    LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</p>
            </div>


        </div>
            <button className={M.btn} onClick={() => { Home("/") }}>Home</button>
        </div>

    );
};

export default MarkPage;