import React, { useEffect,useState } from "react";
var mistakes = 0
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
                console.log("handled click", value)
                
                const entry = Number(e.target.value)
                if (value){
                        console.log("VALUE PRESENT", value, "ENTRY: ", entry)
                        return
                } else if (!notes){
                        if (entry === solved) {
                                setStyle("rgb(124, 230, 124)")
                                getValues({defaultValue: entry,
                                        readOnly:true,
                                        row:row,
                                        col:col})
                                        console.log("correct")
                                        console.log("NEW VALUE: ", entry)
                                        return
                        } else if (entry !== 0){
                                setStyle("rgb(230, 84, 84)")
                                mistakes++
                                console.log("incorrect, total mistakes: ", mistakes)
                                return
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
            type="number"
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


