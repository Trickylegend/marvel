import React from 'react'
import { Form, useNavigation, useSubmit } from 'react-router'
import { getHeroes } from '~/api/getHeroes'
import type { Route } from './+types/heroes'
import styles from './heroes.module.scss'

export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url)
	const q = url.searchParams.get('q')
	const heroes = await getHeroes({ name: q })
	return { heroes, q }
}

export default function Heroes({ loaderData }: Route.ComponentProps) {
	const { heroes, q } = loaderData
	const navigation = useNavigation()
	const submit = useSubmit()
	const searching =
		navigation.location &&
		new URLSearchParams(navigation.location.search).has('q')

	React.useEffect(() => {
		const searchField = document.getElementById('q')
		if (searchField instanceof HTMLInputElement) {
			searchField.value = q || ''
		}
	}, [q])

	return (
		<div className={styles.container}>
			<Form
				role='search'
				className={styles.searchContainer}
				onChange={event => {
					submit(event.currentTarget)
				}}
			>
				<input
					id='q'
					name='q'
					type='search'
					defaultValue={q || ''}
					placeholder='Search'
					className={`${styles.input} ${searching && styles.searching}`}
				/>
				<div aria-hidden hidden={!searching} className={styles.searchSpinner} />
			</Form>
			<h2>Heroes</h2>
			{heroes.map(hero => (
				<p>{hero.name}</p>
			))}
		</div>
	)
}
