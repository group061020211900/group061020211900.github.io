import { useState } from "react";
import s from "./VasylForm.module.css"
import React from "react";
import { NavLink } from "react-router-dom";
import { RouteConst } from "../../common/RouteConst";

const VasylForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        about: ""

    });

    const reset = () =>{
        setFormData({
            name: "",
            email: "",
            password: "",
            about: ""
        })
    }

    const setState = () =>{
        console.log(formData)
        setFormData({
            name: "",
            email: "",
            password: "",
            about: ""
        })
    }

    return (
       <div className={s.wrapper}>
           <input placeholder={"Write name..."} className={s.input} type="text" value={formData.name} onChange={(e) => {
               setFormData({
                   ...formData,
                   name: e.target.value,
               })
           }}/>
           <input placeholder={"Write email..."} className={s.input} type="text" value={formData.email} onChange={(e) => {
               setFormData({
                   ...formData,
                   email: e.target.value,
               })
           }}/>
           <input placeholder={"Write password..."} className={s.input} type="password" value={formData.password} onChange={(e) => {
               setFormData({
                   ...formData,
                   password: e.target.value,
               })
           }}/>
           <input placeholder={"Write about you..."} className={s.textarea}  type="text" value={formData.about} onChange={(e) => {
               setFormData({
                   ...formData,
                   about: e.target.value
               })
           }}/>
           <button onClick={setState} className={s.send}>Send</button>
           <button onClick={reset} className={s.reset}>Reset</button>
           <NavLink className={s.navlink} to={RouteConst.VASYLYATSISHIN}>To page</NavLink>
       </div>
    )
}

export default VasylForm