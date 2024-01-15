import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionResearchInterest from '../components/section-researchInterest'
import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionEducation from '../components/section-education';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  const education = get(data, 'site.siteMetadata.education', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {about && <SectionAbout about={about} />}
      {about && <SectionResearchInterest about={about} />}
      {skills && skills.length && <SectionSkills skills={skills} />}
      
      {!noBlog && <SectionBlog posts={posts} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {education && education.length && (
        <SectionEducation experience={education} />
      )}
      {projects && projects.length && <SectionProjects projects={projects} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        scholar
        github
        linkedin
        skills {
          name
          description
        }
       
        experience {
          name
          description_c
          description_t
          link
          link1
          link2
          sname1
          sname2
        }
        education {
          name
          description_c
          description_t
          link
        }
        
         projects {
          name
          description
          link
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;