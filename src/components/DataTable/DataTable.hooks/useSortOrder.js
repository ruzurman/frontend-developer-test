import { useState, useCallback } from "react";

export const useSortOrder = () => {
    const [sortOrder, setSortOrder] = useState(1);

    const changeSortOrder = useCallback(() => {
        setSortOrder(-sortOrder); // Same field - reverse
    }, [sortOrder]);

    return {
        sortOrder,
        changeSortOrder
    };
}
