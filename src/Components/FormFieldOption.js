import React from 'react';

const FormFieldOption = (props) => {

        return (
            <option key={props.optionKey} value={props.value}>{props.text}</option>
        )
};

export default FormFieldOption;