const limit = 10;
// Calculate the start and end index for a given page and limit
export const calculatePaginationIndexes = (page) => {
	const pageToFetch = Math.ceil(page / 2);
	const halfPage = (page + 1) % 2;
	const startIndex = halfPage * limit;
	const endIndex = (halfPage + 1) * limit;

	return { pageToFetch, startIndex, endIndex };
};

export const calculateTotalResults = (totalResults, totalPages, page) => {
	return totalResults > limit ? totalPages * 2 : page;
};
