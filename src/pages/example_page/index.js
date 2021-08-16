/* eslint-disable no-useless-constructor */
import React from "react";
import app_status from "../../contexts/app_status";

export default class ExamplePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Example Page</h1>
  }
}

ExamplePage.contextType = app_status;