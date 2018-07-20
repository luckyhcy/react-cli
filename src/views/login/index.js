import React from "react";
import PropTypes from "prop-types";
import {observer, inject} from 'mobx-react'
import {Row, Col, Button, Checkbox} from 'antd';
import css from './css.less'

@inject('loginModel') @observer
class Login extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props)
        this.store = this.props.loginModel;
        this.$router = this.props.history;
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.location, this.props.location, nextProps.history.location, this.props.history.location)
    }

    componentDidMount() {
        console.log(css)
    }

    render() {
        return (
            <div className={css.bg + ' login'}>
                <div className={css['login-con']}>
                    <Row>
                        <Col span={10}>
                            <div className={css['login-con-left']}>
                                <Row>
                                    <Col span={24}>
                                        <div className={css['left-img-con']}>
                                            <img className={css['left-img']} src={require("../../assert/logo.png")}/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <div className={css['left-txt']}>小管家后台管理系统</div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={14}>
                            <div className={css['login-con-right']}>
                                <Row>
                                    <Col span={24}>
                                        <div className={css['row1']}>
                                            <Row>
                                                <Col span={4} className={css['input-icon-con']}>
                                                    <img className={css['input-icon']}
                                                         src={require("../../assert/uName.png")}/>
                                                </Col>
                                                <Col span={20} className={css['input-col']}>
                                                    <input type="text" className={css['hcy-input']} placeholder="请输入用户名"
                                                           onChange={(e) => {
                                                               this.store.uName(e)
                                                           }}/>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <div className={css['row2']}>
                                            <Row>
                                                <Col span={4} className={css['input-icon-con']}>
                                                    <img className={css['input-icon']} src={require("../../assert/pwd.png")}/>
                                                </Col>
                                                <Col span={20} className={css['input-col']}>
                                                    <input type="text" className={css['hcy-input']} placeholder="请输入密码"
                                                           onChange={(e) => {
                                                               this.store.pWord(e)
                                                           }}/>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <div className={css['row3']}>
                                            <Checkbox checked>记住密码</Checkbox>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <div className={css['row4']}>
                                            <Button type="primary" size="large" className={css['row4-btn']} onClick={() => {
                                                this.store.login(this.$router)
                                            }}>登录</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Login;
