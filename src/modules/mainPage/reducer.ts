import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

export const mainPageSlice = createSlice({
    name: 'mainPageData',
    initialState,
    reducers: {}
})

export const actions = {
    ...mainPageSlice.actions,
};

export type mainPageReducerState = typeof initialState;