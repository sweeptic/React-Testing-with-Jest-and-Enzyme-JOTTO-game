import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import style from './App.module.css';
import GuessedWords from './GuessedWords/GuessedWords'
import Congrats from './Congrats/Congrats'

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('App mounted');
  }


  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('App getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('App did update');
  }

  componentWillUnmount = () => {
    console.log('App will unmount');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div data-test='component-app' className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          {guessedWord: 'Train', letterMatchCount: 3}
        ]} />
      </div>
    );
  }
}

// App.propTypes = {
//   // bla: PropTypes.string,
// };

// App.defaultProps = {
//   // bla: 'test',
// };

// const mapStateToProps = state => ({
//   // blabla: state.blabla,
// });

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(App);

export default App