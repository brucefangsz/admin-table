import React, { Component } from 'react';
import { Link } from 'mirrorx';
import Table from 'bee-table';
import './index.css';
const columns4 = [
    {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        width: "40%"
    },
    {
        title: "年龄",
        dataIndex: "age",
        key: "age",
        width: "30%"
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address"
    }
];

const data4 = [
    {
        key: 1,
        name: "John Brown sr.",
        age: 60,
        address: "New York No. 1 Lake Park",
        children: [
            {
                key: 11,
                name: "John Brown",
                age: 42,
                address: "New York No. 2 Lake Park"
            },
            {
                key: 12,
                name: "John Brown jr.",
                age: 30,
                address: "New York No. 3 Lake Park",
                children: [
                    {
                        key: 121,
                        name: "Jimmy Brown",
                        age: 16,
                        address: "New York No. 3 Lake Park"
                    }
                ]
            },
            {
                key: 13,
                name: "Jim Green sr.",
                age: 72,
                address: "London No. 1 Lake Park",
                children: [
                    {
                        key: 131,
                        name: "Jim Green",
                        age: 42,
                        address: "London No. 2 Lake Park",
                        children: [
                            {
                                key: 1311,
                                name: "Jim Green jr.",
                                age: 25,
                                address: "London No. 3 Lake Park"
                            },
                            {
                                key: 1312,
                                name: "Jimmy Green sr.",
                                age: 18,
                                address: "London No. 4 Lake Park"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        key: 2,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park"
    }
];
class Treetable extends Component {
    constructor() {
        super();
        this.state = ({

        })
    }
    render() {
        return (
            <Table columns={columns4} data={data4} style={{width:'100%'}}/>
        )
    }
}
export default Treetable;