import SavedLoads from "./SavedLoads";

function ControlsLessUsed({savedLoads, getOneSavedLoad}) {
    return (
        <div className="controls-less-used">    
            <SavedLoads getOneSavedLoad={getOneSavedLoad} savedLoads={savedLoads}/>
            <div className="add-product">Add Product</div>
            <div className="remove-product">Remove Product</div>
            <div className="restore-defaults">Restore Defaults</div>
        </div>

    )
}

export default ControlsLessUsed