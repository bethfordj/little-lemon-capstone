import React from 'react';

const FormFieldOption = (props) => {

        return (
            <option value={props.value}>{props.text}</option>
        )
};

export default FormFieldOption;