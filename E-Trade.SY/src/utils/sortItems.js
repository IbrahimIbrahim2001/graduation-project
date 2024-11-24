export const sortItems = (items) => {
    const sortedItems = items.sort((a, b) => a.price - b.price);
    return sortedItems;
}


