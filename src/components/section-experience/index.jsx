import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description_c}
          description_t={item.description_t}
          description_s={item.description_s}
          link={item.link}
          link1={item.link1}
          link2={item.link2}
          sname1={item.sname1}
          sname2={item.sname2}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;
