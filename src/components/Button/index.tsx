type PropTypes = {className:string;label:string; onClick ?: () => void}

export default function Button(props:PropTypes){
    return(
        <button className={props.className}>{props.label}</button>
    )
}