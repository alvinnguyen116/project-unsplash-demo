const accessKey = "3667e8c8bcfc5bf54ea4727452748ff23cffca590b79e22381c3b51880ff66a0";

/**
 * @param url
 * @returns {Promise<any>}
 * @desc Fetch the url and returns a promise
 * for the JSON response.
 */
async function getJSON(url) {
    try {
        const res = await fetch(url, {mode: 'cors'});
        return await res.json();
    } catch (e) {
        throw e;
    }
}

/**
 * @param query - string || []
 * @desc Queries for photos from Unsplash API.
 * https://unsplash.com/documentation#list-photos
 */
const cache = {};
export async function fetchPhotos(query) {
    if (!query) throw new Error("Invalid query.");
    query && (query = query.toLowerCase().trim());
    if (!(query in cache)) {
        let URL = `https://api.unsplash.com/search/photos?client_id=${accessKey}&per_page=999&query=${query}`;
        try {
            cache[query] = await getJSON(URL);
        } catch (e) {
            console.log(e);
        }
    }
    return cache[query];
}