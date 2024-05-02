import React from "react"
import Layout from "../comp/Layout";
import LoginForm from "../comp/form/LoginForm";

const Login = ({langData, currentLang, setCurrentLang}) => {
    return (
        <>
            <Layout langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>
            <LoginForm langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>
        </>
    );
};

export default Login
