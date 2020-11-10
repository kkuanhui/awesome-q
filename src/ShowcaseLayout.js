import React from "react";
import vlrr from './pictures/vlrr.jpg';
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ShowcaseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: "lg",
      compactType: "vertical",
      mounted: false,
      layouts: {
        lg: props.initialLayout
      }
    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    // this.onCompactTypeChange = this.onCompactTypeChange.bind(this);
    // this.onLayoutChange = this.onLayoutChange.bind(this);
    // this.onNewLayout = this.onNewLayout.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDIV() {
    return _.map(this.state.layouts.lg, function (l, i) {
      return (
        <div key={i}>
          <div className={"ppp-bg-img-"+i}></div>
        </div>
      );
    });
  }

  onBreakpointChange(breakpoint) {
    this.setState({
      currentBreakpoint: breakpoint
    });
  }

  render() {
    return (
      <div>
        <div>
          Current Breakpoint: {this.state.currentBreakpoint} (
          {this.props.cols[this.state.currentBreakpoint]} columns)
        </div>

        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          measureBeforeMount={false}
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
          {this.generateDIV()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

// --------------------------------------------------------

// ShowcaseLayout.propTypes = {
//   onLayoutChange: PropTypes.func.isRequired
// };

ShowcaseLayout.defaultProps = {
  className: "layout",
  rowHeight: 30,
  onLayoutChange: function () {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  initialLayout: generateLayout(),
  vlrr: vlrr
};



function generateLayout() {
  return _.map(["vlrr", 'wbc', 'sc', 'oba', 'hr', 'copq', 'aerb', 'kpi'], function (item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
    };
  });
}
