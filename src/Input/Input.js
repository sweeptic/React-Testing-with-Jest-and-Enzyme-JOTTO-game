import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../actions';


export class UnconnectedInput extends Component {

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline" action="">
        <input
          data-test='input-box'
          type="text"
          className="mb-2 mx-sm-3"
          placeholder="enter guess"
        />
        <button
          data-test='submit-button'
          className="btn btn-primary mb-2"
          onClick={() => this.props.guessWord('train')}
          type="submit"
        >
          Submit
        </button>
      </form>
    )

    return (
      <div data-test='component-input' className="">
        {contents}
      </div>
    )

  }
}

const mapStateToProps = ({ success }) => {
  return { success };
}


export default connect(mapStateToProps, { guessWord })(UnconnectedInput);