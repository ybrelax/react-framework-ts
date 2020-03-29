import React, { Component } from "react";
import routesConfig from "@/router/modules"
import { Breadcrumb } from 'antd';

class BreadcrumbComponent extends Component<any> {
    private breadcrumbList = [];
    constructor(props) {
        super(props)

        this.state = {
            breadcrumbList: []
        }
        this.renderBreadcrumbList(routesConfig, this.props)
    }

    componentWillReceiveProps(nextProps) {
        console.log('next:', nextProps)
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.breadcrumbList = [];
            this.renderBreadcrumbList(routesConfig, nextProps)
        }
    }

    private renderBreadcrumbList = (routes, props) => {
        console.log('props:', props)
        for (const route of routes) {
            if (route.path === props.location.pathname) {
                if (route.parentKey) {
                    const parentItem = routesConfig.find(r => r.path === route.parentKey)
                    if (parentItem) {
                        this.breadcrumbList.push({
                            title: parentItem.meta.title,
                            icon: parentItem.icon
                        })
                    }
                }
                this.breadcrumbList.push({
                    title: route.meta.title,
                    path: route.path,
                    icon: route.icon
                })
            } else if (route.childRoutes && route.childRoutes.length > 0) {
                this.renderBreadcrumbList(route.childRoutes, props)
            }
        }
    };


    render() {
        console.log('你好啊', this.breadcrumbList);
        return (<Breadcrumb style={{ margin: '16px 0' }}>
            {this.breadcrumbList.map(item => (
                <Breadcrumb.Item>{item.title}</Breadcrumb.Item>
            ))}

        </Breadcrumb>)
    }
}

export default BreadcrumbComponent;