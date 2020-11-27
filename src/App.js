import React, { Component } from "react";
import Homepage from "./Pages/Home/Homepage";
import "antd/dist/antd.css";
import Navs from "./components/Navs";
import Footer from "./containers/Footer/Footer";
import { BackTop } from "antd";
import { withRouter } from "react-router-dom";
import Spinner from "./components/Spinner";

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    if (!this.state.loading) {
      return (
        <>
          <Navs />
          <Homepage />
          <Footer />
          <BackTop visibilityHeight={100} duration={100} />
        </>
      );
    }

    return <Spinner size="large" />;
  }
}

export default withRouter(App);
