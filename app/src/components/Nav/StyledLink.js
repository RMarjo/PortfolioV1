/*
 * Npm import
 */
import glamorous from 'glamorous';
import { NavLink } from 'react-router-dom';


/*
 * Local import
 */
import theme from 'src/theme';


/*
 * Link
 */
const firstChild = {
  borderTopLeftRadius: '1em',
  borderBottomLeftRadius: '1em',
};

const lastChild = {
  borderTopRightRadius: '1em',
  borderBottomRightRadius: '1em',
};

const hover = {
  background: theme.colors.grayLight,
};

const active = {
  ...hover,
  boxShadow: `inset 0 0 7px ${theme.colors.greenDark}`,
};

const style = {
  background: theme.colors.white,
  color: theme.colors.green,
  padding: '1em',
  cursor: 'pointer',
  ':first-child': firstChild,
  ':last-child': lastChild,
  ':hover': hover,
  '.active': active,
};

const StyledLink = glamorous(NavLink)(style);


/*
 * Export default
 */
export default StyledLink;
