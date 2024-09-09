'use client';
import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';

const languages = [
    {
        value: 'en',
        label: 'English (United States)'
    },
    {
        value: 'es',
        label: 'Spanish (Spain)'
    },
    {
        value: 'bn-BD',
        label: 'Bengali (Bangladesh)'
    },

]
export default function SelectLanguage() {
    const [language, setLanguage] = React.useState('en');
    return (
        <FormControl fullWidth>
            <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
            >
                {languages.map((lang) => (
                    <MenuItem key={lang.value} value={lang.value}>
                        {lang.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
