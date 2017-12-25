import React, { Component } from 'react';
import { Button } from 'tinper-bee';
require('./edit.less');
export default class EditModul extends Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div className="edit_modul">
                <Button onClick={this.props.addData}>增加</Button>
                <Button onClick={this.props.deleteData}>删除</Button>
                <Button onClick={this.props.handleEdit}>编辑</Button>
                <Button onClick={this.props.frozen}>冻结</Button>
                <Button onClick={this.props.cancelFrozen}>取消冻结</Button>
            </div>
        )
    }
}