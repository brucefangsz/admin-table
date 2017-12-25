import React, { Component } from 'react';
import { Row, Col, FormControl, Button, Table, Tooltip, Icon, InputRender } from 'tinper-bee';
export default class AddModul extends Component {
    constructor() {
        super();
        this.state = ({
            mName: '',
            mUser: '',
            children_data: [],
            childIndex: 0,
            curIndex: ''
        });
        this.columnsChild = [
            {
                title: "备注",
                dataIndex: "productdesc",
                key: "productdesc",
                render: (text, record, index) => (
                    <input onChange={this.onInputChange(text, index, 'productdesc')} />
                )
            },
            {
                title: "产品",
                dataIndex: "productname",
                key: "productname",
                render: (text, record, index) => (
                    <input onChange={this.onInputChange(text, index, 'productname')} />
                )
            },
            {
                title: "订单金额",
                dataIndex: "purchaseamount",
                key: "purchaseamount",
                render: (text, record, index) => (
                    <input onChange={this.onInputChange(text, index, 'purchaseamount')} />
                )
            },
            {
                title: "单位",
                dataIndex: "unit",
                key: "unit",
                render: (text, record, index) => (
                    <input onChange={this.onInputChange(text, index, 'unit')} />
                )
            }
        ];
    }
    check = (flag, obj) => {
        console.log(flag);
        console.log(obj);
    }
    // 修改表格数据
    changeVal = (val, e) => {
        this.setState({
            [val]: e.target.value
        })
    }
    // 添加数据
    addData = () => {
        let {mName, mUser, children_data} = this.state,
            data = { 'mName': mName, 'mUser': mUser, 'childData': children_data }
        this.props.addButton(data);
        this.setState({ mName: '', mUser: '', children_data: [] });
    }
    // 点击行
    onRowClick = (record, index, e) => {
        this.setState({
            curIndex: index
        })
    }
    // 添加行
    addChild = () => {
        let {children_data, childIndex} = this.state;
        childIndex += 1;
        let childData = { ipuquotationdetailid: '1', productdesc: '1', productname: '1', purchaseamount: '1', unit: '1', quotationid: '1', key: childIndex };
        children_data.push(childData);
        this.setState({
            children_data, childIndex: childIndex
        })
    }
    // 删除子表单
    deleteChild = () => {
        let {curIndex, children_data} = this.state,
            len = children_data.length;
        if (curIndex !== '') {
            children_data.splice(curIndex, 1);
        } else {
            children_data.splice(len - 1, 1);
        }
        this.setState({ children_data, curIndex: '' })
    }
    onInputChange = (text, index, key) => {
        return value => {
            const {children_data} = this.state;
            children_data[index][key] = value.target.value;
            this.setState({ children_data }, () => {
                console.log(this.state.children_data);
            });
        };
    }
    render() {
        let {isAddData, cancelAdd} = this.props;
        let {mName, mUser} = this.state,
            columnsChild = this.columnsChild;
        return (
            <div style={{ padding: '15px' }}>
                {isAddData ?
                    <div>
                        <Button onClick={this.addData}>添加</Button> <Button onClick={cancelAdd}>取消</Button>
                        <Row>
                            <Col md={6} xs={6} sm={6}>
                                备注：<FormControl type="text" value={mName} onChange={this.changeVal.bind(this, 'mName')} />
                            </Col>
                            <Col md={6} xs={6} sm={6}>
                                联系人：<FormControl type="text" value={mUser} onChange={this.changeVal.bind(this, 'mUser')} />
                            </Col>
                        </Row>
                        <div style={{ marginTop: 40 }}>
                            <Button onClick={this.addChild}>添加</Button> <Button onClick={this.deleteChild}>删除</Button>
                        </div>
                        <Table
                            onRowClick={this.onRowClick}
                            columns={columnsChild}
                            data={this.state.children_data}
                        />
                    </div>
                    : ""}
            </div>
        )
    }
}