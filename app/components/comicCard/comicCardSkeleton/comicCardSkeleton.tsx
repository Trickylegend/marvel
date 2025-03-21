import styles from './comicCardSkeleton.module.scss'

export default function ComicCardSkeleton() {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<div className={styles.skeleton}></div>
			</div>
			<div className={styles.infoContainer}>
				<div className={styles.titleSkeleton}></div>
				<div className={styles.priceSkeleton}></div>
			</div>
		</div>
	)
}
