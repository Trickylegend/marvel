import { Link } from 'react-router'

import type { Hero } from '~/types'
import SmallComicCard from '../smallComicCard/smallComicCard'
import styles from './heroCard.module.scss'

export default function heroCard({ hero }: { hero: Hero }) {
	return (
		<div className={styles.heroCardContainer}>
			<div className={styles.imageContainer}>
				<img src={hero.image} alt={hero.name} />
			</div>
			<div className={styles.infoContainer}>
				<h2 className={styles.name}>{hero.name}</h2>
				<p className={styles.description}>{hero.description}</p>
			</div>
		</div>
	)
}
