

const StarshipCard = ({ element }) => {
    return (
        <div>
          <h3>{element.name}</h3>
          <p>Class: {element.starship_class}</p>
          <p>Manufacturer: {element.manufacturer}</p>
          <p>Model: {element.model}</p>
        </div>
        )
}

export default StarshipCard;