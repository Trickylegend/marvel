import { configureStore } from '@reduxjs/toolkit'
import activeHeroReducer from './features/activeHero/activeHeroSlice'
import comicsReducer from './features/comics/comicsSlice'

export const store = configureStore({
	reducer: {
		activeHeroReducer: activeHeroReducer,
		comics: comicsReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
