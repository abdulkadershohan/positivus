'use client';
import { FormControl, MenuItem, Select } from '@mui/material';
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from 'next/navigation';
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
    const router = useRouter();
    const getLang = getCookie("lang");
    const [language, setLanguage] = React.useState(getLang || 'en');
    return (
        <FormControl fullWidth>
            <Select
                value={language}
                onChange={(e) => {
                    setLanguage(e.target.value)
                    setCookie("lang", e.target.value);
                    router.refresh();
                }}
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
