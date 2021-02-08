function ControlsCommon({currentSelection, removeProduct, clearFloor, print, save, fillFloor}) {
    return (
        <div className="controls-common">
            <div className="current">{currentSelection}</div>
            <div onClick={fillFloor} className="fill-floor">Fill Floor</div>
            <div onClick={removeProduct} className="clear-space">Clear Space</div>
            <div onClick={clearFloor}className="clear-all">Clear Floor</div>
            <div onClick={print} className="print">Print</div>
            <div onClick={save} className="save">Save</div>
        </div>
    )
}

export default ControlsCommon