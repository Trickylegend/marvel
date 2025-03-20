import { Outlet } from 'react-router'
import Breadcrumbs from '~/components/breadcrumbs/breadcrumbs'

export default function Navigation() {
	return (
		<>
			<Breadcrumbs />
			<Outlet />
		</>
	)
}
