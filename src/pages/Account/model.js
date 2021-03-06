export default {
  namespace: 'account',

  state: {
    data: { list: [], pagination: {} },
  },

  effects: {
    *index({ payload }, { call }) {
      yield call({
        type: 'saveData',
        payload,
      });
    },
  },

  reducers: {
    saveData(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
