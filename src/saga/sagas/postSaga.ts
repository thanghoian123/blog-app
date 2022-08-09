import {
  collection,
  getDocs,
  limit,
  Query,
  query,
  startAfter
} from "firebase/firestore";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { db } from "../../firebase";
import {
  addPostSuccess,
  fetchNextPostSuccess,
  fetchPostError,
  fetchPostSuccess
} from "../action";
import {
  ADD_POST_REQUEST,
  FETCH_NEXT_POST_REQUEST,
  FETCH_POST_REQUEST
} from "../constants";

const readData = async (q: Query) => {
  let result = [] as any;
  let lastKey = null;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc: any) => {
    lastKey = doc;
    result.push({ ...doc.data(), id: doc.id });
  });
  return { data: result, lastKey };
};

const fetchPostsFirst = async () => {
  try {
    const posts = collection(db, "posts");
    const q = query(posts, limit(10));
    const { data, lastKey } = await readData(q);
    return { data, lastKey };
  } catch (error) {}
};

const fetchNextPosts = async (start: any) => {
  try {
    const posts = collection(db, "posts");
    const q = query(posts, startAfter(start), limit(5));
    const { data, lastKey } = await readData(q);
    return { data, lastKey };
  } catch (error) {}
};

const getPosts = async () => {
  const a = await fetchPostsFirst();
  // const b = await fetchNextPosts(a?.lastKey as any);

  return new Promise((resolve, reject) => {
    if (a?.data) {
      resolve({ ...a });
    } else {
      reject({ error: "errrrrrrrr" });
    }
  });
};

const getNextPosts = async (start: any) => {
  const a = await fetchNextPosts(start);
  // const b = await fetchNextPosts(a?.lastKey as any);

  return new Promise((resolve, reject) => {
    if (a?.data) {
      resolve({ ...a });
    } else {
      reject({ error: "errrrrrrrr" });
    }
  });
};

const addPost = (post: any) =>
  fetch("http://localhost:8000/posts", {
    method: "POST",
    body: JSON.stringify(post),
    redirect: "follow",
  });

function* fetchPostsSaga(): any {
  try {
    const response = yield call(getPosts);
    yield put(
      fetchPostSuccess({
        ...response,
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostError({
        error: e.message,
      })
    );
  }
}

function* fetchNextPostsSaga(action: any): any {
  try {
    const { payload } = action;
    if (payload?.lastKey) {
      const response = yield call(()=>getNextPosts(payload.lastKey));
      console.log("🚀 ~ file: postSaga.ts ~ line 108 ~ function*fetchNextPostsSaga ~ response", response)
      yield put(
        fetchNextPostSuccess({
          ...response,
        })
      );
    }
  } catch (e: any) {
    yield put(
      fetchPostError({
        error: e.message,
      })
    );
  }
}

function* addPostSaga(actions: any): any {
  try {
    const { payload } = actions;
    console.log(
      "🚀 ~ file: postSaga.ts ~ line 35 ~ function*addPostSaga ~ payload",
      payload
    );
    const response = yield call(() => addPost({ ...payload }));

    yield put(addPostSuccess({ post: { ...payload } }));
  } catch (e: any) {
    yield put(
      fetchPostError({
        error: e.message,
      })
    );
  }
}

function* postsSaga() {
  yield all([
    takeLatest(FETCH_POST_REQUEST, fetchPostsSaga),
    takeLatest(FETCH_NEXT_POST_REQUEST, fetchNextPostsSaga),
    takeLatest(ADD_POST_REQUEST, addPostSaga),
  ]);
}

export default postsSaga;
