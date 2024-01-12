import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  description_1: 'text-md text-gray-700 font-light',
  link:
    'hover:text-blue-700'
};

const SummaryItem = ({ name, description, description_t, description_s, link = false, link1=false, link2=false, sname1=false,sname2=false, internal = false }) => {
  let linkContent;
  let Supervised_content;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }
 if (link1 && link2){
     Supervised_content= <p className={classes.description}>Supervised By : <a className={classes.link} href={link1}>{sname1}</a> and <a className={classes.link} href={link2}>{sname2}</a></p>;
     }
     else if  (link1){
     Supervised_content= <p className={classes.description}>Supervised By : <a className={classes.link} href={link1}>{sname1}</a></p>;
     }
  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description_1}>{description}</p>
      <p className={classes.description}>{description_t}</p>
      <p className={classes.description}>{description_s}</p>
      <p className={classes.description}>{link1 ? Supervised_content : sname1 }</p>     
    </div>
  );
};

export default SummaryItem;
