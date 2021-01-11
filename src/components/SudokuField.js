import React, { useEffect,useState } from "react";
var mistakes = 0
export default function SudokuField(props) {
        const [value, setValue] = useState();
        const [readOnly, setReadOnly] = useState(false);
        const [row, setRow] = useState();
        const [col, setCol] = useState();
        const [solved, setSolved] = useState();
        const [style, setStyle] = useState({});
        const [notes, setNotes] = useState();
        const [notesEnabled, setEnabled] = useState(false)
        // console.log("Cell (", props.row,",",props.col,"):", props)
        function getValues(){
                setValue(props.defaultValue);
                setReadOnly(props.readOnly);
                setRow(props.row);
                setCol(props.col);
                setSolved(props.solved)
                setNotes(props.notes);
                setEnabled(props.notesEnabled)
                console.log("UPDATED FIELD", props.notesEnabled)
        }

        useEffect(()=> {
                getValues()
                
        })
        


        function handleClick(e){
                console.log("handled click", value)
                const entry = Number(e.target.value) || ""
                if (value){
                        console.log("VALUE PRESENT", value, "ENTRY: ", entry)
                        return
                } else if (!notesEnabled){
                        if (entry === solved) {
                                setStyle({background: "rgb(124, 230, 124)"})
                                getValues({defaultValue: entry,
                                        readOnly:true,
                                        row:row,
                                        col:col})
                                        console.log("correct")
                                        console.log("NEW VALUE: ", entry)
                                        console.log("FIELD ENABLED: ",notesEnabled)

                                        return
                        } else if (entry !== 0){
                                setStyle({background:"rgb(230, 84, 84)"})
                                mistakes++
                                console.log("incorrect, total mistakes: ", mistakes)
                                return
                        }
                } else if (notesEnabled){
                        console.log("NOTES")
                        setStyle({background:"yellow",
                                fontSize:".8rem",
                                textAlign:"left",
                                bottom:"4.8px"})
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
                style={style}
                className="field"
                defaultValue={value || ""}
                readOnly={readOnly}
                key={(row)*9+(col)}
                notes={notes}
                notesEnabled={notesEnabled}
                onChange={handleClick}
                
                />
        )   }


