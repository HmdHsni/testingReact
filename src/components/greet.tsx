type greetProps={
    name?:string
}

export const Greet=(props:greetProps)=>{
    return (<div>hello{props.name}</div>)
    // تست PR برای workflow coverage
}