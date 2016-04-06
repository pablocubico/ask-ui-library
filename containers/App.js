import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TextArea from '../components/TextArea'

class App extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <div>
        <TextArea />
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
