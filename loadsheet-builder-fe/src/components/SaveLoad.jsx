import axios from 'axios'
import { useState } from 'react'

function SaveLoad({isSaving, cancelSave}) {
    const [loadName, setLoadName] = useState('')
    
    async function saveLoad(e) {
            const loadedItems = document.querySelectorAll('[class^=pallet-space]')
            const tempArray = [];
            loadedItems.forEach(item => {
                if(item.innerText){
                    tempArray.push(item.innerText)
                }
            })
            const loadedItemsString = JSON.stringify(tempArray);
            
            e.preventDefault();
            console.log('loadName', loadName)
            await axios.post('/save', {
                loadName,
                items: loadedItemsString 
                
            });
            const loadNameTextBox = document.querySelector('input[type="text"]')
            loadNameTextBox.value = '';
            isSaving(false)
    }


    return (
        <form onSubmit={saveLoad} method="POST">
            <label htmlFor="save-document">What would you like to call this load?</label>
            <input value={loadName} onChange={e => setLoadName(e.target.value)} type="text" name="document-name" id="save-document"/>
            <input type="submit" value="Submit"/>
            <input onClick={cancelSave} type="button" value="Cancel"/>
        </form>
    )
}

export default SaveLoad