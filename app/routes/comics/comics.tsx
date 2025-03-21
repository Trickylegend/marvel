import { useEffect } from 'react'
import { Link } from 'react-router'
import { getComics } from '~/api/getComics'
import ComicCard from '~/components/comicCard/comicCard'
import {
	fetchMoreComics,
	setInitialComics,
} from '~/redux/features/comics/comicsSlice'
import { useAppDispatch, useAppSelector } from '~/redux/hooks'
import type { RootState } from '~/redux/store'
import type { Comic } from '~/types'
import type { Route } from './+types/comics'
import styles from './comics.module.scss'

export async function loader() {
	const comics = await getComics({ limit: 8 })
	return { comics }
}

export default function Comics({ loaderData }: Route.ComponentProps) {
	const { comics: initialComics } = loaderData

	const { comics, offset, limit, loading, error } = useAppSelector(
		(state: RootState) => state.comics
	)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (comics.length === 0 && initialComics) {
			dispatch(setInitialComics(initialComics))
		}
	}, [initialComics, comics.length, dispatch])

	const handleLoadMore = () => {
		dispatch(fetchMoreComics({ limit, offset }))
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Comics</h1>
			<div className={styles.gridContainer}>
				{comics.length && comics.length > 0 ? (
					comics.map((comic: Comic) => (
						<Link key={comic.id} to={`/comics/${comic.id}`}>
							<ComicCard comic={comic} />
						</Link>
					))
				) : (
					<div className={styles.dataNotFound}>Data Not Found</div>
				)}
			</div>
			{comics.length && comics.length > 0 && (
				<div className={styles.loadMoreContainer}>
					<button onClick={handleLoadMore} disabled={loading}>
						{loading ? 'Загрузка...' : 'Показать ещё'}
					</button>
					{error && <p className={styles.error}>Ошибка: {error}</p>}
				</div>
			)}
		</div>
	)
}
