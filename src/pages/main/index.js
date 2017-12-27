import React, { Component } from "react";
import classnames from 'classnames';
import { Table, Pagination, SearchPanel, FormControl, Row, Col, Label, FormGroup, Radio } from "tinper-bee";
// 内部组件
import EditModul from "./component/edit";
import Logo from "./component/icon";
import AddModul from "./component/addModul";
import SearchModul from "./component/searchModul";
import EditHandle from "./component/editHandle";
import { Link } from 'mirrorx';
const tableColumns = [

    {
        dataIndex: 'ecbillcode',
        key: 'ecbillcode',
        title: '订单编号'
    }, {
        dataIndex: 'corp_account',
        key: 'corp_account',
        title: '银行账号'
    },
    {
        dataIndex: 'processor',
        key: 'processor',
        title: '录入人'
    },
    {
        dataIndex: 'processtime',
        key: 'processtime',
        title: '订单日期'
    },
    {
        dataIndex: 'currencyid',
        key: 'currencyid',
        title: '币种'
    },
    {
        dataIndex: 'currency_code',
        key: 'currency_code',
        title: '币种编码'
    },

    {
        dataIndex: 'contact',
        key: 'contact',
        title: '联系人'
    },
    {
        dataIndex: 'phone',
        key: 'phone',
        title: '联系电话'
    },
    {
        dataIndex: 'status',
        key: 'status',
        title: '状态'
    }, {
        dataIndex: 'description',
        key: 'description',
        title: '备注'
    }
];
const columnsChild = [
    { title: "产品", dataIndex: "productname", key: "productname" },
    { title: "订单金额", dataIndex: "purchaseamount", key: "purchaseamount" },
    { title: "单位", dataIndex: "unit", key: "unit" },
    { title: "备注", dataIndex: "productdesc", key: "productdesc" }
];

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 子表数据
            children_data: [],
            // 展开收起
            toggle: false,
            // 当前选中行数
            curIndex: '',
            // 增加数据模块
            isAddData: false,
            // 搜索模块
            isSearch: false,
            // 编辑模块
            isEdit: false,
            tableData: [
                {
                    'description': '备注1',
                    'status': '启用',
                    'subject': '李小龙',
                    'ipuquotaionid': '主键',
                    'corp_account': '8888 888 8888',
                    'processor': '房帅中',
                    'processtime': '2012-01-09',
                    'currencyid': '真',
                    'currency_code': '001',
                    'ecbillcode': '000021',
                    'contact': '李小龙',
                    'phone': '198888',
                    'key': 0,
                    'children_data': [
                        { ipuquotationdetailid: '1', productdesc: '备注1', productname: '产品1_1', purchaseamount: 1000, unit: '元', quotationid: '1', key: '1' },
                        { ipuquotationdetailid: '2', productdesc: '备注2', productname: '产品1_2', purchaseamount: 1000, unit: '元', quotationid: '2', key: '2' },
                    ]
                },
                {
                    'description': '假装是个备注',
                    'status': '启用',
                    'subject': '甄子丹',
                    'ipuquotaionid': '主键',
                    'corp_account': '8888 888 8888',
                    'processor': '房帅中',
                    'processtime': '2012-01-09',
                    'currencyid': '真',
                    'currency_code': '001',
                    'ecbillcode': '000021',
                    'contact': '甄子丹',
                    'phone': '18701517173',
                    'key': 1,
                    'children_data': [
                        { ipuquotationdetailid: '1', productdesc: '备注2_1', productname: '产品2_1', purchaseamount: 1000, unit: '元', quotationid: '1', key: '1' },
                    ]
                }
            ],
            curKey: 1
        };
    }
    // 点击菜单展开收起
    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    // 点击行
    rowclick = (record, index, e) => {
        let { tableData } = this.state, child = tableData[index].children_data;
        this.setState({ curIndex: index, children_data: child });
    };
    // 点击增加按钮
    addData = () => {
        this.setState({
            isAddData: true
        })
    }
    // 取消添加
    cancelAdd = () => {
        this.setState({
            isAddData: false
        })
    }
    // 添加数据
    addButton = (obj) => {
        let { tableData, curKey } = this.state;
        console.log(curKey += 1);
        let addData = {
            'description': obj.mName,
            'status': '启用',
            'subject': '甄子丹',
            'ipuquotaionid': '主键',
            'corp_account': obj.mAccount,
            'processor': obj.mInputUser,
            'processtime': obj.mCurDate,
            'currencyid': '真',
            'currency_code': '001',
            'ecbillcode': obj.mNum,
            'contact': obj.mUser,
            'phone': obj.mPhonNum,
            'key': curKey,
            'children_data': obj.childData
        }
        tableData.push(addData)
        this.setState({
            tableData, curKey, isAddData: false
        })
    }
    // 删除数据
    deleteData = () => {
        let { curIndex, tableData, children_data } = this.state;
        if (curIndex === '') {
            alert('请选择删除')
        } else {
            tableData.splice(curIndex, 1);
            this.setState({
                tableData, children_data: []
            })
        }
    }
    // 编辑数据
    handleEdit = () => {
        this.setState({
            isEdit: true
        })
    }
    // 取消编辑
    cancelEdit = () => {
        this.setState({
            isEdit: false
        })
    }
    // 冻结数据
    frozen = () => {
        console.log('冻结数据');
        let { curIndex, tableData, children_data } = this.state;
        if (curIndex === '') {
            alert('请选择数据')
        } else {
            tableData[curIndex].status = '停用';
            console.log(tableData[curIndex]);
            this.setState({
                tableData
            })
        }

    }
    cancelFrozen = () => {
        let { curIndex, tableData, children_data } = this.state;
        if (curIndex === '') {
            alert('请选择数据')
        } else {
            tableData[curIndex].status = '启用';
            console.log(tableData[curIndex]);
            this.setState({
                tableData
            })
        }
    }
    render() {
        let sh = { height: '100%' },
            { toggle, isAddData, isSearch, tableData, isEdit } = this.state;
            let searchContent=()=>{
            return (
                <div className="demo">
                    <div>
                        <label className="demo-label">状态:</label>
                        <Radio.RadioGroup
                            name="state"
                            selectedValue={this.state.state}
                            onChange={this.stateChange.bind(this)}>
                            <Radio.RadioButton value="all">全部</Radio.RadioButton>
                            <Radio.RadioButton value="initial">初始化</Radio.RadioButton>
                            <Radio.RadioButton value="todo">待处理</Radio.RadioButton>
                            <Radio.RadioButton value="doing">处理中</Radio.RadioButton>
                            <Radio.RadioButton  value="done">已完成</Radio.RadioButton>
                            <Radio.RadioButton  value="closed">已完成</Radio.RadioButton>
                        </Radio.RadioGroup>
                    </div>

                    <div className="margin-top-10">
                        <span className="demo-item">
                            <label className="demo-label">名称:</label>
                            <FormControl placeholder="请输入名称"/>
                        </span>
                        <span className="demo-item">
                            <label className="demo-label">编码:</label>
                            <FormControl placeholder="请输入编码"/>
                        </span>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {this.state.isAddData ? '' : <EditModul
                    addData={this.addData}
                    deleteData={this.deleteData}
                    handleEdit={this.handleEdit}
                    frozen={this.frozen}
                    cancelFrozen={this.cancelFrozen} />}
                <EditHandle
                    isEdit={isEdit}
                    cancelEdit={this.cancelEdit} />
                <AddModul
                    isAddData={isAddData}
                    cancelAdd={this.cancelAdd}
                    addButton={this.addButton} />
                <div>{isAddData ? "" :
                    <div>
                        <SearchModul
                            isSearch={isSearch} />
                        <Table
                            style={{ width: '100%' }}
                            columns={tableColumns}
                            data={tableData}
                            onRowClick={this.rowclick}
                            title={currentData => <div>标题: 我是主表</div>}
                        />
                        <Table
                            columns={columnsChild}
                            data={this.state.children_data}
                            title={currentData => <div>标题: 我是子表</div>}
                        />
                    </div>
                }</div>

            </div>
        );
    }
}
