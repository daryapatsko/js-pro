// export const FETCH_POSTS = () => {
//     return async (dispatch: any) => {
//         dispatch ({ type: 'SET_LOADING'});
//         const fetchPosts = () => {
//             fetch('https://studapi.teachmeskills.by/blog/posts/?limit=10')
//               .then((response) => response.json())
//               .then((data) => {
//                 // setPosts(data.results);
//                 dispatch({ type: "SET_POSTS", payload: data.results })
//               })
//               .catch((err) => {
//                 console.log(err.message)
//               })
//               .finally(() =>
//               dispatch({type:'SET_LOADING'}));
//           };
//           fetchPosts()
//     }
// }
interface IUser {
    name:string,
    email:string,
    password: string,
}

export const FETCH_POSTS = () => {
    return async (dispatch: any) => {
        dispatch({ type: 'SET_LOADING' });

        try {
            let responce = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=10');
            let jsonPosts = await responce.json();
            let posts = jsonPosts.results;
            dispatch({ type: 'SET_POSTS', payload: posts });
            return posts;
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: 'SET_LOADING' })
        }
    }
}
export const CREATE_USER = (payload: IUser) => {
    return async (dispatch: any) => {
        dispatch({ type: 'SET_LOADING' });

        try {
            let responce = await fetch('https://studapi.teachmeskills.by/auth/users', {method: 'POST', body: JSON.stringify(payload)});
            console.log(responce)
            let jsonPosts = await responce.json();
            let posts = jsonPosts.results;
            // dispatch({ type: 'SET_USER', payload: posts });
            return posts;
        } catch (err) {
            console.log(err);
        } finally {
            // dispatch({ type: 'SET_LOADING' })
        }
    }
}