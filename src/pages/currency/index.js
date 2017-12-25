import React, { Component } from 'react';
import { Link } from 'mirrorx';
import { Row, Col, Panel, Table, Select, Button, Modal, Form, FormControl, FormGroup, InputGroup, Icon, Input, Popconfirm, Animate, ControlLabel } from 'tinper-bee';
import './index.css';
const Children = [];
let self;
for (let i = 10; i < 36; i++) {
    Children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
class AddList extends Component {
    constructor(props) {
        super(props);
        // 定义表格表头
        this.columns = [
            { title: "币种", dataIndex: "name", key: "name", width: "30%" },
            { title: "编码", dataIndex: "code", key: "code" },
            { title: "精度", dataIndex: "currdigit", key: "currdigit" },
            { title: "状态", dataIndex: "enablestatus", key: "enablestatus" },
            {
                title: "删除", dataIndex: "operation", key: "operation",
                render: (text, record, index) => {
                    return (
                        <Popconfirm content="确认删除?" id="aa" onClose={this.onDelete(index)}>
                            <Icon type="uf-del" />
                        </Popconfirm>
                    );
                }
            }
        ];
        this.state = {
            dataSource: [
                { key: "0", name: "沉鱼", code: "1", currdigit: "18", pk_currtype: false, enablestatus: "96, 77, 89", },
                { key: "1", name: "落雁", code: "2", currdigit: "18", pk_currtype: false, enablestatus: "96, 77, 89", },
                { key: "2", name: "闭月", code: "3", currdigit: "18", pk_currtype: false, enablestatus: "96, 77, 89", },
                { key: "3", name: "羞花", code: "4", currdigit: "18", pk_currtype: false, enablestatus: "96, 77, 89", },
            ],
            count: 4,
            showModal: false,
            refCbData: [],
            addOrChange: false,
            changeIndex: '',
            name: "",
            code: "",
            currdigit: "",
            enablestatus: "1",
            pk_currtype: false,
            dataLink: [],

        };
        self = this;
    }
    componentDidMount() {
        this.initData();
    }
    // 初始化数据
    initData = () => {
        // axios({
        //     method: 'get',
        //     // http://10.11.65.50:9999/appdemo/train_currtype/list
        //     // https://api.douban.com/v2/book/search?q=javascript&count=1
        //     url: 'http://api.douban.com/v2/book/search?q=javascript&count=1    ',
        // }).then(function (res) {
        //     console.log(res);
        // });

    }
    onCellChange = (index, key) => {
        return value => {
            const dataSource = [...this.state.dataSource];
            dataSource[index][key] = value;
            this.setState({ dataSource });
        };
    };
    // 删除
    onDelete = (index) => {
        return () => {
            const dataSource = [...this.state.dataSource];
            dataSource.splice(index, 1);
            this.setState({ dataSource });
        };
    };
    // 删除
    onDeleteLink = (index) => {
        return () => {
            const dataLink = [...this.state.dataLink];
            dataLink.splice(index, 1);
            this.setState({ dataLink });
        };
    }
    // 点击添加按钮
    handleAdd = () => {
        this.setState({
            name: '',
            code: '',
            currdigit: '',
            addOrChange: false,
            showModal: true
        });

    };
    // 判断数据为空
    isNullData(val) {
        var { name, code, currdigit } = this.state;
        var dataAry = [name, code, currdigit], isNull = val;
        console.log(dataAry)
        dataAry.map((item) => {
            if (item == '') {
                isNull = true;
                return false;
            }
        });
        return isNull;
    }
    // 添加列表
    addMoreList = () => {
        let isChange = (this.state.addOrChange);
        if (isChange) {
            let { dataSource, changeIndex } = this.state;
            dataSource[changeIndex].name = this.state.name;
            dataSource[changeIndex].code = this.state.code;
            dataSource[changeIndex].currdigit = this.state.currdigit;
            this.setState({ dataSource })
        } else {
            if (this.isNullData(false)) {
                alert('请完善信息');
                return false;
            }
            const { count, dataSource } = this.state;
            let { name, code, currdigit } = this.state;
            const newData = {
                key: count,
                name: name,
                code: code,
                currdigit: currdigit,
                enablestatus: '1',
            };
            this.setState({
                dataSource: [...dataSource, newData],
                count: count + 1
            });
        }

        this.setState({
            showModal: false
        })
    }
    getBodyWrapper = body => {
        return (
            <Animate
                transitionName="move"
                component="tbody"
                className={body.props.className}
            >
                {body.props.children}
            </Animate>
        );
    };
    // 关闭标段模态框
    close = () => {
        this.setState({
            showModal: false
        });
    }
    // 修改表单值
    valueChange(val, e) {
        this.setState({ [val]: e.target.value });
    }
    // 点击表单行
    rowClick = (record, index, e) => {
        if (e.target.getAttribute('class')) {
            return false;
        }
        var name = record.name, code = record.code, currdigit = record.currdigit;
        this.setState({
            changeIndex: index,
            addOrChange: true,
            name: name,
            code: code,
            currdigit: currdigit,
            showModal: true
        });
    }
    // 渲染页面
    render() {
        const { dataSource, addOrChange, dataLink } = this.state;
        const columns = this.columns;
        var data = this.state, tac = { 'text-align': 'right' }, mt = { 'margin-top': '10px' }, lmt = { 'margin-top': '18px' }
        return (
            <div>
                
                <Modal
                    show={this.state.showModal}
                    onHide={this.close} >
                    <Modal.Header>
                        <Modal.Title>{addOrChange ? '修改' : '添加'}币种信息：</Modal.Title>
                    </Modal.Header>
                    <Row>
                        <Modal.Body ref={(c) => { this.FormData = c }} style={tac} >
                            <Col md={2} xs={2} sm={2} style={lmt}>币种：</Col>
                            <Col md={4} xs={4} sm={4} ><FormControl type="text" onChange={this.valueChange.bind(this, 'name')} value={data.name} style={mt} />
                            </Col>
                            <Col md={2} xs={2} sm={2} style={lmt}>编码：</Col>
                            <Col md={4} xs={4} sm={4} ><FormControl type="text" onChange={this.valueChange.bind(this, 'code')} value={data.code} style={mt} /> </Col>
                            <Col md={2} xs={2} sm={2} style={lmt}>精度：</Col>
                            <Col md={4} xs={4} sm={4} ><FormControl type="text" onChange={this.valueChange.bind(this, 'currdigit')} value={data.currdigit} style={mt} /></Col>

                        </Modal.Body>
                    </Row>
                    <Modal.Footer>
                        <Button onClick={this.close} shape="border" style={{ marginRight: 50 }}>关闭</Button>
                        <Button onClick={this.addMoreList} colors="primary">{addOrChange ? '修改' : '确认'}</Button>
                    </Modal.Footer>
                </Modal>
                <Button
                    className="editable-add-btn"
                    colors="primary"
                    className="a"
                    onClick={this.handleAdd}
                    style={{'margin':'15px'}}
                >
                    添加
                </Button>
                <Table
                    bordered
                    data={dataSource}
                    columns={columns}
                    getBodyWrapper={this.getBodyWrapper}
                    onRowClick={this.rowClick}
                />
            </div>
        );
    }
}
export default AddList;