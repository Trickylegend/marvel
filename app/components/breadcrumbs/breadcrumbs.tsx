import { useNavigate } from 'react-router'
import styles from './breadcrumbs.module.scss'

export default function Breadcrumbs() {
	const navigate = useNavigate()
	return (
		<div className={styles.container}>
			<button
				onClick={() => {
					navigate(-1)
				}}
			>
				<img src={'/back-arrow.svg'} alt='Назад' />
				<span>Back</span>
			</button>
		</div>
	)
}
