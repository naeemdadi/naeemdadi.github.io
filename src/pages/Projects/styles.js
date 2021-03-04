import styled from 'styled-components'
import { white } from '@carbon/colors'

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`

export const ProjectTitle = styled.h4`
  font-weight: bold;
`

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`

export const ProjectLinks = styled.a`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  text-decoration: none;
  margin: .5rem 0 .5rem 0;
`