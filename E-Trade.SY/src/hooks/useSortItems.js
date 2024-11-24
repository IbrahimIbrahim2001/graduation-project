import { useQueryClient } from "@tanstack/react-query"
import { sortItems } from "../utils/sortItems";

export const useSortItems = () => {
    const queryClient = useQueryClient();
    const sortAndCacheItems = () => {
        const items = queryClient.getQueryData(['shops-items']);
        if (!items) return;
        const sortedItems = sortItems(items);
        queryClient.setQueryData(['shops-items'], sortedItems);
    };
    return sortAndCacheItems;
}