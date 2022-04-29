import "./Styles/FilterPills.css"

export default function FilterPills() {

    let categories = ["All","Smartphones","Laptops","Tech Explained"];

    return (
        <div className="filter-pills">

            {categories.map((category) => <div className="filter-pill text-m flex-center"><p>{category}</p></div>)}
            
        </div>
    )

}