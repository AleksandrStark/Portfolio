function Toolbar(props) {

    

    return(
        <div>
    <button value="All" onClick={()=>{
        props.onSelectFilter(props.value)
        }}
    >
    All
    </button>
    <button value="Websites"onClick={()=>{
        props.onSelectFilter(props.value)}}
    >
    Websites
    </button>
    <button value="Flayers" onClick={()=>{
        props.onSelectFilter(props.value)}}
    >
    Flayers
    </button>
    <button value="Business Cards" onClick={()=>{
        props.onSelectFilter(props.value)}}
    >
    Business Cards
    </button>
    </div>

    )
}


export default Toolbar