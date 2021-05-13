import classes from "./Demo.module.css";
import React from "react";
import Column from "./components/Column";
import { Button } from "@material-ui/core";

type State = { no: number; count: number };
class Demo extends React.Component<{}, State> {
  state: State = { no: 0, count: 0 };
  shouldComponentUpdate(nextProps: {}, nextState: State) {
    console.log("SHOULD COMPONENT UPDATE");
    console.log("PROPS", this.props, nextProps);
    console.log("STATE", this.state, nextState);
    return this.state.no !== nextState.no || nextState.count === 7;
  }
  render() {
    console.log("RENDER CALLED", this.state);
    const name = "PREMIUMHUB";
    return (
      <div className="row">
        <Column size={12}>
          
        
        <div className={classes.banner}>

      <p className={classes.para}> WELCOME TO PREMIUMHUB </p>
     <p className={classes.para}> Comming Soon....</p>
      <button className={classes.btn}><a href="https://premiumhub.site" >Get Started</a></button>

        </div>













          
          {this.state.count > 6 ? <p>Hello from {name.toUpperCase()}</p> : null}
          <p>{7 + 3}</p>
          <button
            onClick={() => this.setState({ no: 1 })}
            className="btn btn-sm btn-primary mx-2"
          >
            Change state to 1
          </button>
          <button
            onClick={() => this.setState({ no: 0 })}
            className="btn btn-sm btn-primary mx-2"
          >
            Change state to 0
          </button>
          <button
            className="btn btn-sm btn-primary mx-2"
            onClick={() =>
              this.setState((prevState) => ({ count: prevState.count + 1 }))
            }
          >
            Increment count
          </button>
        </Column>
      </div>
    );
  }
}
export default Demo;
