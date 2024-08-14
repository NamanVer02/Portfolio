import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';

const categories = [
    "Programming Languages",
    "Software",
    "Concepts",
    "Design",
    "Development",
    "Backend",
    "Frontend",
    "Framework"
];

const FilterTabs = ({ selectedSkills, handleToggleSkill }) => {
    return (
        <Box className='filter-tabs-container'>
            <Tabs
                className='filter-tabs'
                value={false} // to allow all tabs to be deselectable
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable skills tabs"
            >
                {categories.map((category) => (
                    <Tab
                    className={`filter-tab ${selectedSkills.includes(category) ? 'selected' : ''}`}
                        key={category}
                        label={category}
                        onClick={() => handleToggleSkill(category)}
                        sx={{
                            margin: '0 5px',
                            padding: '10px 15px',
                            fontSize: '0.7rem',
                            border: '1px solid #ddd',
                            borderRadius: '100px',
                            transition: 'background-color 0.3s, color 0.3s',
                            cursor: 'pointer',
                            '&.selected': {
                                backgroundColor: '#FF5454',
                                color: 'white',
                            },
                        }}
                    />
                ))}
            </Tabs>
        </Box>
    );
};

export default FilterTabs;
