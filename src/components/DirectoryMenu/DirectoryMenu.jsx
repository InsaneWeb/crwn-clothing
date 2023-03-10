import './DirectoryMenu.scss'
import CategoryItem from '../CategoryItem/CategoryItem'

const DirectoryMenu = ({ categories }) => {
	return (
		<div className="directory-container">
			{categories.map(category => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	)
}

export default DirectoryMenu
