import React from 'react'
import { Form, useNavigation, useSubmit } from 'react-router'
import { getHeroes } from '~/api/getHeroes'
import ComicsSlider from '~/components/comicsSlider/comicsSlider'
import HeroCard from '~/components/heroCard/heroCard'
import SmallHeroCard from '~/components/smallHeroCard/smallHeroCard'
import { useAppSelector } from '~/redux/hooks'
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

	const activeHero = useAppSelector(state => state.activeHeroReducer.activeHero)

	return (
		<div className={styles.container}>
			<div className={styles.heroesContainer}>
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
					<div
						aria-hidden
						hidden={!searching}
						className={styles.searchSpinner}
					/>
				</Form>
				<div className={styles.listContainer}>
					{heroes.length && heroes.length > 0 ? (
						heroes.map(hero => <SmallHeroCard hero={hero} key={hero.id} />)
					) : (
						<div className={styles.dataNotFound}>Data not found</div>
					)}

					{heroes.length === 0 && q !== '' && (
						<div className={styles.searchNotFound}>Search not found</div>
					)}
				</div>
			</div>
			<div className={styles.activeHeroContainer}>
				{activeHero && (
					<>
						<HeroCard hero={activeHero} />
						{activeHero.comics && activeHero.comics.length > 0 && (
							<ComicsSlider comics={activeHero.comics} />
						)}
					</>
				)}
			</div>
		</div>
	)
}
