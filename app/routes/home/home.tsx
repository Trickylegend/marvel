import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Marvel' },
		{
			name: 'Your favorites Marvel Heroes',
			content: 'Welcome to Marvel Portal!',
		},
	]
}

export default function Home() {
	return <div>Home</div>
}
