import React, { Component } from "react";
import Homepage from "./Pages/Home/Homepage";
import "antd/dist/antd.css";
import Navs from "./components/Navs";
import Footer from "./containers/Footer/Footer";
import { BackTop } from "antd";
import { withRouter } from "react-router-dom";

// const App = () => {
//   return (
//     <>
//       <Navs />
//       <Homepage />
//       <Footer />
//       <BackTop visibilityHeight={100} duration={100} />
//     </>
//   );
// };

// export default App;

class App extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <>
        <Navs />
        <Homepage />
        <Footer />
        <BackTop visibilityHeight={100} duration={100} />
      </>
    );
  }
}

export default withRouter(App);
