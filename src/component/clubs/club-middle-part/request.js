import React from "react";
import "./request.css";

const requestJoin = () => {
  return (
    <div className="form-container">
      <form autoComplete="off">
        <input type="text" id="name" name="name" placeholder="Name"></input>
        <input type="email" id="email" name="email" placeholder="E-mail" />
        <input type="number" id="batch" name="batch" placeholder="Batch" />
        <textarea
          row="10"
          col="10"
          id="reason"
          placeholder="Why do you want to join the club?"
          autoComplete="off"
        ></textarea>
      </form>
      <button type="submit" className="req-btn">
        Request To Join
      </button>
    </div>
  );
};
export default requestJoin;
