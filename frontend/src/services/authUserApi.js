import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:3001/api/v1';

export const authUserApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: '/user/login',
        method: 'POST',
        body: {
          email: user.email,
          password: user.password,
        },
      }),
    }),
    profile: builder.query({
      query: (token) => ({
        url: '/user/profile',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    username: builder.mutation({
      query: ({ user, token }) => ({
        url: '/user/profile',
        method: 'PUT',
        body: {
          firstName: user.firstName,
          lastName: user.lastName,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useProfileQuery, useUsernameMutation } =
  authUserApi;
