import styles from './comicSkeleton.module.scss'

export default function ComicSkeleton() {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<div className={styles.skeleton} />
			</div>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<div className={styles.titleSkeleton} />
					<div className={styles.descriptionSkeleton} />
				</div>
				<div className={styles.additionalInfo}>
					<div className={styles.shortInfoContainer}>
						<div className={styles.shortInfo}>
							<div className={styles.imageContainer}>
								<div className={styles.iconSkeleton} />
							</div>
							<div className={styles.textSkeleton} />
						</div>
						<div className={styles.shortInfo}>
							<div className={styles.imageContainer}>
								<div className={styles.iconSkeleton} />
							</div>
							<div className={styles.textSkeleton} />
						</div>
					</div>
					<div className={styles.priceContainer}>
						<div className={styles.priceSkeleton} />
					</div>
				</div>
			</div>
		</div>
	)
}
