import { FETCH_LISTS, FETCH_LIST, UPVOTE, DOWNVOTE, ADD_COMMENT, REMOVE_COMMENT } from '../actions/index';

const INITIAL_STATE = {
  all: [],
  list: null
};

export default function(state = INITIAL_STATE, action) {
  let targetList = state.all[action.index];
  if(action.type === FETCH_LIST) {
    return { ...state, list: action.payload.data };
  } else if(action.type === FETCH_LISTS) {
    return {
      ...state, all: action.payload.data.lists
    };
  } else if(action.type === UPVOTE) {
    const { up, down, upflag, downflag } = action.payload.data;
    console.log('action.payload: ', action.payload);
    targetList.upvote = +targetList.upvote + (+up);
    targetList.downvote = +targetList.downvote + (+down);
    targetList.upflag = upflag;
    targetList.downflag = downflag;
    return {
      ...state,
      all:[
        ...state.all.slice(0, action.index),
        Object.assign({}, targetList, targetList.upvote, targetList.downvote, targetList.upflag, targetList.downflag),
        ...state.all.slice(action.index + 1)
      ]
    };
  } else if(action.type === DOWNVOTE) {
    const { up, down, upflag, downflag } = action.payload.data;
    targetList.upvote = +targetList.upvote + (+up);
    targetList.downvote = +targetList.downvote + (+down);
    targetList.upflag = upflag;
    targetList.downflag = downflag;
    return {
      ...state,
      all:[
        ...state.all.slice(0, action.index),
        Object.assign({}, targetList, targetList.upvote, targetList.downvote, targetList.upflag, targetList.downflag),
        ...state.all.slice(action.index + 1)
      ]
    };
  } else if(action.type === ADD_COMMENT){
    return {
      ...state,
        list:{
          ...state.list,
          comments: [
            ...state.list.comments,
            JSON.parse(action.payload.config.data)
          ]
        }
    }

  } else {
    return state;
  }
}
