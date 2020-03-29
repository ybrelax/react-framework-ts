import React, { Component } from "react";
import { Link } from 'react-router-dom';
import menuList from "@/router/menu/index";
import { Menu } from 'antd';
import {
    VideoCameraOutlined,
} from '@ant-design/icons';

class MenuComponent extends Component {
    render() {
        return (<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {menuList.map(item => (
                <Menu.Item key={item.id}>
                    <VideoCameraOutlined />
                    <Link to={item.url}>
                        <span>{item.text}</span>
                    </Link>
                </Menu.Item>
            ))}

        </Menu>)
    }
}

export default MenuComponent;