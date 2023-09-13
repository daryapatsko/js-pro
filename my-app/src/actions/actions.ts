import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";


interface IUser {
    username: string;
    email: string;
    password: string;
}

export const FETCH_POSTS = () => {
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            let response = await fetch(
                "https://studapi.teachmeskills.by/blog/posts/?limit=10"
            );
            let jsonPosts = await response.json();
            let posts = jsonPosts.results;
            dispatch({ type: "SET_POSTS", payload: posts });
            return posts;
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};

export const CREATE_USER = (payload: IUser) => {
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            let response = await fetch(
                "https://studapi.teachmeskills.by/auth/users/", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            );
            let jsonUser = await response.json();
            let user = jsonUser.results;
            dispatch({ type: "SET_USER", payload: user });
            return user;
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};

export const ACTIVATE_USER = (navigate: any, uid: string, token: string) => {
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            let response = await fetch(
                "https://studapi.teachmeskills.by/auth/users/activation/", {
                method: "POST",
                body: JSON.stringify({ uid, token }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            );
            dispatch({ type: 'SET_ACTIVATION' })
            navigate('/success_page')
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};

export const GET_SELECTED_POST = (id: number) => {
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            let response = await fetch(
                `https://studapi.teachmeskills.by/blog/posts/${id}/`
            );
            let post = await response.json();
            dispatch({ type: "SET_POST", payload: post });
            return post;
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};


export const SIGN_IN = (navigate: any, email: string, password: string) => {

    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            let response = await fetch(
                "https://studapi.teachmeskills.by/auth/jwt/create", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((data) => data.json())
                .then(data => {
                    if (data.access) {
                        navigate('/posts')
                        localStorage.setItem('access', data.access)
                    }
                });
                let token = localStorage.getItem('access');
                let data = await fetch("https://studapi.teachmeskills.by/auth/users/me/",
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                })
                .then((data)=> data.json())
                console.log(data.username)
                dispatch({ type: "SET_USERNAME", payload: data.username });
                
                return data
               
            
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};