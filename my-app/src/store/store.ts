import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  count: 0,
  theme: "light",
  modalInfo: {
    isOpenModal: false, 
    id:null
  },
  posts: [],
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case "TOGGLE_MODAL": {
        return{
            ...state,
            modalInfo: { 
              isOpenModal: !state.modalInfo.isOpenModal , 
              // isOpenImage: !state.modalInfo.isOpenImage,
              id: action.payload
            }
        }
    }
    case "SET_POSTS": {
      return{
          ...state,
          posts: action.payload,
      }
    }
    case "ADD_LIKES": {
      return{
          ...state,
          posts: state.posts.map((post: {id: number, likes?:number}) =>{
           if(post.id === action.payload){
            post = {...post, likes: post.likes !== undefined && post.likes > 0 ? post.likes + 1 : 1}
           }
            return post
          })
      }
    }
    case "ADD_DISLIKES": {
      return{
          ...state,
          posts: state.posts.map((post: {id: number, likes?:number}) =>{
           if(post.id === action.payload){
            post = {...post, likes: post.likes !== undefined && post.likes > 0 ? post.likes - 1 : 0}
           }
            return post
          })
      }
    }
    default:
      return state;
  }
};
const store = createStore(rootReducer,composeWithDevTools());

export default store;