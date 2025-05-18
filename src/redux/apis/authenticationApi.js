import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://192.168.6.78:2100/api/v1/auth';

export const authenticationApi = createApi({
  reducerPath: 'authenticationApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  tagTypes: ['POST'],
  endpoints: build => ({
    authUser: build.mutation({
      query: body => ({
        url: '/login',
        method: 'POST',
        body: body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: response => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
      providesTags: (result, error, id) => [{type: 'Post', id}],
    }),
    registerUser: build.mutation({
      query: body => ({
        url: '',
        method: 'POST',
        body: body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: response => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
      providesTags: (result, error, id) => [{type: 'Post', id}],
    }),
  }),
});

export const {useAuthUserMutation, useRegisterUserMutation} = authenticationApi;
