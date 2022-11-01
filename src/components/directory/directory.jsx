import CategoryItem from "../category-items/category-item";
import './directory.styles.scss'
const Directory = (props) => {
  return (
    <div className="directory-container">
      {props.categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
