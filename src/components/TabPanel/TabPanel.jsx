import React from 'react';

import './TabPanel.css';

export const TabPanel = ({ activeTab, index, children }) => {
    const classNameBase = 'TabPanel';
    let className = classNameBase;

    if (activeTab === index) { // There should be use of function cn from @bem-react/classname to make beautiful BEM-correct modifier but i feel lazy :)
        className += ` ${classNameBase}_active`;
    }

    return (
        <div className={className}>{children}</div>
    );
};
