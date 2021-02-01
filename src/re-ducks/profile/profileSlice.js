import { createSlice } from "@reduxjs/toolkit";


const profileSlice = createSlice({
    name: 'profiles',
    initialState: {
        me: {
            name: String(),
            age: Number(),
            comment: String()
        }
    },
    reducers: {
        setMeName: {
            reducer: (state, action) => {
                state.me.name = action.payload.name
            },
            /**
             * 
             * @param {string} name 自分のアカウントの名前
             */
            prepare: (name) => ({
                payload: { name }
            })
        },
        setMeAge: {
            reducer: (state, action) => {
                state.me.age = action.payload.age
            },
            /**
             * 
             * @param {Number} age 自分のアカウントに登録する年齢
             */
            prepare: (age) => ({
                payload: { age }
            })
        },
        setMeComment: {
            reducer: (state, action) => {
                state.me.comment = action.payload.comment
            },
            /**
             * 
             * @param {string} comment 自分のアカウントに登録するコメント
             */
            prepare: (comment) => ({
                payload: { comment }
            })
        }
    },
})

export const { setMeName, setMeComment, setMeAge } = profileSlice.actions;
export const ProfileReducer = profileSlice.reducer;