import React, { Component } from 'react';
import classnames from 'classnames';
require('./searchModul.less');
export default class SearchModul extends Component {
    constructor() {
        super();
        this.state = ({
            isShow: false
        })
    }
    showSearch = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        let {isSearch} = this.props;
        let {isShow} = this.state,
            openOrClose = { 'open': isShow, 'close': !isShow };
        return (
            <div className="searchModul">
                <div>快速搜索<span className="operationButton" onClick={this.showSearch}>{isShow ? '收起' : '展开'}</span></div>
                <div className={classnames('searchBox ', openOrClose)}>

                </div>
            </div>
        )
    }
}