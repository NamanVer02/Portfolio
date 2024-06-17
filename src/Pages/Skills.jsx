import React from "react";
import Navbar from "../Componenets/Navbar";
import ContentBox from "../Componenets/ContentBox";
import "./Skills.css";

function Skills() {
    const skillsList = [
        {name: "C++", background: ""},
        {name: "Python", background: ""},
        {name: "Javascript", background: ""},
        {name: "C++", background: ""},
        {name: "Python", background: ""},
        {name: "Javascript", background: ""},
        {name: "Javascript", background: ""},
    ];

    return (
        <div className="skills">
            <Navbar></Navbar>
            <div className="content">
                <h1>Skills</h1>
                <div className="skills-grid">
                    {skillsList.map((item) => (
                        <ContentBox
                            className="skillBox"
                            key={item.name}
                            width="calc(20% - 20px)"
                            aspectRatio="1/1"
                            title={item.name}
                            subHeading=" "
                        ></ContentBox>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
