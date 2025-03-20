import {
	type RouteConfig,
	index,
	layout,
	route,
} from '@react-router/dev/routes'

export default [
	index('routes/home/home.tsx'),

	route('comics', './routes/comics/comics.tsx'),
	layout('./layouts/navigation.tsx', [
		route('comics/:comicId', './routes/comic/comic.tsx'),
	]),
	route('heroes', './routes/heroes/heroes.tsx'),
	// layout('./layouts/search.tsx', [
	// 	route('heroes', './routes/heroes/heroes.tsx'),
	// ]),
] satisfies RouteConfig
