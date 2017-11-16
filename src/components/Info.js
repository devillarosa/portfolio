import React from 'react';

const Info = ({info}) => {
  
  console.log(info.name);

  return (
    <div>
      <div className="profileImg">
        <img role="presentation" className="img-circle center-block" src={info.picture} width="200" />
      </div>

      <h2>{info.name}</h2>
      <h4>{info.label}</h4>
      <hr />
        <ul className="list-unstyled contact-links text-center">
          <li><i className="fa fa-lg fa-location-arrow"></i>{info.location.city}, {info.location.region}, {info.location.countryCode}</li>
          <li><i className="fa fa-lg fa-envelope"></i><a href={`mailto:${info.email}`}>{info.email}</a></li>
        </ul>
        <hr />
          <ul className="profileLinks list-inline text-center">
            <li><a className="fa fa-twitter fa-2x" href={'https://twitter.com/'+info.profiles[0].username}></a></li>
            <li><a className="fa fa-github fa-2x" href={'https://github.com/'+info.profiles[1].username}></a></li>
          </ul>
        <hr />

        </div>
        );




}

export default Info;
