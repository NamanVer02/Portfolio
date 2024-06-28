import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';

const categories = [
    "Languages",
    "Software",
    "Concepts",
    "Design",
    "Development",
    "Backend",
    "Frontend"
];

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

const FilterTabs = ({ selectedSkills, handleToggleSkill }) => {
    return (
        <Box>
            <Tabs
                value={false} // to allow all tabs to be deselectable
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable skills tabs"
            >
                {categories.map((category) => (
                    <Tab
                        key={category}
                        label={category}
                        onClick={() => handleToggleSkill(category)}
                        style={{
                            backgroundColor: selectedSkills.includes(category) ? 'lightblue' : 'white'
                        }}
                    />
                ))}
            </Tabs>
        </Box>
    );
};

export default FilterTabs;
