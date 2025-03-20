import { Link } from 'react-router'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { ComicSummary } from '~/types'
import SmallComicCard from '../smallComicCard/smallComicCard'
import styles from './comicsSlider.module.scss'

export default function ComicsSlider({ comics }: { comics: ComicSummary[] }) {
	return (
		<div className={styles.sliderContainer}>
			<Swiper spaceBetween={10} slidesPerView={'auto'}>
				{comics.map((comic, index) => (
					<SwiperSlide key={index} className={styles.swiperSlide}>
						<Link to={`/comics/${comic.id}`}>
							<SmallComicCard comic={comic} />
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
