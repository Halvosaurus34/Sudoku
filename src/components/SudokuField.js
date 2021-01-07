export default function SudokuField(){
        const {field} = this.props;
        return(
            <input
                className="field"
                field={field.value || ""}
                readOnly={field.readOnly}
                key={field.key}
        )   
}
