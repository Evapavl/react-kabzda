import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "3340af45-0021-47eb-af54-7cc5ee1d8ce7"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId){
return instance.post(`follow/${userId}`)

    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    }
}
export const profileAPI = {
    getProfileUser(userId){
        return instance.get(`profile/` + userId)

        },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status:status})
    }
}
export const authAPI = {
    getAuthUserData(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}
