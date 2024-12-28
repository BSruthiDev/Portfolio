import { createContext } from "react";
import React from 'react';
import { useState } from 'react';

export const GlobalContext = createContext({
    actionString: '',
    actionData: null,
    isSidebarDarkMode: false,
    onItemClick: () => {}
});

export default function GlobalContextProvider({ children }) {
    const [actionVal, setActionVal] = useState('About Me');
    const [actionData, setActionData] = useState(null);
    const [isSidebarDarkMode, setIsSidebarDarkMode] = useState(true);

    function handleOnItemClick(label, data = null) {
        setActionVal(label);
        setActionData(data);
    }

    const toggleSidebarBackgroundColor = (checked) => {
        setIsSidebarDarkMode(checked); // Update to true or false
    };

    const ctxValue = {
        actionString: actionVal,
        actionData: actionData,
        isSidebarDarkMode, // Provide the boolean state
        toggleSidebarDarkMode: toggleSidebarBackgroundColor, // Renamed for clarity
        onItemClick: handleOnItemClick
    };

    return (
        <GlobalContext.Provider value={ctxValue}>
            {children}
        </GlobalContext.Provider>
    );
}
