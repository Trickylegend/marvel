import type { Hero } from '~/types'
import styles from './heroCard.module.scss'

export default function heroCard({ hero }: { hero: Hero }) {
	return (
		<div className={styles.heroCardContainer}>
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
				{hero.description && (
					<p className={styles.description}>{hero.description}</p>
				)}
			</div>
		</div>
	)
}
