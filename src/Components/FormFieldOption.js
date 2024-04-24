import React from 'react';

// What does this class add over the default?
const FormFieldOption = (props) => {

        return (
            <option key={props.optionKey} value={props.value}>{props.text}</option>
        )
};

export default FormFieldOption;