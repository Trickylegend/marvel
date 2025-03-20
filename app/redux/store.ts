import { configureStore } from '@reduxjs/toolkit'
import activeHeroReducer from './features/activeHero/activeHeroSlice'

// export const makeStore = () => {
// 	return configureStore({
// 		reducer: {
// 			activeHeroReducer: activeHeroReducer,
// 		},
// 	})
// }

export const store = configureStore({
	reducer: {
		activeHeroReducer: activeHeroReducer,
	},
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

// export type AppStore = ReturnType<typeof makeStore>
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']
