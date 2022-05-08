import "./Styles/FilterPills.css";
import { useFilter } from "../Filters/FilterContext";

export default function FilterPills() {

    let categories = ["All","Smartphones","Laptops","Tech Explained"];

    const { filterState, filterDispatch } = useFilter();
    const { filterSelected } = filterState;

    return (
        <div className="filter-pills">

            {categories.map((category) => <div className={`filter-pill text-m flex-center ${filterSelected === category ? "filter-pill-selected" : ""}`} onClick={() => filterDispatch({ type: "SETFILTER", payload: category})}><p>{category}</p></div>)}
            
        </div>
    )

}