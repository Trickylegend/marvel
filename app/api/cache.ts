import { LRUCache } from 'lru-cache'

const options = {
	max: 100,
	ttl: 1000 * 60 * 5,
}

export const cache = new LRUCache(options)
