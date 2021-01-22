import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";
import liff from "@line/liff";
import DefaultImg from "./assets/default-image.jpg";
import Routes from "./Routes";
const pkgVersion = require("../package.json").version;
// async function main() {
//   try {
//     if (!liff.isInClient() && liff.isLoggedIn()) {
//       liff.getProfile().then((profile) => {
//         localStorage.setItem("profile-line", JSON.stringify(profile));
//       });
//     }
//     await liff.init(
//       {
//         liffId: "1655384297-BvEewepx",
//       },
//       () => {
//         // if (liff.isLoggedIn()) {
//         //   liff.getProfile().then((profile) => {
//         //     alert(profile.userId);
//         //   });
//         // }
//       },
//       (err) => console.log(err)
//     );
//   } catch (error) {
//     console.log("ERROR"+error);
//   }
// }
class App extends Component {
  state = {
    collapseID: "",
    displayName: localStorage.getItem("profile-line")
      ? JSON.parse(localStorage.getItem("profile-line")).displayName
      : "",
    urlPicture: localStorage.getItem("profile-line")
      ? JSON.parse(localStorage.getItem("profile-line")).pictureUrl
      : DefaultImg,
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  closeCollapse = (collID) => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: "" });
  };
  InitailizeLiff = () => {
    liff.init(
      {
        liffId: "1655384297-BvEewepx",
      },
      () => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then((profile) => {
            this.setState({
              displayName: profile.displayName,
              urlPicture: profile.pictureUrl
            })
          });
        } else {
          alert("No login!");
        }
      },
      (err) => console.log(err)
    );
  };
  componentDidMount() {}
  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID, displayName, urlPicture } = this.state;

    return (
      <Router>
        <div className="flyout">
          <MDBNavbar
            color="red accent-3"
            dark
            expand="md"
            fixed="top"
            scrolling
          >
            <MDBNavbarBrand
              href="/reh-1meeting-app"
              className="py-0 font-weight-bold"
            >
              <strong className="align-middle">REH 1Meeting</strong>&nbsp;
              <strong style={{ fontSize: "12px" }}>{"v." + pkgVersion}</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <MDBCollapse id="mainNavbarCollapse" isOpen={collapseID} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/reh-1meeting-app/meeting-history"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>ประวัติเข้าประชุม</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/reh-1meeting-app/profile"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>{displayName}</strong>
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <div className="mt-2 mr-2" style={{ textAlign: "right" }}>
              <Link
                to="/reh-1meeting-app/profile"
                style={{ fontSize: "14px", cursor: "pointer" }}
              >
                <img
                  src={urlPicture}
                  width="45"
                  height="45"
                  alt=""
                  className="rounded-circle mr-1"
                />
                {displayName}
              </Link>
            </div>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
