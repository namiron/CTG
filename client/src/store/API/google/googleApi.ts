import { api } from '../api';
import { IUserGet } from './../types/IAuthApiTypes';


export const googleApi = api.injectEndpoints({
    endpoints:(builder)=>({
        currentGoogle:builder.query<IUserGet,void>({
            query:()=>({
                url:'/auth/google/success',
                method:'GET',
            })
        }),
        logoutGoogle:builder.mutation<void,void>({
            query:()=>({
                url:'/auth/google/logout',
                method:'POST',
            })
        })
    })
})

export const {useCurrentGoogleQuery,useLogoutGoogleMutation} = googleApi

export const {endpoints:{currentGoogle, logoutGoogle}} = googleApi