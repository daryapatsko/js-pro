import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import instance from "src/store/axiosConfig";


interface IUser {
    username: string;
    email: string;
    password: string;
}
export const FETCH_POSTS = () => {
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            instance.get('blog/posts/?limit=10')
                .then((data) => {
                    const posts = data.data.results
                    dispatch({ type: "SET_POSTS", payload: posts });
                })
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
                        localStorage.setItem('refresh', data.refresh)
                    }
                });
            let token = localStorage.getItem('access');
            let data = await fetch("https://studapi.teachmeskills.by/auth/users/me/",
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                })
                .then((data) => data.json())
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


export const GET_MY_POSTS = () => {
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            const token = localStorage.getItem('access')
            let response = await fetch(
                "https://studapi.teachmeskills.by/blog/posts/my_posts/?limit=10",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            let jsonMyPosts = await response.json();
            let myPosts = jsonMyPosts.results;
            dispatch({ type: "SET_MY_POSTS", payload: myPosts })
            console.log(myPosts)
            return myPosts;
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};


interface IMyPost {
    image: any,
    text: string,
    lesson_num: number,
    title: string,
    description: string
}
export const CREATE_MY_POST = (payload: IMyPost) => {

    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });


        try {
            const formData = new FormData()
            formData.append('image', payload.image);
            formData.append('text', payload.text);
            formData.append('lesson_num', payload.lesson_num.toString());
            formData.append('title', payload.title);
            formData.append('description', payload.description)
            console.log(formData)
            await instance.post("/blog/posts/", formData, {
                headers: {
                    'Content-Type': "multipart/form-data",
                }
            })

        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};


