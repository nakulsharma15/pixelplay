import "./Styles/FilterPills.css";
import { useFilter } from "../Filters/FilterContext";
import useAxios from "../Utils/useAxios";

export default function FilterPills() {

    let categories = [];
    const {responseData , isLoading} = useAxios("/api/categories");

    if(isLoading === false)
    categories = responseData.categories;

    const { filterState, filterDispatch } = useFilter();
    const { filterSelected } = filterState;

    return (
        <div className="filter-pills">

            {categories.map(({categoryName}) => <div className={`filter-pill text-m flex-center ${filterSelected ===categoryName ? "filter-pill-selected" : ""}`} onClick={() => filterDispatch({ type: "SETFILTER", payload: categoryName})}><p>{categoryName}</p></div>)}
            
        </div>
    )

}