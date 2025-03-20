import {
	type RouteConfig,
	index,
	layout,
	route,
} from '@react-router/dev/routes'

export default [
	index('./routes/comics/comics.tsx'),
	layout('./layouts/navigation.tsx', [
		route('comics/:comicId', './routes/comic/comic.tsx'),
	]),
	route('heroes', './routes/heroes/heroes.tsx'),
] satisfies RouteConfig
