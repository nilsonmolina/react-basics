import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';

const counter = (props) => {
    return (
        <div>
            <CounterOutput value={props.ctr} />
            <CounterControl label="Increment" clicked={props.increment} />
            <CounterControl label="Decrement" clicked={props.decrement}  />
            <CounterControl label="Add 5" clicked={() => props.add(5)}  />
            <CounterControl label="Subtract 5" clicked={() => props.subtract(5)}  />
            <hr/>
            <button onClick={() => props.storeResultAsync(props.ctr)}>Store Result</button>
            <ul>
                {props.storedResults.map(strResult => (
                    <li 
                        key={strResult.id} 
                        onClick={() => props.deleteResult(strResult.id)}>                  {strResult.value}
                        </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

export default connect(mapStateToProps, actionCreators)(counter);