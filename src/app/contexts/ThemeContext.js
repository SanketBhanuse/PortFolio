"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

const themeClasses = {
    dark: {
        bg: 'bg-gray-900',
        sidebar: 'bg-gray-800',
        card: 'bg-gray-800',
        text: 'text-gray-100',
        textSecondary: 'text-gray-300',
        border: 'border-gray-700',
        accent: 'text-orange-400',
        button: 'bg-orange-500 hover:bg-orange-600',
        hover: 'hover:bg-gray-700'
    },
    light: {
        bg: 'bg-amber-50',
        sidebar: 'bg-white',
        card: 'bg-white',
        text: 'text-gray-900',
        textSecondary: 'text-gray-600',
        border: 'border-gray-200',
        accent: 'text-amber-600',
        button: 'bg-amber-500 hover:bg-amber-600',
        hover: 'hover:bg-gray-100'
    }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    const theme = isDark ? themeClasses.dark : themeClasses.light;

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};