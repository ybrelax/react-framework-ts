import React from 'react';
import Loadable from 'react-loadable';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import App from './App';

const isLogin = true;

// 懒加载
const Login = Loadable({
  loading: () => null,
  loader: () => import('@/views/login')
})
const Layout = Loadable({
  loading: () => null,
  loader: () => import('@/layout')
})


ReactDOM.render(
  <Router>
    <App isLogin={isLogin ? true : false}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Layout} />
       // 增加布局组件路由， 重定向无页面路由
      </Switch>
    </App>
  </Router>,
  document.getElementById('app')
);
