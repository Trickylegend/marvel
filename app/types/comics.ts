export interface Comic {
	id: string
	image: string
	title: string
	description: string
	pageCount: number
	language: string
	price: number
}

export interface ComicSummary {
	id: string
	image: string
	title: string
	price?: number
}
