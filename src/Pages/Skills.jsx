import React, { useState } from "react";
import Navbar from "../Componenets/Navbar";
import ContentBox from "../Componenets/ContentBox";
import { motion } from 'framer-motion'
import "./Skills.css";
import 'boxicons'

function Skills() {
    const skillsList = [
        {name: "C++", background: ""},
        {name: "Python", background: ""},
        {name: "Javascript", background: ""},
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="skills">
            <Navbar></Navbar>
            <div className="content">
                <h1>Skills</h1>
                <div className="search">
                    <box-icon name="search"></box-icon>
                    <input 
                        type="text"
                        placeholder="Search..."
                        onChange={(event) => {setSearchTerm(event.target.value)}}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    ></input>
                    <motion.div
                        className="underline"
                        initial={{ width: 0 }}
                        animate={{ width: isFocused ? '100%' : 0 }}
                        transition={{ duration: 0.4 }}
                    />
                </div>
                <div className="skills-grid">
                    {skillsList
                    .filter((item) => {
                        if(searchTerm == ""){
                            return item;
                        }
                        else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return item;
                        }
                    })
                    .map((item) => (
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
