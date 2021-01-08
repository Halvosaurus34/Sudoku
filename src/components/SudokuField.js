import React from "react"

export default function SudokuField(props){
        console.log("PROPS: ", props)
        const field = props;
        return(
            <input
                className="field"
                field={field.value || ""}
                value={field.value || ""}
                readOnly={field.readonly}
                key={field.key}
                />
        )   
}
