import React,{Component,PropTyps} from 'react'

class Radio extends Component {
    constructor(props) {
        super(props)
        this.handelChange = this.handelChange.bind(this);
        this.state = {
            value: this.props.defaultValue
        };
    }

    handelChange(e) {
        if (this.props.onChange) {
            this.props.onChange(e);
        }
        this.setState({
            value: e.target.value
        });
    }

    render() {
        let children = [];
        let value = this.props.value || this.state.value;
        console.log(this);
        React.Children.forEach(this.props.children, function (child,i) {
            let key = 'label-'+i
            let label = (
                    <label key={key}>
                        <input
                                type="radio"
                                name = {this.props.name}
                                value = {child.props.value}
                                checked = {child.props.value == value}
                                onChange = {this.handelChange}
                                />
                        child.props.children
                        <br/>
                    </label>
            )
            // children['label-'+i] = label;
            children.push(label);
        }.bind(this));
        console.log(children);
        // return this.transferPropsTo(<span>{children}</span>);
        return (<span>{children}</span>);
    }
}

export default Radio;