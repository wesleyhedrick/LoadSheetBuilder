function FloorSize({kind, toggleFloorSize}) {
    return (
        <div className="floor-size">
            <label htmlFor="floor-size">{kind}
                <input onChange={toggleFloorSize} type="checkbox" name="" id="floor-size" />
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default FloorSize