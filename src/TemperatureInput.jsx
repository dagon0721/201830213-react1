import { useState } from "react";

const scaleName = {
    C: '섭씨',
    F: '화씨'
};

export default function TemperatureInput(props) {
    const handleChange = (e) => {
        props.onTemperatureChange(e.target.value);
    };

    return (
        <fieldset>
            <legend>{scaleName[props.scale]} 온도를 입력하세요</legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}
