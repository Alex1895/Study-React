import React,{Component} from "react";

function onClicktrue() {
  return alert("the button its working");
}
class Micomponente extends Component {
  render() {
    return <input type="button" onClick={onClicktrue} button />;
  }
}

export default Micomponente;
