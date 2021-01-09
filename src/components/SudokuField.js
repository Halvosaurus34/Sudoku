import React, { useEffect,useState } from "react";

const SudokuField = (props) => {
        const [value, setValue] = useState();
        const [readOnly, setReadOnly] = useState();
        const [row, setRow] = useState();
        const [col, setCol] = useState();

        console.log("PROPS:", props)

        const getValues = () => {
                setValue(props.value);
                setReadOnly(props.readonly);
                setRow(props.row);
                setCol(props.col)
        }

        useEffect(()=> {
                getValues();
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


export default SudokuField;
