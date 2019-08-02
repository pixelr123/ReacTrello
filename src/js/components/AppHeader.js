import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { updateColorAction } from '../redux/actions';

const AppHeader = ({ color, updateColor }) => (
  <div id="header" className={`container-fluid bg-${color} p-1`}>
    <div className="row mx-0">
      <div className="col-4 px-0">
        <a
          className="btn header bg-trans bg-trans-hover p-1"
          href="#/"
          onClick={() => updateColor()}
        >
          <FontAwesomeIcon className="text-light" icon="home" />
        </a>
      </div>
      <div className="col-4">
        <div className="row justify-content-center">
          <a
            className="btn header text-trans text-trans-hover d-flex p-1"
            href="#/"
            onClick={() => updateColor()}
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            <FontAwesomeIcon icon="clipboard-list" />
            <h1 className="header ml-1 my-0">Trello Clone</h1>
          </a>
        </div>
      </div>
    </div>
  </div>
);

AppHeader.propTypes = {
  color: PropTypes.string.isRequired,
  updateColor: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  { color: state.color }
);

const mapDispatchToProps = dispatch => (
  { updateColor: () => dispatch(updateColorAction({ color: 'blue' })) }
);

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
