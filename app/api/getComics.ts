import type { Comic } from '~/types'
import { fetchData, type FetchParams } from './config'

export async function getComics({
	id,
	limit,
	offset,
}: FetchParams = {}): Promise<Comic[]> {
	const comics = await fetchData<Comic[]>('comics', { id, limit, offset })
	return comics
}
