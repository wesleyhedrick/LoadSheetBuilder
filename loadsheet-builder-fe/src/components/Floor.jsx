function Floor({capacity, loadOffload}) {

    return (
        <div className={capacity > 10 ? 'floor-trailer':'floor-single'}>
            {Array.from({length: capacity}, ((_,i) => i)).map(item => {
                return <div onClick={loadOffload} className={capacity > 10 ? 'pallet-space-trailer':'pallet-space'}></div>}
            )}
        </div>
    )
}

export default Floor