import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FormComposer from '../components/FormComposer'

class App extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <div>
        <FormComposer />
      </div>
    )
  }
}

App.propTypes = {
  //todos: PropTypes.array.isRequired,
  //actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    //todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
