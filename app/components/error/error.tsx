import { useNavigate } from 'react-router'
import styles from './error.module.scss'

export default function Error() {
	const navigate = useNavigate()
	const handleBackClick = () => {
		navigate(-1)
	}
	return (
		<div className={styles.errorContainer}>
			<div className={styles.imageContainer}>
				<img src={'/error.svg'} alt='Error occurred' />
			</div>
			<div className={styles.messageContainer}>
				<h1>Oops, something went wrong!</h1>
				<button onClick={handleBackClick} className={styles.returnButton}>
					Return back
				</button>
			</div>
		</div>
	)
}
