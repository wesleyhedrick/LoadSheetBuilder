import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

import './App.css';
import Floor from './components/Floor';
import FloorSize from './components/FloorSize';
import ProductCodesContainer from './components/ProductCodesContainer';
import ControlsCommon from './components/ControlsCommon';
import ControlsLessUsed from './components/ControlsLessUsed';
import ShowMoreProducts from './components/ShowMoreProducts';
import { useState, useEffect } from 'react'
import SaveLoad from './components/SaveLoad';
import axios from 'axios';

// const productData = require('./products.json')

function App() {
    const [productData, setProductData] = useState([])
    const [floor, setFloorSize] = useState({kind:'Single Unit', capacity: 10});
    const [productListSize, setProductListSize] = useState({size:'more', codes:[1,2,3]})
    const [currentSelection, setCurrentSelection] = useState('')
    const [saving, isSaving] = useState(false)
    const [savedLoads, setSavedLoads] = useState([])
    const [oneSavedLoad, setOneSavedLoad] = useState([])

    useEffect(()=> {
        async function getProducts(){
            const productCAndVs = await axios.get('/productCandVs');
            setProductData(productCAndVs.data)
            setProductListSize({size: 'more', codes: Object.keys(productCAndVs.data.main)})
        }
        getProducts();
    }, []);

    useEffect(()=>{
        async function getSavedLoads(){
            const savedLoads = await axios.get('/saved-loads');
            const slNames = [{id: 0, Name: 'Saved Loads'}, ...savedLoads.data]
            setSavedLoads(slNames)
        }
        getSavedLoads();
    }, [])
    
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
        const currentSelection = productData.main[e.target.innerText] 
                                || productData.special[e.target.innerText]
        setCurrentSelection(currentSelection);
    }
    
    function loadOffload(e){
        e.target.innerText = currentSelection
    }
    
    function removeProduct(){
        setCurrentSelection('')
    }
    
    function clearFloor(){
        const spaces = document.querySelectorAll(['[class^=pallet-space]']);
        spaces.forEach(space => space.innerText = '');
    }
    
    function print(){
        console.log('printing')
        window.print()
    }
    function save(){
        isSaving(true)
    }    

    function cancelSave(){
        isSaving(false);
    }
    
    async function getOneSavedLoad(e){
        console.log('function is working')
        const id = e.target.value
        console.log(id)
        if(id==='0'){
            console.log('zero')
            return
        }
        const savedLoad = await axios.get(`/saved-loads/get-load/${id}`)
        const savedLoadData = JSON.parse(savedLoad.data.Data)
        console.log(savedLoadData)
        setOneSavedLoad(savedLoadData)
        const palletSpaces = document.querySelectorAll('[class^=pallet-space')
        savedLoadData.forEach((item, idx) => palletSpaces[idx].innerText = item)   
    }
    function fillFloor() {
        const palletSpaces = document.querySelectorAll('[class^=pallet-space]');
        palletSpaces.forEach(space => space.innerText = currentSelection)
    }
    return (
    <Router>
        <Switch>
            <Route exact path='/'>
                <>
                    <div className={saving ? 'displayed':'hidden'}>   
                        <SaveLoad cancelSave={cancelSave} isSaving={isSaving} saving={saving}/>
                    </div>
                    <ControlsLessUsed getOneSavedLoad={getOneSavedLoad} savedLoads={savedLoads}/>
                    <div className="main">
                        <div className="floor">
                            <FloorSize kind={floor.kind} toggleFloorSize={toggleFloorSize} />
                            <Floor loadOffload={loadOffload} capacity={floor.capacity}/> 
                            
                        </div>
                        <div className="product-selection">
                            <ControlsCommon save={save} print={print} 
                                clearFloor={clearFloor} 
                                fillFloor={fillFloor}
                                currentSelection={currentSelection} 
                                removeProduct={removeProduct}/>
                            <div className="products-container">
                                <ShowMoreProducts size={productListSize.size} showMoreProducts={showMoreProducts}/>
                                <ProductCodesContainer productData={productData}
                                                productCodes={productListSize.codes}
                                                setCurrentSelection={selectProduct}/>
                            </div>
                        </div>
                    </div>
                </>

            </Route> 
        </Switch>

    </Router>
    );
}

export default App;
