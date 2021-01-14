import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    

    render() { 
        console.log("Counters - Rendered");

        //destructuring arguments
        const {
            onReset,
            counters,
            onDelete,
            onIncrement
        } = this.props;

        return (             
            <div>
                <button 
                    className="btn btn-primary btn-sm m-2"
                    onClick={onReset}
                >
                    Reset
                </button>
                { counters.map(counter => (
                    <Counter 
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    >
                        <h5>Counter #{counter.id}</h5>
                    </Counter>
                ))}
            </div>
         );
    }
}
 
export default Counters;