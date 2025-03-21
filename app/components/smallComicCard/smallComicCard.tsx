import type { ComicSummary } from '~/types'
import styles from './smallComicCard.module.scss'
export default function SmallComicCard({ comic }: { comic: ComicSummary }) {
	return (
		<div className={styles.smallComicCardContainer}>
			<div className={styles.imageContainer}>
				{comic.image ? (
					<img src={comic.image} alt={comic.title} />
				) : (
					<img src={'/comic.svg'} alt={comic.title ? comic.title : 'Comics'} />
				)}
			</div>
			<div className={styles.infoContainer}>
				<h2 className={styles.title}>
					{comic.title ? comic.title : 'No information available'}
				</h2>
			</div>
		</div>
	)
}
