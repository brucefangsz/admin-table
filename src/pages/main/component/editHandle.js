import React, { Component } from 'react';
import { Row, Col, FormControl, Button, Table, Tooltip, Icon, InputRender } from 'tinper-bee';
export default class EditHandle extends Component {
    constructor() {
        super();
    }
    render() {
        let isShow = this.props.isEdit;
        return (
            <div>
                {isShow ?
                    <div>
                        编辑模块
                        <Button onClick={this.props.cancelEdit}>确认</Button>
                        <Button onClick={this.props.cancelEdit}>取消</Button>
                    </div>
                    : ""}

            </div>
        )
    }
}