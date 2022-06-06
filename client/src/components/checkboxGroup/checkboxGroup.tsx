import React from "react";

type CheckboxElement = {
    name: string;
    value: string;
    text: string;
}

interface CheckboxGroupTypes {
    arr: Array<CheckboxElement>,
    func: any;
}

const CheckboxGroup: React.FunctionComponent<CheckboxGroupTypes> = ({arr, func}) => {
    return (
        <>
            {
                arr.map((el)=>(
                    <label>
                        <input type="checkbox" name={el.name} value={el.value} onChange={func}/>
                        {el.text}
                    </label>
                ))
            }
        </>
    )
}
export default CheckboxGroup;