import React, { PropTypes } from 'react';
import classNames  from 'classnames';
import { getValue } from '../helpers/connector';

const Edit = ({addItem, changeContent, content}) => {
    return (
        <div className="edit">
            <textarea
                onChange={getValue(changeContent)}
                value={content}
            ></textarea>
            <button
                onClick={getValue(addItem)}
                className={classNames('save', {'disabled': !content})}
            >Save</button>
        </div>
    );
};

export default Edit;

Edit.propTypes = {
    content: PropTypes.string.isRequired,
    addItem: PropTypes.func.isRequired
};