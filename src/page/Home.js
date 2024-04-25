import React, {useState} from "react"
import Layout from "../comp/Layout";

const Home = () => {
    const [currentLang, setCurrentLang] = useState("FR");
    const langData = {
        "FR": [
            {"title": "Mathis Bourrelly"}
        ],
        "EN": [
            {"title": "Mathis Bourrelly"}
        ]
    };

    return (
        <>
            <Layout langData={langData} currentLang={currentLang} setCurrentLang={setCurrentLang}/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at atque, commodi dolores eligendi eum expedita fugiat, inventore maiores nihil reiciendis sint suscipit temporibus voluptates voluptatum? Laborum tempora voluptatem voluptates.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aut blanditiis cum dolorem doloribus eligendi excepturi explicabo impedit, iste mollitia natus nemo perferendis quia reiciendis sit veniam veritatis voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores commodi culpa cupiditate debitis dignissimos distinctio dolorem, eligendi eveniet facilis ipsum laudantium minima, modi nihil numquam odit quis sed temporibus?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur cumque, dicta eaque eos fugiat illo inventore ipsum iure natus omnis perspiciatis rem, sint ut voluptatum? Beatae dignissimos sequi tenetur.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque, debitis dolorem enim est exercitationem explicabo fugit modi nihil obcaecati perferendis perspiciatis quae reiciendis sapiente sunt ullam unde voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquam enim eveniet laudantium neque nesciunt rem voluptates. Adipisci animi assumenda debitis ea exercitationem ipsum odio quis sapiente vel. Impedit.
            <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores commodi culpa cupiditate debitis dignissimos distinctio dolorem, eligendi eveniet facilis ipsum laudantium minima, modi nihil numquam odit quis sed temporibus?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur cumque, dicta eaque eos fugiat illo inventore ipsum iure natus omnis perspiciatis rem, sint ut voluptatum? Beatae dignissimos sequi tenetur.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque, debitis dolorem enim est exercitationem explicabo fugit modi nihil obcaecati perferendis perspiciatis quae reiciendis sapiente sunt ullam unde voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquam enim eveniet laudantium neque nesciunt rem voluptates. Adipisci animi assumenda debitis ea exercitationem ipsum odio quis sapiente vel. Impedit.
            <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores commodi culpa cupiditate debitis dignissimos distinctio dolorem, eligendi eveniet facilis ipsum laudantium minima, modi nihil numquam odit quis sed temporibus?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur cumque, dicta eaque eos fugiat illo inventore ipsum iure natus omnis perspiciatis rem, sint ut voluptatum? Beatae dignissimos sequi tenetur.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque, debitis dolorem enim est exercitationem explicabo fugit modi nihil obcaecati perferendis perspiciatis quae reiciendis sapiente sunt ullam unde voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquam enim eveniet laudantium neque nesciunt rem voluptates. Adipisci animi assumenda debitis ea exercitationem ipsum odio quis sapiente vel. Impedit.
            <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores commodi culpa cupiditate debitis dignissimos distinctio dolorem, eligendi eveniet facilis ipsum laudantium minima, modi nihil numquam odit quis sed temporibus?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur cumque, dicta eaque eos fugiat illo inventore ipsum iure natus omnis perspiciatis rem, sint ut voluptatum? Beatae dignissimos sequi tenetur.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque, debitis dolorem enim est exercitationem explicabo fugit modi nihil obcaecati perferendis perspiciatis quae reiciendis sapiente sunt ullam unde voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquam enim eveniet laudantium neque nesciunt rem voluptates. Adipisci animi assumenda debitis ea exercitationem ipsum odio quis sapiente vel. Impedit.
            <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores commodi culpa cupiditate debitis dignissimos distinctio dolorem, eligendi eveniet facilis ipsum laudantium minima, modi nihil numquam odit quis sed temporibus?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur cumque, dicta eaque eos fugiat illo inventore ipsum iure natus omnis perspiciatis rem, sint ut voluptatum? Beatae dignissimos sequi tenetur.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque, debitis dolorem enim est exercitationem explicabo fugit modi nihil obcaecati perferendis perspiciatis quae reiciendis sapiente sunt ullam unde voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquam enim eveniet laudantium neque nesciunt rem voluptates. Adipisci animi assumenda debitis ea exercitationem ipsum odio quis sapiente vel. Impedit.
            <br/>
        </>
    );
};

export default Home
