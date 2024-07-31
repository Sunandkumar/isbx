import { useLocation } from "react-router-dom";
import NewCard from "./NewCard";


const AllInstitutes =() => {
    const location = useLocation();
    const { homecardsData } = location.state || { homecardsData: [] };

    const limitedCards = homecardsData.splice(0,8);

    return(
        <div>
            <div className="new-card-grid">
            {limitedCards.map((cardData, index) => (
            <NewCard key={index} {...cardData} />
            ))}
</div>

        </div>
    );
}
export default AllInstitutes;