const BASE_URL = 'https://swapi.dev/api/starships/?format=json';

const search = async (name) => {
    try{
        const res = await fetch(BASE_URL + `&search=${name}`);
        const data = await res.json();
        console.log(data);
        return data;
    }catch(e){
        console.log(e)
    }
    
}
search();

export { search }