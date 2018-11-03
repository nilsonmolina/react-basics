import React from 'react';

/*---------------------
  DEFAULT EXPORT
    import Basics from './components/Basics';
---------------------*/
export default (props) => (
  <section className="Basics">
      <h2>Basics</h2>
      <p>
        {props.greeting} Agent {props.num}<br/>
        Name: {props.myObj.name}<br/>
        Age: {props.myObj.age}<br/>
        obj: {JSON.stringify(props.myObj)}<br/>
        arr: {props.myArr}<br/>
        constFunc: {props.constFunc(6,7)}<br/>
        inlineFunc: {props.inlineFunc(6,7)}<br/>
        classFunc: {props.classFunc(6,7)}<br/>
        {/* {console.log('Basics Component', props.myObj)} */}
      </p>
      {props.btn}
      {props.btn2}
  </section>
);

/*---------------------
  NAMED EXPORTS
  import { Basics2, Basics3 } from './components/Basics';
---------------------*/
export const Basics2 = (props) => (
  <section className="Basics">  
      <h2>Basics</h2>
      <p>
        {props.greeting} Agent {props.num}<br/>
        Name: {props.myObj.name}<br/>
        Age: {props.myObj.age}<br/>
        obj: {JSON.stringify(props.myObj)}<br/>
        arr: {props.myArr}<br/>
        constFunc: {props.constFunc(6,7)}<br/>
        inlineFunc: {props.inlineFunc(6,7)}<br/>
        classFunc: {props.classFunc(6,7)}<br/>
        {console.log(props.myObj)}
      </p>
      {props.btn}
  </section>
);

export class Basics3 extends React.Component {
  render() {
    return (
      <section className="Basics">
        <h2>Basics</h2>
        <p>
          {this.props.greeting} Agent {this.props.num}<br/>
          Name: {this.props.myObj.name}<br/>
          Age: {this.props.myObj.age}<br/>
          obj: {JSON.stringify(this.props.myObj)}<br/>
          arr: {this.props.myArr}<br/>
          constFunc: {this.props.constFunc(6,7)}<br/>
          inlineFunc: {this.props.inlineFunc(6,7)}<br/>
          classFunc: {this.props.classFunc(6,7)}<br/>
          {console.log(this.props.myObj)}
        </p>
      {this.props.btn}
      </section>
    );
  }
};

