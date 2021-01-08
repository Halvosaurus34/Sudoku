import React, {Component} from "react"

export default class SudokuField extends Component{
        state = {
                value:this.props.value || "",
                readOnly:this.props.readOnly,
                key:this.props.key
        }
        // console.log("PROPS: ", props)
        // function handleChange(e){
        //         const value = value === "" ? "" : parseInt(e.target.value, 10);

        //         field.onChange({...field, value: value})
        // }
        render(){
        return(
                console.log(this.state),
            <input
                className="field"
                defaultValue={this.state.value || ""}
                readOnly={this.state.readOnly}
                key={this.state.key}
                />
        )   }
}
