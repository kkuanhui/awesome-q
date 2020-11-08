import React from "react";
import ShowcaseLayout from "./ShowcaseLayout";

class MyGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: []
    };
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(layout) {
    this.setState({ layout: layout });
  }

  render() {
    return (
      <div style={{ height: "100%", overflow: "scroll" }}>
        <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
      </div>
    );
  }
}

export default MyGrid;