/**
 * Actions Types
 */

export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return { loading: false, data: [...state.data, action.payload.data], error: null };
    case Types.ADD_FAILURE:
      return { ...state, error: null };
    default:
      return state;
  }
}

/**
 * Actions Creators
 */

export const Creators = {
  userAddRequest: (user, coordinate) => ({
    type: Types.ADD_REQUEST,
    payload: { user, coordinate },
  }),
  userAddSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: data,
  }),
  userAddFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: error,
  }),
};
