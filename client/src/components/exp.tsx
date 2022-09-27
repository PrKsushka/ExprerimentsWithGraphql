import React, {useEffect} from "react";

// const Exp:React.FunctionComponent=()=>{
//     useEffect(()=>{
//         fetch("https://events-api.dice.fm/v1/events?filter[London]&page[1]", {
//             headers:{
//                 'x-api-key':'dHmvC0ZXzF4h1mWldfur13c6s4Ix6wCF4OTzozXC'
//             }
//         }).then((res)=>{
//             return res.json()
//         }).then((res)=>{
//             const {data}=res;
//             console.log(data)
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }, [])
//     return(
//         <div>
//             dfkdjfkdjf
//         </div>
//     )
// }
const data = {
        "comments": [
            {
                "id": 1,
                "comment": "first comment",
                "children": [
                    {
                        "id": 2,
                        "comment": "child comment1"
                    },
                    {
                        "id": 3,
                        "comment": "child comment2"
                    },
                    {
                        "id": 4,
                        "comment": "child comment3"
                    }
                ]
            },
            {
                "id": 5,
                "comment": "second comment",
                "children": [
                    {
                        "id": 6,
                        "comment": "child comment4"
                    },
                    {
                        "id": 7,
                        "comment": "child comment5"
                    },
                    {
                        "id": 8,
                        "comment": "child comment6"
                    }
                ]
            }
        ]
}
type Comment = {
    id: number;
    comment: string;
}
interface Comments {
    arr?: Array<Comment>
}
const Exp:React.FunctionComponent = () => {
    return (
        <>
            {
                data.comments.map((el)=>(
                    <ul key={el.id}>
                        <li>{el.comment}</li>
                            <ul>
                            {
                                el.children.map((el)=>(
                                    <li>{el.comment}</li>
                                ))
                            }
                            </ul>
                    </ul>
                ))
            }
        </>
    )
}
export default Exp;