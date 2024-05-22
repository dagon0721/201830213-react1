import { useState } from "react";

export default function NameForm(){
    const [value, setValue] = useState('')
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        alert(`입력한 값: ` + value)
        e.preventDefault();
    };

    return (
        <form onSubmit = {handleSubmit}>
            <label>
                값:
                <input type ="text" value = {value} onChange={handleChange}/>
            </label>
            <button type = "submit">제출</button>
        </form>
    )
}