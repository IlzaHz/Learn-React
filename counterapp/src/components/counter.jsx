import React, { Component } from 'react';

class Counter extends Component {

    //properties
    state = {
        //value: this.props.counter.value,
        // imageUrl: 'https:/picsum.photos/200',
        tags: [ "tag1", "tag2", "tag3" ]
    };

    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
    }

    componentWillUnmount() {
        console.log("Counter - Unmount");
    }

    render() { 
        console.log("Counter - Rendered");

        return (
            <div>
                {this.props.children}

                {/* <img src={this.state.imageUrl} alt="" /> */}
            
                <span className={this.getBadgeClasses()}>{ this.formatValue() }</span>
                <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                
                {/* <div>{this.renderTags()}</div> */}
            </div>
        );
    }

    //button events
    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1 })
    // }

    //rendering lists
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    //set different badge color based on value
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatValue() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;