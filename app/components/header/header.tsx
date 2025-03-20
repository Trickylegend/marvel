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
					Comics
				</NavLink>
				<NavLink
					to={'/heroes'}
					className={({ isActive, isPending }) =>
						`${styles.link}
						${isActive && styles.active}
						${isPending && styles.pending}`
					}
				>
					Heroes
				</NavLink>
			</nav>
		</div>
	)
}
