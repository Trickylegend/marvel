import data from './data.json'

export type DataType = 'comics' | 'heroes'

export interface FetchParams {
	id?: string
	name?: string | null
	limit?: number
	offset?: number
}

export async function fetchData<T>(
	type: DataType,
	{ id, name, limit, offset }: FetchParams = {}
): Promise<T> {
	return new Promise<T>((resolve, reject) => {
		setTimeout(() => {
			const items = data[type]
			if (!items) {
				return reject(new Error(`Нет данных для типа "${type}"`))
			}

			let result: unknown = items

			if (id !== undefined && Array.isArray(result)) {
				result = result.filter((item: any) => String(item.id) === id)
			}

			if (name !== null && name !== undefined && Array.isArray(result)) {
				result = result.filter((item: any) => {
					if (typeof item.name === 'string') {
						return item.name.toLowerCase().includes(name?.toLowerCase())
					}
					return false
				})
			}

			if (
				(typeof offset === 'number' || typeof limit === 'number') &&
				Array.isArray(result)
			) {
				const start = offset ?? 0
				const end = limit !== undefined ? start + limit : undefined
				result = result.slice(start, end)
			}

			resolve(result as T)
		}, 300)
	})
}
