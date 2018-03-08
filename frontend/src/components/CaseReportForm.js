import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Checkbox, Button, AutoComplete, Radio, InputNumber, DatePicker } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const AutoCompleteOption = AutoComplete.Option;
const { TextArea } = Input;
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

class CaseReportForm extends React.Component {
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
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

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

            <TextArea rows={4} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="项目经历"
        >
          {getFieldDecorator('project', {
            rules: [{
              required: true, message: '请输入你的项目经历!',
            }],
          })(
            <TextArea rows={4} />
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
            <TextArea rows={4} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="申请提交时间"
        >
            {getFieldDecorator('apply_time', {
                rules: [{ type: 'object', required: true, message: 'Please select time!' }],
            })(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="录取结果时间"
        >
            {getFieldDecorator('result_time', {
                rules: [{ type: 'object', required: true, message: 'Please select time!' }],
            })(
            <DatePicker />
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

const WrappedCaseReportForm = Form.create()(CaseReportForm);

export default WrappedCaseReportForm;