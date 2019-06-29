import React from 'react'
import { Menu } from 'antd'
import MenuConfig from '../../utils/menuConfig'

import './index.scss'

const { SubMenu } = Menu;

class NavLeft extends React.Component {

  componentWillMount() {
    const menuList = this.renderMenu(MenuConfig);
    this.setState({
      menuList
    })
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }

  render() {
    return (
      <div className="nav-left">
        <div className="logo">
          <img src={require("../../assets/images/favicon.png")} alt="logo"/>
          <h1>Lry0504</h1>
        </div>
        <Menu theme="dark" mode="inline">
          {this.state.menuList}
        </Menu>
      </div>
    )
  }
}
export default NavLeft