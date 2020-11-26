// import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import BookNow from "../../components/BookNow";
import RoomDetails from "../../components/RoomDetails";

import About from "../../containers/About/About";
import Featured from "../../containers/Featured/Featured";
import Header from "../../containers/Header/Header";
import Rooms from "../../containers/Results/Rooms";

const Homepage = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/room-details" component={RoomDetails} />
        <Route exact path="/rooms" component={Rooms} />
      </Switch>
    </>
  );
};

export default Homepage;

export function Main() {
  return (
    <>
      <Header />
      <Featured />
      <About />
      <BookNow />
    </>
  );
}
