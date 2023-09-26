// Calculate the start and end index for a given page and limit
const calculatePaginationIndexes = (page, limit) => {
	const pageToFetch = Math.ceil(page / 2);
	const halfPage = (page + 1) % 2;
	const startIndex = halfPage * limit;
	const endIndex = (halfPage + 1) * limit;

	return { pageToFetch, startIndex, endIndex };
};

export default calculatePaginationIndexes;
