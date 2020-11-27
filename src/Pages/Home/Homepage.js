import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import BookNow from "../../components/BookNow";
import RoomDetails from "../../components/RoomDetails";
import Spinner from "../../components/Spinner";

// import About from "../../containers/About/About";
// import Featured from "../../containers/Featured/Featured";
// import Header from "../../containers/Header/Header";
// import Rooms from "../../containers/Results/Rooms";

const About = React.lazy(() => import("../../containers/About/About"));
const Featured = React.lazy(() => import("../../containers/Featured/Featured"));
const Header = React.lazy(() => import("../../containers/Header/Header"));
const Rooms = React.lazy(() => import("../../containers/Results/Rooms"));

const Homepage = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/room-details">
          <Suspense fallback={<Spinner />}>
            <RoomDetails />
          </Suspense>
        </Route>
        <Route path="/rooms">
          <Suspense fallback={<Spinner />}>
            <Rooms />
          </Suspense>
        </Route>
      </Switch>
    </>
  );
};

export default Homepage;

export function Main() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Featured />
        <About />
        <BookNow />
      </Suspense>
    </>
  );
}
