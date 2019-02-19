import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../modules/actions/dogs'

const mapStateToProps = (state) => ({ dogs: state.dogs })
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className='app'>
        test
      </div>
    )
  }
}

export default App