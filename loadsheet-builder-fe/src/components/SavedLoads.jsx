import axios from "axios";

function SavedLoads({savedLoads, getOneSavedLoad}){
    const loads = savedLoads
    return (
        <>
            <label htmlFor="savedLoads"></label>
            <select onChange={getOneSavedLoad} name="" id="savedLoads">
                {loads.map((load, idx) => <option value={load.id}>{load.Name}</option>)}
            </select>
        </>
    )
}

export default SavedLoads