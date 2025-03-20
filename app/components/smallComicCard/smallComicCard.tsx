import type { ComicSummary } from '~/types'
import styles from './smallComicCard.module.scss'
export default function SmallComicCard({ comic }: { comic: ComicSummary }) {
	return (
		<div className={styles.smallComicCardContainer}>
			<div className={styles.imageContainer}>
				<img src={comic.image} alt={comic.title} />
			</div>
			<div className={styles.infoContainer}>
				<h2 className={styles.title}>{comic.title}</h2>
			</div>
		</div>
	)
}
