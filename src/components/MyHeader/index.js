import React, { Component } from 'react';
import { Navbar, FormControl, Badge, Icon, Menu } from 'tinper-bee';
import { Link } from 'mirrorx';
import classnames from 'classnames';

import './index.css';

const NavItem = Navbar.NavItem;
const Nav = Navbar.Nav;

class MyHeader extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false,
            current: 1
        }
    }
    onToggle(value) {
        this.setState({ expanded: value });
    }
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        const { toggle, onToggle } = this.props;
        return (
            <div className="header">
                <Navbar
                    expanded={this.state.expanded}
                    mode="horizontal"
                    onToggle={this.onToggle.bind(this)}
                    fluid={true}>
                    <span className="toggle" >
                        <Icon type="uf-navmenu" className={classnames({ "closed": toggle })} onClick={onToggle} />
                    </span>
                    <Link to="/">首页</Link>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            <Badge dataBadge="4" colors="warning">
                                <Icon type="uf-bell" />
                            </Badge>

                        </NavItem>

                        <NavItem eventKey={2} href="#">

                            <Icon type="comments" />
                        </NavItem>
                        <Menu mode="horizontal" className="dropdown">
                            <Menu.SubMenu title={<span>房帅中<Icon type="caret-down" /></span>}>
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Nav>
                </Navbar>

            </div>
        )
    }
}



export default MyHeader;