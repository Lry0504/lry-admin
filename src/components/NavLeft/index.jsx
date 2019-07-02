import React from 'react'
import { Menu } from 'antd'
import MenuConfig from '../../utils/menuConfig'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { switchMenu } from '../../store/action'
import './index.scss'

const { SubMenu } = Menu;

class NavLeft extends React.Component {

  state = {
    currentKey: ''
  }

  componentWillMount() {
    const menuList = this.renderMenu(MenuConfig);
    this.setState({
      menuList
    })
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return(
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      )
    })
  }

  homeHandleClick = () => {
    const { dispatch } = this.props;
    dispatch(switchMenu('首页'));
    this.setState({
      currentKey: ''
    })
  }

  handleClick = ({ item, key }) => {
    if (key === this.state.currentKey) {
      return false;
    }
    const { dispatch } = this.props;
    dispatch(switchMenu(item.props.title));
    this.setState({
      currentKey: key
    })
  }

  render() {
    return (
      <div className="nav-left">
        <NavLink to="/home" onClick={this.homeHandleClick}>
          <div className="logo">
            <img src={require("../../assets/images/favicon.png")} alt="logo"/>
            <h1>Lry0504</h1>
          </div>
        </NavLink>
        <Menu theme="dark" mode="inline" onClick={this.handleClick}>
          {this.state.menuList}
        </Menu>
      </div>
    )
  }
}
export default connect()(NavLeft)