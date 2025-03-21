import { getComics } from '~/api/getComics'
import type { Route } from './+types/comic'
import styles from './comic.module.scss'

export async function loader({ params }: Route.LoaderArgs) {
	const comics = await getComics({ id: params.comicId })
	return { comic: comics[0] || {}}
}

export default function Comic({ loaderData }: Route.ComponentProps) {
	const comic = loaderData.comic
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
				<div className={styles.textContainer}>
					<h3 className={styles.title}>
						{comic.title ? comic.title : 'No information available'}
					</h3>
					{comic.description && (
						<p className={styles.description}>{comic.description}</p>
					)}
				</div>
				<div className={styles.additionalInfo}>
					<div className={styles.shortInfoContainer}>
						{comic.pageCount && (
							<div className={styles.shortInfo}>
								<div className={styles.imageContainer}>
									<img src={'/file.svg'} alt='pages' />
								</div>
								<h5 className={styles.text}>{comic.pageCount} pages</h5>
							</div>
						)}
						{comic.language && (
							<div className={styles.shortInfo}>
								<div className={styles.imageContainer}>
									<img src={'/globe.svg'} alt='language' />
								</div>
								<h5 className={styles.text}>{comic.language}</h5>
							</div>
						)}
					</div>
					<div className={styles.priceContainer}>
						<div className={styles.price}>
							$ {comic.price ? comic.price : 'Price'}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
