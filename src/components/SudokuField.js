import React, { useEffect,useState } from "react";

export default function SudokuField(props) {
        const [value, setValue] = useState();
        const [readOnly, setReadOnly] = useState();
        const [row, setRow] = useState();
        const [col, setCol] = useState();
        const [solved, setSolved] = useState();
        const [style, setStyle] = useState();
        const [notes, setNotes] = useState();
        const [notesEnabled, setEnabled] = useState(false)

        console.log("Cell (", props.row,",",props.col,"):", props)

        function getValues(val) {
                setValue(val.defaultValue);
                setReadOnly(val.readOnly);
                setRow(val.row);
                setCol(val.col);
                setSolved(val.solved)
                setNotes(val.notes);
                setEnabled(val.notesEnabled)
        }

        useEffect(()=> {
                getValues(props);
                return
        }, [])

        function handleClick(e){
                const entry = e.target.value
                const val = value === "" ? "" : parseInt(entry, 10);
                if (!notes){
                        if (val === solved) {
                                setStyle("white")
                                getValues({defaultValue: val,
                                        readOnly:readOnly,
                                        row:row,
                                        col:col})
                        } else {
                                setStyle("rgb(230, 84, 84)")
                                getValues({defaultValue: val,
                                        readOnly:readOnly,
                                        row:row,
                                        col:col})
                        }
                } else if (notes){
                        console.log("NOTES")
                }
        }
        // console.log("PROPS: ", props)
        // function handleChange(e){
        //         const value = value === "" ? "" : parseInt(e.target.value, 10);

        //         field.onChange({...field, value: value})
        // }
        return(
            <input
                style={{background:style}}
                className="field"
                defaultValue={value || ""}
                readOnly={readOnly}
                key={(row)*9+(col)}
                notes={notes}
                notesEnabled={notesEnabled}
                onChange={handleClick}
                />
        )   }


