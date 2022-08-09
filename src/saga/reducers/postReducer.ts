import * as actions from "../constants";

const initialState = {
  posts: [],
  lastKey: null,
  error: null,
  pending: false,
};

function clientReducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case actions.FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.data,
        lastKey: action.payload.lastKey,
        error: null,
      };
    case actions.FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error,
      };

    case actions.FETCH_NEXT_POST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case actions.FETCH_NEXT_POST_SUCCESS:
      console.log(state);

      return {
        ...state,
        pending: false,
        posts: [...state.posts, ...action.payload.data],
        lastKey: action.payload.lastKey,
        error: null,
      };
    case actions.FETCH_NEXT_POST_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error,
      };

    case actions.ADD_POST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case actions.ADD_POST_SUCCESS:
      const clonePosts = [...state.posts] as any;
      clonePosts.push(action.payload.post);

      return {
        ...state,
        pending: false,
        posts: [...clonePosts],
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
}

export default clientReducer;
