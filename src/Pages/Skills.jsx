import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import ContentBox from "../Components/ContentBox";
import { motion } from 'framer-motion'
import "./Skills.css";
import 'boxicons';
import FilterTabs from "../Components/FilterTabs";

const Skills = () => {
    const backGroundLink = "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg"
    const skillsList = [
        {
            name: "C++",
            background: backGroundLink,
            category: "Programming Languages",
            link: " "
        },
        {
            name: "Python",
            background: backGroundLink,
            category: "Programming Languages",
            link: " "
        },
        {
            name: "Javascript",
            background: backGroundLink,
            category: "Programming Languages",
            link: " "
        },
        {
            name: "C",
            background: backGroundLink,
            category: "Programming Languages",
            link: " "
        },
        {
            name: "Java",
            background: backGroundLink,
            category: "Programming Languages",
            link: " "
        },
        {
            name: "Dart",
            background: backGroundLink,
            category: "Programming Languages",
            link: " "
        },
        {
            name: "SQL",
            background: backGroundLink,
            category: "Programming Languages",
            link: " "
        },
        {
            name: "Firebase",
            background: backGroundLink,
            category: "Backend",
            link: " "
        },
        {
            name: "AWS",
            background: backGroundLink,
            category: "Backend",
            link: " "
        },
        {
            name: "Google Cloud",
            background: backGroundLink,
            category: "Backend",
            link: " "
        },
        {
            name: "REST API",
            background: backGroundLink,
            category: "Backend",
            link: " "
        },
        {
            name: "Tensorflow",
            background: backGroundLink,
            category: "Framework",
            link: " "
        },
        {
            name: "Pytorch",
            background: backGroundLink,
            category: "Framework",
            link: " "
        },
        {
            name: "Flutter",
            background: backGroundLink,
            category: "Frontend",
            link: " "
        },
        {
            name: "Figma",
            background: backGroundLink,
            category: "Design",
            link: " "
        },
        {
            name: "React",
            background: backGroundLink,
            category: "Frontend",
            link: " "
        },
        {
            name: "Flask",
            background: backGroundLink,
            category: "Backend",
            link: " "
        },
        {
            name: "Git",
            background: backGroundLink,
            category: "Development",
            link: " "
        },
        {
            name: "VS Code",
            background: backGroundLink,
            category: "Software",
            link: " "
        },
        {
            name: "GitHub",
            background: backGroundLink,
            category: "Development",
            link: " "
        },
        {
            name: "Adobe Creative Suite",
            background: backGroundLink,
            category: "Design",
            link: " "
        },
        {
            name: "MS Office",
            background: backGroundLink,
            category: "Software",
            link: " "
        },
        {
            name: "Linux",
            background: backGroundLink,
            category: "Software",
            link: " "
        },
        {
            name: "Generative AI",
            background: backGroundLink,
            category: "Concepts",
            link: " "
        },
        {
            name: "LangChain",
            background: backGroundLink,
            category: "Framework",
            link: " "
        },
        {
            name: "CI/CD",
            background: backGroundLink,
            category: "Concepts",
            link: " "
        },
        {
            name: "DBMS",
            background: backGroundLink,
            category: "Concepts",
            link: " "
        },
        {
            name: "Operating Systems",
            background: backGroundLink,
            category: "Concepts",
            link: " "
        },
        {
            name: "Streamlit",
            background: backGroundLink,
            category: "Frontend",
            link: " "
        },
        {
            name: "Docker",
            background: backGroundLink,
            category: "Development",
            link: " "
        },
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
                                link={item.link}
                                backgroundURL={item.background}
                            ></ContentBox>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
