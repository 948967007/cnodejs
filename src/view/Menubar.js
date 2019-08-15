import React, { Component } from 'react'
import { Menu, Dropdown, Button,Icon } from 'antd';
import {NavLink} from "react-router-dom"

export default class Menubar extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <NavLink to="/index/all"><Icon type="home" />首页</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/book"><Icon type="book" />教程</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/about"><Icon type="info-circle-o" />关于</NavLink>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="mebuBar">
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button>菜单</Button>
        </Dropdown>
      </div>
    )
  }
}
