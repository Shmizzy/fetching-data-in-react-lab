import StarshipCard from "./StarshipCard";

const StarshipList = (props) => {
   
   return(
    <section>
        <h2>Starships</h2>
        <h3>Number of results: {props.starship.length}</h3>
        {
            props.starship.map((element, index) => {
                return <StarshipCard element={element} key={index}/>
            })
        }
    </section>
   )
}

export default StarshipList;