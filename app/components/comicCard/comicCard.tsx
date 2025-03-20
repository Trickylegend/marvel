import type { ComicSummary } from '~/types'
import styles from './comicCard.module.scss'

export default function ComicCard({ comic }: { comic: ComicSummary }) {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img src={comic.image} alt={comic.title} />
			</div>
			<div className={styles.infoContainer}>
				<h3 className={styles.name}>{comic.title}</h3>
				{comic.price && <p className={styles.price}>${comic.price}</p>}
			</div>
		</div>
	)
}
