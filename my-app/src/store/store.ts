import { legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  count: 0,
  theme: "light",
  modalInfo: {
    isOpenModal: false, 
    id:null
  },
  posts: [],
  tab:'All',
  isLoading:false,
  user:{
    username: '',
    email:'',
    id:null,
  },
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
    case "TOGGLE_TABS": {
      return{
          ...state,
        tab: action.payload,
      }
    }
    case "ADD_FAVORITES": {
      return{
          ...state,
          posts: state.posts.map((post: {id: number, isFavorites?:boolean}) =>{
           if(post.id === action.payload){
            post = {...post, isFavorites: post.isFavorites !== undefined && post.isFavorites === true ? post.isFavorites = false : true}
           }
            return post
          })
      }
    }
    case "SET_LOADING": {
      return{
          ...state,
        isLoading: !state.isLoading,
      }
    }
    case "SET_USER": {
      return{
          ...state,
          user: action.payload,
      }
    }

    default:
      return state;
  }
};
const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk)));

export default store;