function ProductCodesContainer({setCurrentSelection,productCodes}){
    
    return (
        <div className="codes-container">
            {productCodes.map(product => <div onClick={setCurrentSelection} className="product">{product}</div>)}
        </div>
    );
}

export default ProductCodesContainer