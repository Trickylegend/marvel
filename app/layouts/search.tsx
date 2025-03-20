import { Outlet } from 'react-router'
import SearchForm from '~/components/searchForm/searchForm'

export default function Search() {
	return (
		<>
			<SearchForm />
			<Outlet />
		</>
	)
}
