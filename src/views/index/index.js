import React from 'react'
import css from './css.less'
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes.jsx'
import { Row, Col, Menu, Icon } from 'antd';

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    onSelect() {

    }

    render() {
        return (
            <div>
                <Row className={css['index-header']}>
                    <Col span="5">
                        <div className={css.title}>
                            <Row>
                                <Col span="3">
                                    <div className={css.circle}/>
                                </Col>
                                <Col span="21">
                                    小当家后台管理系统
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span="17">
                        <Menu theme="dark" className={css['el-menu-demo']} mode="horizontal"
                              onSelect={this.onSelect.bind(this)}>
                            <Menu.Item key="1">
                                <Icon type="appstore" /> 首页
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span="2">
                        <div className={css.title1}>
                            <Row>
                                <Col span="3">
                                    <img src={require("../../assert/logo.png")} className={css.avatar}/>
                                </Col>
                                <Col span="21">
                                    某某某
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <div>
                    {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                </div>
            </div>
        )
    }
}


export default Index
