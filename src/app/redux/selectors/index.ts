// один селектор получать currentUser получает сторе и возвращает пользователя из стора.
// state.auth.user

// import { createSelector } from "reselect";
// import type 

// selector
export const getAuthUser = (state: { auth: { user: string } }) => state.auth.user;


// reselect function
// export const getAuthUserState = createSelector( [getAuthUser, ](user) => user);
