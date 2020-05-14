import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateErrorMessage } from '../../redux/actions';
import Logo from '../../components/Logo/Logo';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import LogoSladeLeftTransition from '../../transition/LogoSladeLeftTransition/LogoSladeLeftTransition';
import SladeRightTransition from '../../transition/SladeRightTransition/SladeRightTransition';
import errorMessageObj from '../../services/errorMessage';

class HeaderComponent extends Component {
  static defaultProps = {
    logoTitle: '',
    errorMessage: '',
  };

  static propTypes = {
    logoTitle: PropTypes.string,
    errorMessage: PropTypes.string,
    updateErrorMessage: PropTypes.func.isRequired,
  };

  state = {
    isShowLogo: false,
  };

  componentDidMount() {
    this.setState({
      isShowLogo: true,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // eslint-disable-next-line no-shadow
    const { errorMessage, updateErrorMessage } = this.props;
    if (prevProps.errorMessage !== errorMessage) {
      if (errorMessage !== errorMessageObj.DEFAULT_MESSAGE) {
        setTimeout(() => {
          updateErrorMessage(errorMessageObj.DEFAULT_MESSAGE);
        }, 3000);
      }
    }
  }

  render() {
    const { isShowLogo } = this.state;
    const { logoTitle, errorMessage } = this.props;
    const showErrorMessage = errorMessage !== errorMessageObj.DEFAULT_MESSAGE;
    return (
      <header>
        <LogoSladeLeftTransition isShow={isShowLogo}>
          <Logo logoTitle={logoTitle} />
        </LogoSladeLeftTransition>
        <SladeRightTransition isShow={showErrorMessage}>
          <ErrorComponent errorMessage={errorMessage} />
        </SladeRightTransition>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.errorMessage,
});

export default connect(mapStateToProps, { updateErrorMessage })(
  HeaderComponent,
);
