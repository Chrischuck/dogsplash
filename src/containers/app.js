import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchData } from '../modules/actions/dogs'

const mapStateToProps = (state) => ({ dogs: state.dogs })
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchData }, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
  componentDidMount() {
    this.props.fetchData()
  }
  render() {

    return (
      <div className='app'>
        test
      </div>
    )
  }
}

export default App