import type { ComicSummary } from '~/types'

export interface Hero {
	id: string
	image: string
	name: string
	description: string
	comics: ComicSummary[]
}
