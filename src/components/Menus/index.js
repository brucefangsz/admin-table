import React, { Component } from 'react';
import { Navbar, Icon, Menu } from 'tinper-bee';
import { Link } from 'mirrorx';

import './index.css';

const SubMenu = Menu.SubMenu;

class Menus extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            current: 1
        }
    }
    handleClick(e) {
        this.setState({
            current: e.key,
        });
    }
    render() {
        const { toggle } = this.props;
        return (
            <Menu onClick={this.handleClick.bind(this)}
                defaultOpenKeys={['demo3sub1']}
                selectedKeys={[this.state.current]}
                mode={toggle ? "vertical" : "inline"}
            >
                <Menu.Item key="1">
                    <Link to="/AddList">
                        <Icon type="uf-9square-2" />
                        {toggle ? "" : <span>币种</span>}
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/Mains">
                        <Icon type="uf-group-o" />
                        {toggle ? "" : <span>主子表</span>}
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/Treetable">
                        <Icon type="uf-group-2" />
                        {toggle ? "" : <span>树表</span>}
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }
}


export default Menus;
