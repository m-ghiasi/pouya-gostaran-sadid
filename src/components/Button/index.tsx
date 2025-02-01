type PropTypes = {label:string; onClick ?: () => void}

export default function Button(props:PropTypes){
    return(
        <button>{props.label}</button>
    )
}