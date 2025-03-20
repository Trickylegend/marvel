import { Link } from 'react-router'
import { getComics } from '~/api/getComics'
import ComicCard from '~/components/comicCard/comicCard'
import type { Comic } from '~/types'
import type { Route } from './+types/comics'
import styles from './comics.module.scss'

export async function loader() {
	const comics = await getComics({ limit: 6 })
	console.log(comics)
	return { comics }
}

export default function Comics({ loaderData }: Route.ComponentProps) {
	const { comics } = loaderData
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Comics</h1>
			<div className={styles.gridContainer}>
				{comics.map((comic: Comic) => (
					<Link key={comic.id} to={`/comics/${comic.id}`}>
						<ComicCard comic={comic} />
					</Link>
				))}
			</div>
		</div>
	)
}
