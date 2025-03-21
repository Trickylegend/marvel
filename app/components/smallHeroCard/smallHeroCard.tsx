import { setActiveHero } from '~/redux/features/activeHero/activeHeroSlice'
import { useAppDispatch, useAppSelector } from '~/redux/hooks'
import type { Hero } from '~/types'
import styles from './smallHeroCard.module.scss'

export default function SmallHeroCard({ hero }: { hero: Hero }) {
	const dispatch = useAppDispatch()
	const activeHero = useAppSelector(state => state.activeHeroReducer.activeHero)
	return (
		<div
			className={`${styles.smallHeroCard} ${
				activeHero?.id === hero.id && styles.active
			}`}
			onClick={() => {
				dispatch(setActiveHero(hero))
			}}
		>
			<div className={styles.imageContainer}>
				{hero.image ? (
					<img src={hero.image} alt={hero.name} />
				) : (
					<img src={'/hero.svg'} alt={hero.name ? hero.name : 'Hero'} />
				)}
			</div>
			<div className={styles.infoContainer}>
				<h2 className={styles.name}>
					{hero.name ? hero.name : 'No information available'}
				</h2>
			</div>
		</div>
	)
}
