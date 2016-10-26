import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';

export default class Item extends Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onClick() {
        let { id } = this.props.item;

        this.props.changeItem({id});
    }
    onRemove(e) {
        e.stopPropagation();
        let { id } = this.props.item;
        let { index } = this.props;

        // if (confirm())
            this.props.deleteItem({id, index});
    }

    render() {
        const { item, conditions } = this.props;
        const conditionClass = conditions[item.condition].className;

        return (
            <li className={classNames('list-item', {[conditionClass]: true})}
                onClick={this.onClick}
            >
                <div className="text">{item.text}</div>
                <div className="check">&nbsp;</div>
                <button className="del" onClick={this.onRemove}>X</button>
            </li>
        );
    }
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    changeItem: PropTypes.func.isRequired
};