import React, { Component } from "react";
import { connect } from "react-redux";
import "./club-right.css";

class Clubright extends Component {
  render() {
    const clubname = this.props.clubname;
    console.log("clubname" + clubname);
    const club = this.props.club.find((c) => c.club === clubname);
    const image = "../" + club.image;
    return (
      <div className="club-right-part">
        <div className="top-right-div"></div>
        <img src={image} alt={club.club}></img>
        <h2 className="club-name">{club.club + " " + club.sirname}</h2>
        <h4>{club.sec}</h4>
        <p>Secretory</p>
        <h4>{club.jsec}</h4>
        <p>Joint Secretory</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    club: state.clubs.club,
  };
};

export default connect(mapStateToProps)(Clubright);
