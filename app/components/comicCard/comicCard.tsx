import type { ComicSummary } from '~/types'
import styles from './comicCard.module.scss'

export default function ComicCard({ comic }: { comic: ComicSummary }) {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				{comic.image ? (
					<img src={comic.image} alt={comic.title} />
				) : (
					<img src={'/comic.svg'} alt={comic.title ? comic.title : 'Comics'} />
				)}
			</div>
			<div className={styles.infoContainer}>
				<h3 className={styles.name}>
					{comic.title ? comic.title : 'No information available'}
				</h3>
				{comic.price && <p className={styles.price}>${comic.price}</p>}
			</div>
		</div>
	)
}
