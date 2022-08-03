import React, {useEffect} from "react";

const Exp:React.FunctionComponent=()=>{
    useEffect(()=>{
        fetch("https://events-api.dice.fm/v1/events?filter[London]&page[1]", {
            headers:{
                'x-api-key':'dHmvC0ZXzF4h1mWldfur13c6s4Ix6wCF4OTzozXC'
            }
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            const {data}=res;
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    return(
        <div>
            dfkdjfkdjf
        </div>
    )
}
export default Exp;