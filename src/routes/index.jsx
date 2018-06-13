import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import Member1 from "views/ProfilePage/Member1.jsx";
import Member2 from "views/ProfilePage/Member2.jsx";
import Member3 from "views/ProfilePage/Member3.jsx";
import Member4 from "views/ProfilePage/Member4.jsx";
import Member5 from "views/ProfilePage/Member5.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import Datenschutz from "views/Datenschutz/Datenschutz.jsx";
import Impressum from "views/Impressum/Impressum.jsx";

var indexRoutes = [
  { path: "/contact", name: "Contact", component: LandingPage },
  { path: "/profile-page1", name: "Member1", component: Member1 },
  { path: "/profile-page2", name: "Member2", component: Member2 },
  { path: "/profile-page3", name: "Member3", component: Member3 },
  { path: "/profile-page4", name: "Member4", component: Member4 },
  { path: "/profile-page5", name: "Member5", component: Member5 },
  { path: "/datenschutz", name: "Datenschutz", component: Datenschutz },
  { path: "/impressum", name: "Impressum", component: Impressum },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/", name: "Components", component: Components },

 

];

export default indexRoutes;
