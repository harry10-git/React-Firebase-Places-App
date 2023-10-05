import { Route, Routes } from "react-router-dom";

import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUp from "./pages/NewMeetUp";
import Favourites from "./pages/Favourites";

import Layout from "./components/layout/Layout";

import { FavouritesContextProvider } from "./store/fav-context";

function App() {
  return (

    <FavouritesContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetUps />} exact={true} />
          <Route path="/new-meetup" element={<NewMeetUp />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Layout>
    </FavouritesContextProvider>
  );
}

export default App;
