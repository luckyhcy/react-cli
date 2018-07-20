import React from 'react'
import css from './css.less'
import {Row, Col, Input, Icon, DatePicker, Button, Select, Table, Pagination} from 'antd';
import {observer, inject} from 'mobx-react'

import customerStatisticsModel from "../../models/CustomerStatisticsModel";

const {RangePicker} = DatePicker;
const Option = Select.Option;

const columns = [{
    title: 'Name',
    dataIndex: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 15; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

@inject('customerStatisticsModel') @observer
class Index extends React.Component {

    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };

    constructor(props) {
        super(props);
        this.store = this.props.customerStatisticsModel;
    }

    componentWillMount() {
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    };

    onChange() {

    }

    render() {
        const {selectedRowKeys} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <div className={css.CustomerStatistics}>
                <div className={css['CustomerStatistics-searchBox']}>
                    <Row>
                        <Col span="24" className={css['CustomerStatistics-searchBox-header']}>
                            搜索
                        </Col>
                    </Row>
                    <Row className={css['CustomerStatistics-searchBox-con']} gutter={5}>
                        <Col span="2" className={css['CustomerStatistics-label']}>
                            手机号
                        </Col>
                        <Col span="4">
                            <Input placeholder="请输入手机号" onChange={(e) => {
                                this.store.vModel(e, 'phone')
                            }}/>
                        </Col>
                        <Col span="2" className={css['CustomerStatistics-label']}>
                            券金额
                        </Col>
                        <Col span="4">
                            <Input placeholder="请输入券金额" onChange={(e) => {
                                this.store.vModel(e, 'qMoney')
                            }}/>
                        </Col>
                        <Col span="2" className={css['CustomerStatistics-label']}>
                            消券金额
                        </Col>
                        <Col span="4">
                            <Input placeholder="请输入消券金额" onChange={(e) => {
                                this.store.vModel(e, 'xqMoney')
                            }}/>
                        </Col>
                        <Col span="2" className={css['CustomerStatistics-label']}>
                            领取时间
                        </Col>
                        <Col span="4">
                            <DatePicker
                                placeholder="选择日期"
                                onChange={date => {
                                    this.store.vModel(date.format('YYYY-MM-DD'), 'getTime')
                                }}
                            />
                        </Col>
                        <Col span="24">
                            <br/>
                        </Col>
                        <Col span="2" className={css['CustomerStatistics-label']}>
                            券有效期
                        </Col>
                        <Col span="5">
                            <RangePicker
                                onChange={date => {
                                    this.store.vModel(date, 'termOfValidity')
                                }}
                            />
                        </Col>
                        <Col span="2" className={css['CustomerStatistics-label']}>
                            领取状态
                        </Col>
                        <Col span="4">
                            <Select
                                showSearch
                                style={{width: 200}}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={(e) => {
                                    this.store.vModel(e, 'status')
                                }}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Col>
                        <Col span="5" className={css['CustomerStatistics-label']}>
                            <Button type="primary" className={css['CustomerStatistics-searchButton']}>搜索</Button>
                        </Col>
                    </Row>
                </div>
                <div className={css['CustomerStatistics-table-con']}>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false}/>
                </div>
                <div className={css['CustomerStatistics-pag']}>
                    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange}/>,
                </div>
            </div>
        )
    }
}


export default Index
