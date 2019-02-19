import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchData } from '../modules/actions/dogs'

import InfiniteScroll from '../components/infinitescroll'
import Image from '../components/image'

const mapStateToProps = (state) => ({ dogs: state.dogs })
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchData }, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
  componentDidMount() {
    this.props.fetchData()
  }
  render() {
    const { dogs: { imageColOne, imageColTwo, imageColThree }, fetchData } = this.props
    return (
      <div className='app'>
        <div>test</div>
          <InfiniteScroll
            className={'scroll-container'}
            style={{}}
            onScroll={fetchData}
            render={() => {
              return (
                <Fragment>
                  {
                    imageColOne.map((src, index) => {
                      return (
                        <Image key={Date.now() + '1' + index} src={src} /> 
                      )
                    })
                  }
                  {
                    imageColTwo.map((src, index) => {
                      return (
                        <Image key={Date.now() + '2' + index} src={src} /> 
                      )
                    })
                  }
                  {
                    imageColThree.map((src, index) => {
                      return (
                        <Image key={Date.now() + '3' + index} src={src} /> 
                      )
                    })
                  }
                </Fragment>
              )
            }}
          />
      </div>
    )
  }
}

export default App