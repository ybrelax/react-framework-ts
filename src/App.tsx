import { Component } from 'react';
import { withRouter } from 'react-router-dom';

interface IProps {
  children: object,
  location: {
    pathname: string
  },
  isLogin: boolean
  history: any
}

class App extends Component<IProps>{
  componentDidMount() {
    if (!this.props.isLogin) {
      setTimeout(() => {
        this.props.history.push('/login')
      }, 300)
    }
    if (this.props.isLogin && this.props.location.pathname === '/login') {
      setTimeout(() => {
        this.props.history.push('/')
      }, 300)
    }
  }

  componentDidUpdate() {
    if (!this.props.isLogin) {
      setTimeout(() => {
        this.props.history.push('/login')
      })
    }
  }

  render() {
     return this.props.children
  }
}
export default withRouter(App);