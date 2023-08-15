import React from 'react'
interface Props{
    value: string;
}
export default function Alert({ value }: Props) {
    return (
        <div>
            <div className="alert alert-danger" role="alert">
                {value}
            </div>
        </div>
    )
}
