import React from "react";

const SwichButton = (props) => (
	<button onClick={props.click}>{props.active ? "STOP" : "START"}</button>
);

export default SwichButton;
