import { apiSlice } from "./ApiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                mode: 'no-cors',
                url: '/auth',
                method: 'POST',
                body: JSON.stringify({...credentials}),
            })
        }),
    })
})

export const { useLoginMutation } = authApiSlice