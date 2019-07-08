import React, { Component } from 'react'
import { Card, Steps, Icon } from 'antd'
import './ui.scss'

const { Step } = Steps;
const steps = [
  {
    title: '天妒',
    content: 'Lry0504'
  },
  {
    title: '嘤才',
    content: '天妒嘤才狗子赖'
  },
  {
    title: '狗子赖',
    content: '欢迎来到Lry-admin后台管理系统'
  }
];
export class StepBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }

  handleChange = current => {
    this.setState({
      current
    })
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Card title="基础步骤条" className="card-wrap">
          <Steps size="small" current={1}>
            <Step title="天妒" />
            <Step title="嘤才" />
            <Step title="狗子赖" />
          </Steps>
        </Card>
        <Card title="带图标步骤条" className="card-wrap">
          <Steps size="small" current={3}>
            <Step title="天" icon={<Icon type="user" />} />
            <Step title="妒" icon={<Icon type="solution" />} />
            <Step title="嘤" icon={<Icon type="loading" />} />
            <Step title="才" icon={<Icon type="smile-o" />} />
          </Steps>
        </Card>
        <Card title="可点击步骤条" className="card-wrap">
          <Steps current={current} onChange={this.handleChange}>
            {
              steps.map(step => (
                <Step title={step.title} />
              ))
            }
          </Steps>
          <div className="step-content">{steps[current].content}</div>
        </Card>
      </div>
    )
  }
}

export default StepBar
