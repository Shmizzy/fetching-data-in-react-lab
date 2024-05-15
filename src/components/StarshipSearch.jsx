import { useState } from "react"

const StarshipSearch = (props) => {
    const [starshipInput, setStarshipInput] = useState('')

    const handleSubmit = async(event) => {
        event.preventDefault();
        await props.fetchStarship(starshipInput)
        setStarshipInput('');
    }
    
    return (
        <section>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="starship">Search Term: </label>
                <input type="text" id='starship' value={starshipInput} onChange={(event) => {setStarshipInput(event.target.value)}} />
                <button type='submit'>Search</button>
            </form>
        </section>
    )
}
export default StarshipSearch;