'use client';
import useThemeToggle from '@/next-theme/useThemeToggle';
import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';

export default function SelectMode() {
    const { toggleTheme, mode } = useThemeToggle();
    const [selectMode, setSelectMode] = React.useState(mode);
    return (
        <FormControl fullWidth>
            <Select
                value={selectMode}
                onChange={(e) => {
                    setSelectMode(e.target.value);
                    toggleTheme();
                }}
            >
                <MenuItem value="light">Light</MenuItem>
                <MenuItem value="dark">Dark</MenuItem>
            </Select>
        </FormControl>
    )
}
