import { createSlice } from '@reduxjs/toolkit'
import type { Hero } from '~/types'

export interface ActiveHeroState {
	activeHero: Hero | undefined
}

const initialState: ActiveHeroState = {
	activeHero: undefined,
}

export const activeHeroSlice = createSlice({
	name: 'activeHero',
	initialState,
	reducers: {
		setActiveHero: (state, action) => {
			state.activeHero = action.payload
		},
	},
})

export const { setActiveHero } = activeHeroSlice.actions

export default activeHeroSlice.reducer
