import beer from "/icons/Beer.png";
import wine from "/icons/Wine-glass.png";
import "./categories.css";
const Categories = () => {
  return (
    <div className="category-container">
      <div className="category-title">
        <h3>Drink Category</h3>
        <a href="/store">See all</a>
      </div>
      <div className="buttons">
        <button>All</button>
        <button>
          {" "}
          <img src={beer} alt="beer icon" />
          Beer
        </button>
        <button>
          <img src={wine} alt="beer icon" />
          Wine
        </button>
      </div>
    </div>
  );
};

export default Categories;
