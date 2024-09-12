

const Orderlist=(prop)=>{

    const {list} = prop;
    return (
        <ol>
        {list.map((each)=>{
            return (
                <li>{each}</li>
            )
        })}
        </ol>
    )
}

export default Orderlist;