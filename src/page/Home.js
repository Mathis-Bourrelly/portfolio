import React, {useState} from "react"
import Layout from "../comp/Layout";

const Home = ({langData ,currentLang, setCurrentLang}) => {


    return (
        <>
            <Layout langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>
            <div className="container-grid">
                <div></div>
                <div className="title">
                    <h1>{langData[currentLang].title1}</h1>
                    <h3>{langData[currentLang].title2}
                        <br/> {langData[currentLang].title3}</h3>
                </div>
                <div className="col-1">
                    <div className="card">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <div className="col-2">

                    <div className="card">

                        <div className="subtitle">COMPÉTENCES</div>
                        <hr/>
                        <ul>
                            <li><p>Programmation : HTML/CSS, JavaScript, PHP, Kotlin, SQL, Python, Java</p></li>
                            <li><p>Framework : Symfony, React Js, Node.Js, Express.Js, Android</p></li>
                            <li><p>IDE et environnement : JetBrains IDE, Android Studio, Figma, Linux, Windows</p></li>
                            <li><p>Versionning et CI/CD : Git, Gitlab CI, Github</p></li>
                            <li><p>Vidéo et 3D : Premier pro, Photoshop, Fusion 360, Blender</p></li>
                        </ul>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home
