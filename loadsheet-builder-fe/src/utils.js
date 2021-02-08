function toggleFloorSize(e){
    e.target.checked ? setFloorSize({kind: 'Semi Trailer', capacity: 26})
    :
    setFloorSize({kind: 'Single Unit', capacity: 10})
}


function showMoreProducts(e){
    let productCodes;
    console.log('function is working')
    if(e.target.checked){
        productCodes = [...Object.keys(productData.main), ...Object.keys(productData.special)];
        setProductListSize({size: 'less', codes:productCodes})
    } else {
        productCodes = Object.keys(productData.main)
        setProductListSize({size: 'more', codes:productCodes})
    }
}

function selectProduct(e){
    console.log('select product is working')
    console.log(e.target.innerText)
    const currentSelection = productData[e.target.innerText]
    setCurrentSelection(currentSelection);
}

function loadOffload(e){
    e.target.innerText = currentSelection
}

function removeProduct(){
    setCurrentSelection('')
}

function clearFloor(){
    const spaces = document.querySelectorAll('.pallet-space');
    spaces.forEach(space => space.innerText = '');
}

function print(){
    console.log('printing')
    window.print()
}

function save(){
    console.log('saving your document')
}

export {
    toggleFloorSize,
    showMoreProducts,
    selectProduct,
    loadOffload,
    removeProduct,
    clearFloor,
    print,
    save
}