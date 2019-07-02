import React, { Component } from 'react'
import { Card, Spin, Alert, Icon } from 'antd'
import './ui.scss'

export class Loadings extends Component {
  render() {
    const antIcon = <Icon type="loading" style={{fontSize: 24}} />
    return (
      <div>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small" />
          <Spin style={{margin: '0 20px'}} />
          <Spin  size="large" />
          <Spin indicator={antIcon} style={{marginLeft: 20}} />
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Spin tip="Loading">
            <Alert type="info" message="欢迎来到lry-admin后台管理系统" description="天妒嘤才狗子赖"/>
          </Spin>
        </Card>
      </div>
    )
  }
}

export default Loadings
