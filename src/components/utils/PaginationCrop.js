export function PaginationCrop(items, pageIndex, pageSize) {
    const startIndex = (pageIndex - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}
