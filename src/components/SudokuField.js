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
        const [style, setStyle] = useState();
        const [notesenabled, setEnabled] = useState(false)
        const [box, setBox] = useState()
        // console.log("Cell (", props.row,",",props.col,"):", props)
        function getValues(val){
                setValue(val.defaultValue);
                setSolved(val.solved)
                setReadOnly(val.readOnly);
                setRow(val.row);
                setCol(val.col);
                setEnabled(val.notesenabled)
                setBox(val.box)
                
                // console.log(val)
        }
        
        useEffect(()=> {
                getValues(props)  
                // console.log("PROPSOBJ: ",propsObject)
              
        }, [])

        useEffect(()=> {
                setEnabled(props.notesenabled)  
                // console.log("PROPSOBJ: ",propsObject)
              
        })

        function handleChange(e){
                console.log("INSIDE HANDLE CHANGE")
                e.preventDefault();
                console.log("VALUE: ",e.target.value)
                const entry = Number(e.target.value) || null
                if (!notesenabled){
                        if (entry === solved) {
                                getValues({defaultValue: entry,
                                        readOnly:true,
                                        row:row,
                                        col:col,
                                        solved:solved,
                                        notesenabled:false})
                                        setStyle({color: "blue",
                                textAlign:"center"})
                        } else if (entry !== 0 && entry !== null){
                                setStyle({color:"rgb(230, 84, 84)"})
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
                        setStyle({
                                fontSize:".7rem",
                                textAlign:"left",
                                paddingBottom:"1.4rem"})
                }
        }

        function handleClick(){
                const cellValues = {
                value:value,
                row:row,
                col:col,
                box:box
                }
                console.log("INSIDE HANDLECLICK:",cellValues)
                props.onChildClick(cellValues)
        }

        return(
            <input
                type="number"
                min="0"
                max="9"
                style={style}
                className="field"
                defaultValue={value || ""}
                readOnly={readOnly}
                key={(row)*9+(col)}
                notesnabled={notesenabled}
                onInput={handleChange}
                onCLick={console.log("CLICK")}
                box={box}
                row={row}
                col={col}
                
                />
        )   }


