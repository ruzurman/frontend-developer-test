const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    return `${date.getFullYear()}-${month > 10 ? month : `0${month}`}-${day > 10 ? day : `0${day}`}`;
}

export const prepareData = (data, sortOrder) => {
    return data.sort((a, b) => {
        return a.timestamp > b.timestamp ? -sortOrder : sortOrder;
    }).map(item => ({
        Date: formatDate(item.timestamp),
        Id: item.id,
        'Old Value': item.diff[0].oldValue,
        'New Value': item.diff[0].newValue,
    }));
};
