import { Form } from 'react-router'
import SmallHeroCardSkeleton from '~/components/smallHeroCard/smallHeroCardSkeleton/smallHeroCardSkeleton'
import styles from './heroesSkeleton.module.scss'

export default function HeroesSkeleton() {
	return (
		<div className={styles.container}>
			<div className={styles.heroesContainer}>
				<Form role='search' className={styles.searchContainer}>
					<input
						id='q'
						name='q'
						type='search'
						placeholder='Search'
						className={styles.input}
					/>
				</Form>
				<div className={styles.listContainer}>
					{Array.from({ length: 8 }).map((_, index) => (
						<SmallHeroCardSkeleton key={index} />
					))}
				</div>
			</div>
			<div className={styles.activeHeroContainer}></div>
		</div>
	)
}
