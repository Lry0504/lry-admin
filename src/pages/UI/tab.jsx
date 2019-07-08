import React, { Component } from 'react'
import { Card, Tabs, Icon } from 'antd'
import './ui.scss'

const { TabPane }  = Tabs;
export class Tab extends Component {
  constructor(props) {
    super(props);
    const panes = [
      {title: 'Tab1', key: '1', content: 'Lry0504'},
      {title: 'Tab2', key: '2', content: '天妒嘤才狗子赖'},
      {title: 'Tab3', key: '3', content: '欢迎来到Lry-admin后台管理系统', closable: false}
    ];
    this.state = {
      activeKey: panes[0].key,
      panes
    }
    this.newTabIndex = 0;
  }

  handleChange = activeKey => {
    this.setState({
      activeKey
    })
  }

  handleEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const { panes } = this.state;
    const activeKey = `new Tab${this.newTabIndex++}`;
    const title = `new Tab${this.newTabIndex}`;
    panes.push({title: title, content: "这是新增的标签页",key: activeKey});
    this.setState({
      panes,
      activeKey
    })
  }

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i -1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({
      panes,
      activeKey
    })
  }

  render() {
    return (
      <div>
        <Card title="基本标签页" className="card-wrap">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab1" key="1">
              Lry0504
            </TabPane>
            <TabPane tab="Tab2" key="2">
              天妒嘤才狗子赖
            </TabPane>
            <TabPane tab="Tab3" key="3">
              欢迎来到lry-admin后台管理系统
            </TabPane>
          </Tabs>
        </Card>
        <Card title="图标类页签" className="card-wrap">
          <Tabs defaultActiveKey="1">
            <TabPane tab={
              <span>
                <Icon type="apple" /> Tab1
              </span>
            } key="1">
              苹果图标tab标签页
            </TabPane>
            <TabPane tab={
              <span>
                <Icon type="android" /> Tab2
              </span>
            } key="2">
              安卓图标tab标签页
            </TabPane>
          </Tabs>
        </Card>
        <Card title="卡片式页签" className="card-wrap">
          <Tabs defaultActiveKey="1" type="card">
            <TabPane tab="Tab1" key="1">
              Lry0504
            </TabPane>
            <TabPane tab="Tab2" key="2">
              天妒嘤才狗子赖
            </TabPane>
            <TabPane tab="Tab3" key="3">
              欢迎来到lry-admin后台管理系统
            </TabPane>
          </Tabs>
        </Card>
        <Card title="添加和关闭页签" className="card-wrap">
          <Tabs activeKey={this.state.activeKey} onChange={this.handleChange} onEdit={this.handleEdit} type="editable-card">
            {this.state.panes.map(pane => (
              <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                {pane.content}
              </TabPane>
            ))}
          </Tabs>
        </Card>
      </div>
    )
  }
}

export default Tab
