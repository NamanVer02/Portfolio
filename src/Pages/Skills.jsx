import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import ContentBox from "../Components/ContentBox";
import { motion } from 'framer-motion'
import "./Skills.css";
import 'boxicons';
import FilterTabs from "../Components/FilterTabs";

const Skills = () => {
    const skillsList = [
        {
            name: "C++",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Languages",
            link: " "
        },
        {
            name: "Python",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Languages",
            link: " "
        },
        {
            name: "Javascript",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Languages",
            link: " "
        },
        {
            name: "C",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Languages",
            link: " "
        },
        {
            name: "Java",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Languages",
            link: " "
        },
        {
            name: "Dart",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Languages",
            link: " "
        },
        {
            name: "SQL",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Languages",
            link: " "
        },
        {
            name: "Firebase",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Backend",
            link: " "
        },
        {
            name: "AWS",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Backend",
            link: " "
        },
        {
            name: "Google Cloud",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Backend",
            link: " "
        },
        {
            name: "REST API",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Backend",
            link: " "
        },
        {
            name: "Tensorflow",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Concepts",
            link: " "
        },
        {
            name: "Pytorch",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Concepts",
            link: " "
        },
        {
            name: "Flutter",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Frontend",
            link: " "
        },
        {
            name: "Figma",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Design",
            link: " "
        },
        {
            name: "React",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Frontend",
            link: " "
        },
        {
            name: "Flask",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Backend",
            link: " "
        },
        {
            name: "Git",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Development",
            link: " "
        },
        {
            name: "VS Code",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Software",
            link: " "
        },
        {
            name: "GitHub",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Development",
            link: " "
        },
        {
            name: "Adobe Creative Suite",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Design",
            link: " "
        },
        {
            name: "MS Office",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Software",
            link: " "
        },
        {
            name: "Linux",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Software",
            link: " "
        },
        {
            name: "Generative AI",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Concepts",
            link: " "
        },
        {
            name: "LangChain",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Concepts",
            link: " "
        },
        {
            name: "Streamlit",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
            category: "Frontend",
            link: " "
        },
        {
            name: "Docker",
            background: "https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg",
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
