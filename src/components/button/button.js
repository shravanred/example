

export const Buttonstyle=(prop)=>{

    const {bgColor, width, height, text, onPress}= prop;
    return(
        <button onClick={onPress} style={{backgroundColor: bgColor, width: width, height: height}}>{text}</button> 
    )
}