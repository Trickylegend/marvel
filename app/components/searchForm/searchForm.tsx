import { Form } from 'react-router'
import type { Route } from '../../layouts/+types/search'
import styles from './searchForm.module.scss'

export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url)
	const q = url.searchParams.get('q')
	return { q }
}

export default function SearchForm({ loaderData }: Route.ComponentProps) {
	// const { q } = loaderData
	return (
		<Form role='search' className={styles.searchContainer}>
			<input
				id='q'
				name='q'
				type='search'
				placeholder='Search'
				className={styles.input}
			/>
			<div aria-hidden hidden={true} className={styles.searchSpinner} />
		</Form>
	)
}
