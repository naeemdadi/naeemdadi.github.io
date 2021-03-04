import React from 'react';
import Layout from '../../components/Layout/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer, ProjectLinks } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
              <ProjectLinks>
                <a style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href={project.url}>{project.url}</a>
                <a style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href={project.githubUrl}>{project.githubUrl}</a>
              </ProjectLinks>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;