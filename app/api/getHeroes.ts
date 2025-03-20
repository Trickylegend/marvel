import type { Hero } from '~/types'
import { fetchData, type FetchParams } from './config'

export async function getHeroes({
	id,
	name,
	limit,
	offset,
}: FetchParams = {}): Promise<Hero[]> {
	const heroes = await fetchData<Hero[]>('heroes', { id, name, limit, offset })
	return heroes
}
