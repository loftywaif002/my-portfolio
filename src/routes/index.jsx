import Components from "views/Components/Components.jsx";
import KnockLock from "views/IoTProjects/KnockLock.jsx";
import Shapes from "views/3dPrinting/Shapes.jsx";
import PeerToPeer from "views/Writings/PeerToPeer.jsx";
import Intellect from "views/Writings/IntellectualProperty.jsx";

var indexRoutes = [
  { path: "/intellectualp", name: "Intellect", component: Intellect },
  { path: "/peertopeer", name: "PeerToPeer", component: PeerToPeer },
  { path: "/shapes", name: "Shapes", component: Shapes },
  { path: "/knock-lock",   name: "KnockLock" ,  component: KnockLock },
  { path: "/", name: "Components", component: Components }
];

export default indexRoutes;
