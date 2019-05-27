/**
 * Actions Types
 */

export const Types = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  modalVisible: false,
  coordinate: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL:
      return { ...state, modalVisible: true, coordinate: { ...action.payload.coordinate } };
    case Types.HIDE_MODAL:
      return { ...state, modalVisible: false };
    default:
      return state;
  }
}

/**
 * Actions Creator
 */

export const Creators = {
  showModal: coordinate => ({
    type: Types.SHOW_MODAL,
    payload: coordinate,
  }),
  hideModal: () => ({
    type: Types.HIDE_MODAL,
  }),
};
