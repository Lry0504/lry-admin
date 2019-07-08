import React, { Component } from 'react'
import { Card, Spin, Alert, Icon, Switch } from 'antd'
import './ui.scss'

export class Loadings extends Component {
  state = {
    loading: false
  }
  handleClick = () => {
    this.setState({
      loading: !this.state.loading
    })
  }

  render() {
    const antIcon = <Icon type="loading" style={{fontSize: 24}} />
    return (
      <div>
        <Card title="Spin基本用法" className="card-wrap">
          <Spin size="small" />
          <Spin style={{margin: '0 20px'}} />
          <Spin  size="large" />
        </Card>
        <Card title="自定义图形" className="card-wrap">
          <Spin indicator={antIcon} style={{marginLeft: 20}} />
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Spin tip="Loading" spinning={this.state.loading}>
            <Alert type="info" message="欢迎来到lry-admin后台管理系统" description="天妒嘤才狗子赖"/>
          </Spin>
          <div style={{marginTop: 16}}>
            Loading State:
            <Switch checked={this.state.loading} onChange={this.handleClick} style={{marginLeft: 15}}/>
          </div>
        </Card>
      </div>
    )
  }
}

export default Loadings
