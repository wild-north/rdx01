import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';

export default class Item extends Component {

    constructor() {
        super();
        this.changeState = this.changeState.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    changeState() {
        let { id } = this.props.item;

        this.props.changeItem({id});
    }
    removeItem(e) {
        e.stopPropagation();
        let { id } = this.props.item;
        let { index } = this.props;

        // if (confirm())
            this.props.deleteItem({id, index});
    }

    render() {
        const { item } = this.props;

        return (
            <li className={classNames('list-item', {'done': item.isChecked})}
                onClick={this.changeState}
            >
                <div className="text">{item.text}</div>
                <div className="check">&nbsp;</div>
                <button className="del" onClick={this.removeItem}>X</button>
            </li>
        );
    }
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    changeItem: PropTypes.func.isRequired
};