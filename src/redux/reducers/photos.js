import {FETCH_PHOTOS} from "../actions/actionTypes";

const initialState = {
    photos: [],
    inProgress: false,
    err: null
};

function reducer (prevState = initialState, action) {
    switch (action.type) {
        case FETCH_PHOTOS.INITIAL:
            return {
                ...prevState,
                inProgress: true
            };
        case FETCH_PHOTOS.SUCCESS:
            return {
                ...prevState,
                inProgress: false,
                photos: action.photos,
                err: null
            };
        case FETCH_PHOTOS.FAILURE:
            return {
                ...prevState,
                err: action.err,
                photos: [],
            };
        default:
            return prevState
    }
}

export default reducer;