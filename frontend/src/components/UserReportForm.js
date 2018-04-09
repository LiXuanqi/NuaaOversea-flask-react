import React from 'react';
import { Form, Input, Cascader, Checkbox, Button, Radio, InputNumber } from 'antd';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

// TODO: 收集学校的所有专业名
const majors = [{
  value: '能源与动力学院',
  label: '能源与动力学院',
  children: [{
    value: '飞行器动力工程',
    label: '飞行器动力工程',
  }, {
      value: '车辆工程',
      label: '车辆工程',
  }],
}, {
  value: '外国语学院',
  label: '外国语学院',
  children: [{
    value: '商务英语',
    label: '商务英语',
  }],
}];

class UserReportForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="本科专业"
        >
          {getFieldDecorator('major', {
            initialValue: ['能源与动力学院', '飞行器动力工程'],
            rules: [{ type: 'array', required: true, message: '请选择你的本科专业' }],
          })(
            <Cascader options={majors} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="本科GPA"
        >
          {getFieldDecorator('gpa', {
            rules: [{
              required: true, message: '请输入你的本科GPA!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="语言考试类型"
        >
          {getFieldDecorator('language-type', {
              rules: [{
                  required: true, message: '请选择你的语言考试类型!',
              }],
          })(
            <RadioGroup>
              <RadioButton value="TOEFL">TOEFL</RadioButton>
              <RadioButton value="IELTS">IELTS</RadioButton>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="阅读"
        >
          {getFieldDecorator('language_reading', { initialValue: 20 })(
            <InputNumber min={0} max={30} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="听力"
        >
          {getFieldDecorator('language_listening', { initialValue: 20 })(
            <InputNumber min={0} max={30} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="口语"
        >
          {getFieldDecorator('language_speaking', { initialValue: 20 })(
            <InputNumber min={0} max={30} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="写作"
        >
          {getFieldDecorator('language_writing', { initialValue: 20 })(
            <InputNumber min={0} max={30} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="GRE Verbal"
        >
          {getFieldDecorator('gre_verbal', { initialValue: 150 })(
            <InputNumber min={130} max={170} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="GRE Quantitative"
        >
          {getFieldDecorator('gre_quantitative', { initialValue: 150 })(
            <InputNumber min={130} max={170} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="GRE Writing"
        >
          {getFieldDecorator('gre_writing', { initialValue: 3.5 })(
            <InputNumber min={2.0} max={5.0} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="研究经历"
        >
          {getFieldDecorator('research', {
            rules: [{
              required: true, message: '请输入你的研究经历!',
            }],
          })(
            <RadioGroup>
              <Radio style={radioStyle} value={'无科研经历'}>无科研经历</Radio>
              <Radio style={radioStyle} value={'初步的科研经历'}>初步的科研经历</Radio>
              <Radio style={radioStyle} value={'大学实验室做过较深入的研究'}>大学实验室做过较深入的研究</Radio>
              <Radio style={radioStyle} value={'1~3个月的海外研究经历'}>1~3个月的海外研究经历</Radio>
              <Radio style={radioStyle} value={'大于3个月的海外研究'}>大于3个月的海外研究经历</Radio>        
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="实习经历"
        >
          {getFieldDecorator('project', {
            rules: [{
              required: true, message: '请输入你的项目经历!',
            }],
          })(
            <RadioGroup>
              <Radio style={radioStyle} value={'无相关实习经历，有个人项目'}>无相关实习经历，有个人项目</Radio>
              <Radio style={radioStyle} value={'国内小公司实习'}>国内小公司实习</Radio>
              <Radio style={radioStyle} value={'国内大公司实习'}>国内大公司实习</Radio>
              <Radio style={radioStyle} value={'BAT实习'}>BAT实习</Radio>
              <Radio style={radioStyle} value={'外企实习'}>外企实习</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="推荐信"
        >
          {getFieldDecorator('recommendation', {
            rules: [{
              required: true, message: '请输入你的信息!',
            }],
          })(
            <RadioGroup>
              <Radio style={radioStyle} value={'国内普通推'}>国内普通推</Radio>
              <Radio style={radioStyle} value={'海外普通推'}>海外普通推</Radio>
              <Radio style={radioStyle} value={'国内牛推'}>国内牛推</Radio>
              <Radio style={radioStyle} value={'海外牛推'}>海外牛推</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedUserReportForm = Form.create()(UserReportForm);

export default WrappedUserReportForm;