import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../actions';


export class UnconnectedInput extends Component {


  render() {
    const contents = this.props.success || this.props.gaveUp
      ? null
      : (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="enter guess" />
          <button
            data-test="submit-button"
            type="submit"
            className="btn btn-primary mb-2"
            onClick={() => this.props.guessWord('')}
          >
            Submit
          </button>
        </form>
      )


    return (
      <div data-test="component-input">
        {contents}
      </div>
    );
  }
}


const mapStateToProps = ({ success: success }) => {
  return { success };
};

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });


export default connect(mapStateToProps, { guessWord })(UnconnectedInput);