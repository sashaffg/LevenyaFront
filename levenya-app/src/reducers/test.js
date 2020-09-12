import * as types from '../types/'
const initial_state = {
   loading:false,
   data: {},
   error: {},
}
export function testReducer(state=initial_state, action) {
    switch (action.type) {
        case types.GET_TEST_REQUEST:
            return { ...state, loading: true, error: undefined }
        case types.GET_TEST_SUCCESS:
            return { ...state, data: action.payload, loading: false, error:undefined}
        case types.GET_TEST_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}
