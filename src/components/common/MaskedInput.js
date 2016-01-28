import React            from 'react';
import classNames       from 'classnames';
import { Input }        from 'react-bootstrap';
import MaskedInputField from 'react-maskedinput';

export class MaskedInput extends Input {
  renderInput() {
    const className = this.isCheckboxOrRadio() || this.isFile() ? '' : 'form-control';
    return <MaskedInputField {...this.props} className={classNames(this.props.className, className)} ref="input" key="input" />;
  }
}

export default MaskedInput;
