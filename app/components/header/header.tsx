import { NavLink } from 'react-router'
import styles from './header.module.scss'

export default function Header() {
	return (
		<div className={styles.container}>
			<nav className={styles.navigationContainer}>
				<NavLink
					to={'/'}
					className={({ isActive, isPending }) =>
						`${styles.link}
						${isActive && styles.active}
						${isPending && styles.pending}`
					}
				>
					Комиксы
				</NavLink>
				<NavLink
					to={'/heroes'}
					className={({ isActive, isPending }) =>
						`${styles.link}
						${isActive && styles.active}
						${isPending && styles.pending}`
					}
				>
					Персонажи
				</NavLink>
			</nav>
		</div>
	)
}
