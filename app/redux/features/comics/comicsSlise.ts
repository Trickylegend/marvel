import {
	createAsyncThunk,
	createSlice,
	type PayloadAction,
} from '@reduxjs/toolkit'
import { getComics } from '~/api/getComics'
import type { Comic } from '~/types'

export const fetchMoreComics = createAsyncThunk(
	'comics/fetchMore',
	async (params: { limit: number; offset: number }) => {
		const comics = await getComics({
			limit: params.limit,
			offset: params.offset,
		})
		return comics
	}
)

interface ComicsState {
	comics: Comic[]
	offset: number
	limit: number
	loading: boolean
	error: string | null
}

const initialState: ComicsState = {
	comics: [],
	offset: 6,
	limit: 6,
	loading: false,
	error: null,
}

const comicsSlice = createSlice({
	name: 'comics',
	initialState,
	reducers: {
		setInitialComics(state, action: PayloadAction<Comic[]>) {
			state.comics = action.payload
			state.offset = action.payload.length
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchMoreComics.pending, state => {
			state.loading = true
			state.error = null
		})
		builder.addCase(
			fetchMoreComics.fulfilled,
			(state, action: PayloadAction<Comic[]>) => {
				state.loading = false
				state.comics = [...state.comics, ...action.payload]
				state.offset += action.payload.length
			}
		)
		builder.addCase(fetchMoreComics.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message || 'Ошибка загрузки данных'
		})
	},
})

export const { setInitialComics } = comicsSlice.actions
export default comicsSlice.reducer
