import React from 'react';

const Info = ({props}) => {
  
  return (
    <div className="props">
      <div className="profileImg">
        <img role="presentation" className="img-circle center-block" src={props.picture} width="200" />
      </div>
      <div className="name"><h2>{props.name}</h2></div>
      <div className="title"><h4>{props.title}</h4></div>
      <hr />
        <ul className="list-unstyled contact-links text-center">
          <li><i className="fa fa-lg fa-location-arrow"></i>{props.location.city} &mdash; {props.location.region}</li>
          <li><i className="fa fa-lg fa-envelope"></i><a href={`mailto:${props.email}`}>{props.email}</a></li>
        </ul>
        <hr />
          <ul className="profileLinks list-inline text-center">
            <li><a className="fa fa-github fa-2x" href={props.profiles[0].url}></a></li>
            <li><a className="fa fa-linkedin-square fa-2x" href={props.profiles[1].url}></a></li>
          </ul>
        <hr />
        <div className="notes">
          <p>{props.notes}</p>
        </div>
        <hr />
      </div>
  );
}

export default Info;
