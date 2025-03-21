import { cache } from '~/api/cache'

export async function loadWithCache<T>(
	cacheKey: string,
	serverLoader: () => Promise<T>,
	isInitialRequest: { current: boolean }
): Promise<T> {
	if (isInitialRequest.current) {
		isInitialRequest.current = false
		const serverData = await serverLoader()
		cache.set(cacheKey, serverData)
		return serverData
	}

	const cachedData = await cache.get(cacheKey)
	if (cachedData) {
		return cachedData as T
	}

	const serverData = await serverLoader()
	cache.set(cacheKey, serverData)
	return serverData
}
