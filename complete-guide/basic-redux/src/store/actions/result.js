import * as actionTypes from './actionsTypes';

const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResultAsync = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // console.log('[storeResultAsync]', getState().ctr.counter);
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (payload) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: payload
    };
};