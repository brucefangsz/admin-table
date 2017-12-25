import React, { Component } from 'react';
import { Router, Route } from 'mirrorx';
import classnames from 'classnames';
import { Icon, Con } from 'tinper-bee';
// 引入组件
import Def from '../default/index';
import Main from '../main/index';
import AddList from '../currency/index';
import Treetable from '../treetable/index';
import Menus from 'components/Menus/index';
import MyHeader from 'components/MyHeader/index';
import './index.css';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }
    // 展开收起菜单
    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render() {
        const { toggle } = this.state;
        return (
            <div style={{ height: '100%' }}>
                <div className={classnames("side-bar", { "toggled": toggle })}>
                    {
                        toggle ? (
                            <Icon type="uf-iuap-col" className="nav-icon" />
                        ) : (<img src="//design.yonyoucloud.com/static/img/designer/logo.png"
                        />)
                    }
                    <Menus toggle={toggle} />
                </div>
                <div className={classnames("content", { "toggled": toggle })}>
                    <MyHeader toggle={toggle} onToggle={this.handleToggle} />
                    <Con fluid={true}>
                        <Route exact path="/" component={Def} />
                        <Route path="/AddList" component={AddList} />
                        <Route path="/Mains" component={Main} />
                        <Route path="/Treetable" component={Treetable} />
                    </Con>
                </div>
            </div>
        )
    }
}