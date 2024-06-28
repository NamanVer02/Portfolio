import React, { useState } from "react";
import Navbar from "../Componenets/Navbar";
import ContentBox from "../Componenets/ContentBox";
import { motion } from 'framer-motion'
import "./Skills.css";
import 'boxicons';
import FilterTabs from "../Componenets/FilterTabs";

const Skills = () => {
    const skillsList = [
        { name: "C++", background: "", category: "Languages" },
        { name: "Python", background: "", category: "Languages" },
        { name: "Javascript", background: "", category: "Languages" },
        { name: "C", background: "", category: "Languages" },
        { name: "Java", background: "", category: "Languages" },
        { name: "Dart", background: "", category: "Languages" },
        { name: "SQL", background: "", category: "Languages" },
        { name: "Firebase", background: "", category: "Backend" },
        { name: "AWS", background: "", category: "Backend" },
        { name: "Google Cloud", background: "", category: "Backend" },
        { name: "Arduino", background: "", category: "Development" },
        { name: "REST API", background: "", category: "Backend" },
        { name: "Tensorflow", background: "", category: "Concepts" },
        { name: "Pytorch", background: "", category: "Concepts" },
        { name: "Flutter", background: "", category: "Frontend" },
        { name: "Figma", background: "", category: "Design" },
        { name: "React", background: "", category: "Frontend" },
        { name: "Flask", background: "", category: "Backend" },
        { name: "Git", background: "", category: "Development" },
        { name: "VS Code", background: "", category: "Software" },
        { name: "GitHub", background: "", category: "Development" },
        { name: "Adobe Creative Suite", background: "", category: "Design" },
        { name: "MS Office", background: "", category: "Software" },
        { name: "Linux", background: "", category: "Software" },
        { name: "Generative AI", background: "", category: "Concepts" },
        { name: "LangChain", background: "", category: "Concepts" },
        { name: "Streamlit", background: "", category: "Frontend" }
    ];    

    const [searchTerm, setSearchTerm] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleToggleCategory = (category) => {
        setSelectedCategories((prevSelectedCategories) => {
            if (prevSelectedCategories.includes(category)) {
                return prevSelectedCategories.filter((c) => c !== category);
            } else {
                return [...prevSelectedCategories, category];
            }
        });
    };

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
                        onChange={(event) => { setSearchTerm(event.target.value) }}
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

                <FilterTabs selectedSkills={selectedCategories} handleToggleSkill={handleToggleCategory} />

                <div className="skills-grid">
                    {skillsList
                        .filter((item) => {
                            if (searchTerm === "") {
                                return item;
                            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return item;
                            }
                        })
                        .filter((item) => {
                            if (selectedCategories.length === 0) {
                                return true;
                            } else {
                                return selectedCategories.includes(item.category);
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
                                fontSize="1rem"
                            ></ContentBox>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
