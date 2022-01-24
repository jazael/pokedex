import Home from "./Screens/Home";
import Pokemon from "./Screens/Pokemon";
import Movements from "./Screens/Movements";
import TermsAndConditions from "./Screens/TermsAndConditions";
import NotFound from "./Screens/NotFound";

export default [
  { path: "/", name: "Home", Component: Home },
  { path: "/pokemon/:name", name: "Pokemon", Component: Pokemon },
  {
    path: "/pokemon/:name/move/:movimiento",
    name: "Movements",
    Component: Movements,
  },
  {
    path: "/terms-conditions",
    name: "TermsAndConditions",
    Component: TermsAndConditions,
  },
  { path: "*", name: "NotFound", Component: NotFound },
];
