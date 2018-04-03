/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';


/*
 * Local import
 */
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Life from 'src/components/Life';
import Skills from 'src/components/Skills';
import Projects from 'src/components/Projects';
import Contact from 'src/components/Contact';


/*
 * Code
 */
const routes = [
  {
    path: '/',
    component: Life,
    exact: true,
  },
  {
    path: '/competences',
    component: Skills,
  },
  {
    path: '/projets',
    component: Projects,
  },
  {
    path: '/contact',
    component: Contact,
  },
];


/*
 * Component
 */
class App extends React.Component {
  /**
   * Props
   */
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }


  /**
   * Lifecycles
   */
  componentWillMount() {
    window.addEventListener('mousewheel', (evt) => {
      // Si le scroll est autorisé
      if (!this.preventScroll) {
        // Vars
        const { deltaY, deltaX } = evt;
        const { pathname } = this.props.location;

        // On va chercher l'index de la route
        const index = routes.findIndex(route => route.path === pathname);

        // Est-ce qu'on scroll vers le haut ou vers la gauche ?
        if ((deltaY < -2 || deltaX < -2)) {
          this.scrollToIndex(index - 1);
        }

        // Est-ce qu'on scroll vers le bas ou vers la droite
        if ((deltaY > 2 || deltaX > 2)) {
          this.scrollToIndex(index + 1);
        }
      }
    });
  }


  /**
   * Scroll To Index
   */
  scrollToIndex = (index) => {
    // Est-ce que la route existe
    if (index in routes) {
      // On va chercher l'objet route
      const route = routes[index];

      // On change de page
      this.props.history.push(route.path);

      // On empêche le scroll
      this.preventScroll = true;

      // Une seconde plus tard, on réautorise le scroll
      setTimeout(() => {
        this.preventScroll = false;
      }, 1000);
    }
  }


  /**
   * Render
   */
  render() {
    return (
      <div id="app">
        <header id="app-header">
          <Header />
          <Nav />
        </header>
        <main id="app-content">
          {routes.map(route => <Route key={route.path} {...route} />)}
        </main>
      </div>
    );
  }
}


/*
 * Export default
 */
export default withRouter(App);
