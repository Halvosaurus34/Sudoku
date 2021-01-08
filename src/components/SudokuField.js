import React from "react"

export default function SudokuField(props){
        console.log("PROPS: ", props)
        // function handleChange(e){
        //         const value = value === "" ? "" : parseInt(e.target.value, 10);

        //         field.onChange({...field, value: value})
        // }
        return(
            <input
                className="field"
                value={props.value || ""}
                readOnly={props.readonly}
                key={props.key}
                
                />
        )   
}
