import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  FETCH_NEXT_POST_FAILURE,
  FETCH_NEXT_POST_REQUEST,
  FETCH_NEXT_POST_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS
} from "./constants";

export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

export const fetchPostSuccess = (payload: any) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload,
  };
};

export const fetchPostError = (payload: any) => {
  return {
    type: FETCH_POST_FAILURE,
    payload,
  };
};

export const fetchNextPostRequest = (payload: any) => {
  return {
    type: FETCH_NEXT_POST_REQUEST,
    payload,
  };
};

export const fetchNextPostSuccess = (payload: any) => {
  return {
    type: FETCH_NEXT_POST_SUCCESS,
    payload,
  };
};

export const fetchNextPostError = (payload: any) => {
  return {
    type: FETCH_NEXT_POST_FAILURE,
    payload,
  };
};

export const addPostRequest = (payload: any) => {
  return {
    type: ADD_POST_REQUEST,
    payload,
  };
};

export const addPostSuccess = (payload: any) => {
  return {
    type: ADD_POST_SUCCESS,
    payload,
  };
};
