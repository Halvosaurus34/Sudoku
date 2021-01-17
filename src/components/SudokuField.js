import React, { useEffect,useState } from "react";
var mistakes = 0

export default function SudokuField(props) {


        const [value, setValue] = useState();
        const [preValue, setpreValue] = useState();
        const [readOnly, setReadOnly] = useState();
        const [preReadOnly, setPreReadOnly] = useState();
        const [row, setRow] = useState();
        const [col, setCol] = useState();
        const [solved, setSolved] = useState();
        const [style, setStyle] = useState({});
        const [notesenabled, setEnabled] = useState(false)
        const [box, setBox] = useState()
        // console.log("Cell (", props.row,",",props.col,"):", props)
        function getValues(val){
                setValue(val.defaultValue);
                setReadOnly(val.readOnly);
                setRow(val.row);
                setCol(val.col);
                setSolved(val.solved)
                setEnabled(val.notesenabled)
                setBox(val.box)
                console.log(val)
        }
        
        useEffect(()=> {
                getValues(props)  
                // console.log("PROPSOBJ: ",propsObject)
              
        }, [])

        useEffect(()=> {
                setEnabled(props.notesenabled)  
                // console.log("PROPSOBJ: ",propsObject)
              
        })


        function handleClick(e){
                const entry = Number(e.target.value) || null
                if (!notesenabled){
                        if (entry === solved) {
                                getValues({defaultValue: entry,
                                        readOnly:true,
                                        row:row,
                                        col:col,
                                        solved:solved,
                                        notesenabled:false})
                                        setStyle({background: "rgb(124, 230, 124)",
                                textAlign:"center"})

                        } else if (entry !== 0){
                                setStyle({background:"rgb(230, 84, 84)"})
                                getValues({defaultValue: entry,
                                        readOnly:false,
                                        row:row,
                                        col:col,
                                        notesenabled:false,
                                        solved:solved})

                                mistakes++
                                console.log("incorrect, total mistakes: ", mistakes)
                        }
                } else{
                        console.log("NOTES")

                        setStyle({
                                fontSize:".7rem",
                                textAlign:"left",
                                paddingBottom:"1.4rem"})
                }
        }
        // var propsObject = {defaultValue:props.defaultValue,
        //         readOnly:props.readOnly,
        //         row:props.row,
        //         col:props.col,
        //         solved:props.solved,
        //         notesEnabled:props.notesEnabled}

        return(
            <input
                type="number"
                style={style}
                className="field"
                defaultValue={value || ""}
                readOnly={readOnly}
                key={(row)*9+(col)}
                notesEnabled={notesenabled}
                onChange={handleClick}
                box={box}
                
                />
        )   }


