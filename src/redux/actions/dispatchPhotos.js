import {fetchPhotos} from "../../api";
import {FETCH_PHOTOS} from "./actionTypes";

function PhotosInitial() {
    return {type: FETCH_PHOTOS.INITIAL};
}

function PhotosSuccess({results}) {
    return {
        type: FETCH_PHOTOS.SUCCESS,
        photos: results.map(result => ({
            id: result.id,
            url: result.urls.small
        }))
    };
}

function PhotosFailure(err) {
    return {
        type: FETCH_PHOTOS.FAILURE,
        err
    };
}

function fetchReviews(query) {
    return async function (dispatch) {
        query && (query = query.toLowerCase());
        dispatch(PhotosInitial());
        try {
            const data = await fetchPhotos(query);
            dispatch(PhotosSuccess(data));
        } catch (e) {
            dispatch(PhotosFailure(e));
        }
    }
}

export default fetchReviews;