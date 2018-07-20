import React from 'react'
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes.jsx'
import {observable} from "mobx";
import {Row, Col, Menu, Icon, Breadcrumb} from 'antd';
import css from './css.less'

class Index extends React.Component {
    state = {
        current: 'CustomerStatistics',
    };

    constructor(props) {
        super(props);
        this.$router = this.props.history;
        this.obj = {
            CustomerStatistics: '客户统计',
            rollUpload: '领取名单',
            qq: '消券名单'
        }
    }

    @observable breadcrumb = '客户统计';

    componentDidMount() {
        document.querySelector('#slideBar').style.minHeight = window.innerHeight - 50 + 'px';
        document.querySelector('#slideCon').style.height = window.innerHeight - 50 + 'px';
    }

    slideHandel(i) {
        let key = i.key;
        let arr = this.props.location.pathname.split('/');
        if (arr[arr.length - 1] !== key) {
            this.$router.push({pathname: key});
            this.breadcrumb = this.obj[key]
        }
    }

    render() {
        let arr = this.props.location.pathname.split('/');
        return (
            <div className={css['indexContent-header']}>
                <Row>
                    <Col span="3" className={css.slideBarCon}>
                        <Menu defaultSelectedKeys={arr.slice(arr.length - 1)} mode="inline" theme="dark" id="slideBar"
                              onSelect={(i) => {
                                  this.slideHandel(i)
                              }}>
                            {Object.keys(this.obj).map((x) =>
                                <Menu.Item key={x}>
                                    <Icon type="inbox"/>{this.obj[x]}
                                </Menu.Item>
                            )}
                        </Menu>
                    </Col>
                    <Col span="21" id="slideCon">
                        <Breadcrumb>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.breadcrumb}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className={css['indexContent-list']}>
                            {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Index
