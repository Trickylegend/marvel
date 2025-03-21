import styles from './smallHeroCardSkeleton.module.scss'

export default function SmallHeroCardSkeleton() {
	return (
		<div className={styles.smallHeroCard}>
			<div className={styles.imageContainer}>
				<div className={styles.skeleton}></div>
			</div>
			<div className={styles.infoContainer}>
				<div className={styles.skeletonName}></div>
			</div>
		</div>
	)
}
