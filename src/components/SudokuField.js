import React from "react"

export default function SudokuField(){
        const {field} = this.props;
        return(
            <input
                className="field"
                field={field.value || ""}
                readOnly={field.readonly}
                key={field.key}
                />
        )   
}
