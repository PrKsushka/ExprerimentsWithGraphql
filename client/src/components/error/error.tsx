import React from "react";

type ErrorProps = {
    text: string
}
const Error: React.FunctionComponent<ErrorProps> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    )
}
export default Error;