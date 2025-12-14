import "./Button.scss"

export default function Button(props){
    return (<button href="#see-all" aria-label={props.aria}>{props.children}</button>)
}