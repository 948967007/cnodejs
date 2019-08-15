import React, { Component } from 'react'
import { Layout ,Row ,  Col,Divider ,Menu ,Icon } from 'antd'
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css'
import Menubar from "./Menubar"

//将整个设计建议区域按照 24 等分的原则进行划分
export default class MainHeader extends Component {
    render() {
        return (
            <div>
                <Layout.Header>
                    <Row className={'wrap'}>
                        <Col md={6}>
                            <h1 id='logo'>discussion</h1>
                        </Col>
                        <Col md={18} className="col_18_mB">
                            <Divider type='vertical' className={'headerDivider'}></Divider>
                            <Menu mode='horizontal' theme='light' className={"T-Menu"}  id='menu'>
                                <Menu.Item><Link to='/index/all'><Icon type='home'/>首页</Link></Menu.Item>
                                <Menu.Item><Link to='/book'><Icon type='book'/>教程</Link></Menu.Item>
                                <Menu.Item><Link to='/about'><Icon type='info-circle-o'/>关于</Link></Menu.Item>
                            </Menu>
                            <Menubar className="menuBer"/>
                        </Col>
                    </Row>
                </Layout.Header>
            
            </div>
        )
    }
}
