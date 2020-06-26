import {userAPI, userAPI as usersAPI} from "../api/api";
import { updateObjectInArray } from "../components/Validator/obect-helpers";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 20,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    portionSize:0
}




let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                 users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u;
                // })
            }
        case UNFOLLOW :
            return {
                ...state,
                users:  updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalItemsCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
       let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(toggleIsFetching(false))
       
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow( dispatch, userId, userAPI.follow.bind(userAPI), followSucces)
        }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator  ) => {
        dispatch(toggleIsFollowingProgress(true, userId))
      let response = await  apiMethod(userId)
                if (response.data.resultCode === 0) {
                    dispatch(actionCreator(userId));
                }
                dispatch(toggleIsFollowingProgress(false, userId))
}

export const unfollow = (userId) => {
    return async (dispatch) => {
    followUnfollowFlow( dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSucces)
    }
}

export const followSucces = (userId) => ({type: FOLLOW, userId})
export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})


export default usersReducer;