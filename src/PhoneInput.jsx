import React from 'react';
import MaskedInput from 'react-text-mask';

const PhoneInput = (props) => {
    return (
        <MaskedInput
            onChange={props.onChange}
            pattern="\d*"
            mask={[
                '8',
                ' ',
                '(',
                /[1-9]/,
                /\d/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/
            ]}
        />
    );
}

export default PhoneInput;
