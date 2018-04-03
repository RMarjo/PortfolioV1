/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import StyledNav from './StyledNav';
import StyledLink from './StyledLink';


/*
 * Code
 */
/* eslint-disable max-len */
const Nav = () => (
  <StyledNav>
    <StyledLink to="/" exact>
      Ma vie
    </StyledLink>
    <StyledLink to="/competences">
      Mes compétences
    </StyledLink>
    <StyledLink to="/projets">
      Mes projets
    </StyledLink>
    <StyledLink to="/contact">
      Me Contacter
    </StyledLink>
  </StyledNav>
);


/*
 * Export default
 */
export default Nav;
