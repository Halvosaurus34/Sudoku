import React, { useEffect,useState } from "react";

export default function SudokuField(props) {
        const [value, setValue] = useState();
        const [readOnly, setReadOnly] = useState();
        const [row, setRow] = useState();
        const [col, setCol] = useState();

        console.log("Cell (", props.row,",",props.col,"):", props)

        function getValues() {
                setValue(props.defaultValue);
                setReadOnly(props.readOnly);
                setRow(props.row);
                setCol(props.col)
        }

        useEffect(()=> {
                getValues();
                return
        }, [])
        // console.log("PROPS: ", props)
        // function handleChange(e){
        //         const value = value === "" ? "" : parseInt(e.target.value, 10);

        //         field.onChange({...field, value: value})
        // }
        return(
            <input
                className="field"
                defaultValue={value || ""}
                readOnly={readOnly}
                key={(row)*9+(col)}
                />
        )   }


