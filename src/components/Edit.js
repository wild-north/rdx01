import React, { Component, PropTypes } from 'react';
import classNames  from 'classnames';

export default class Edit extends Component {
    constructor() {
        super();
        this.content = '';
        this.changeContent = this.changeContent.bind(this);
        this.saveContent = this.saveContent.bind(this);
    }

    changeContent(e) {
        this.props.changeContent(e.target.value);
    }

    saveContent() {
        this.props.addItem(this.props.content);
    }

    render() {
        return (
            <div className="edit">
                <textarea
                    onChange={this.changeContent}
                    value={this.props.content}
                >
                </textarea>
                <button
                    onClick={this.saveContent}
                    className={classNames(
                        'save',
                        {'disabled': !this.props.content}
                    )}
                >Save
                </button>
            </div>
        )
    }
}

Edit.propTypes = {
    content: PropTypes.string.isRequired,
    // addItem: PropTypes.func.isRequired
};