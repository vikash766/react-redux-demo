import React, { Component } from 'react';

import TextFieldComponent from './../../components/textfield/TextFieldComponent';
import DuplicateTextFieldComponent from './../../components/duplicate-textfield/DuplicateTextFieldComponent';

class TextFieldContainer extends Component {

    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <TextFieldComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h2>Duplicating state in child component</h2>
                        <div className="row">
                            <div className="col-md-12">
                                <DuplicateTextFieldComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TextFieldContainer;