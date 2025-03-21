import ComicCardSkeleton from '~/components/comicCard/comicCardSkeleton/comicCardSkeleton'
import styles from './comicsSkeleton.module.scss'

export default function ComicsSkeleton() {
	return (
		<div className={styles.comicsSkeletonContainer}>
			<h1 className={styles.pageTitle}>Comics</h1>
			<div className={styles.gridContainer}>
				{Array.from({ length: 8 }).map((_, index) => (
					<ComicCardSkeleton key={index} />
				))}
			</div>
		</div>
	)
}
