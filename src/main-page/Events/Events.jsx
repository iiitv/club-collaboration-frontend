import "./Event.scss";
import React  from 'react';



function Events () {
  return (
    <>
  
    <div className="event">
      <div className="event__thumbnail">
        <img src="open.png" alt="" />
      </div>
      <div className="event__data">
        <div className="event__data__title">title</div>
        <div className="event__data__date">
          <div className="event__data__date__date-title">Date & Time:</div>
          <div className="event__data__date__date-value">12 feb 2022</div>
        </div>
        <div className="event__data__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi hic nulla provident accusamus magnam possimus culpa, molestiae exercitationem, dolores consequuntur explicabo consectetur?</div>
      </div>
    </div>
    </>
  );
};

export default Events;
