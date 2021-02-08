function ShowMoreProducts({size, showMoreProducts}) {
    return (
        <div className="show-more-products">
            <label htmlFor="show-more-products">Show {size}</label>
            <input onChange={showMoreProducts} type="checkbox" name="" id="show-more-products"/>
        </div>
    )
}

export default ShowMoreProducts