import React from 'react';
import { Form, Icon, Button, Divider } from 'antd';
import CaseInput from './CaseInput';

const FormItem = Form.Item;
let uuid = 0;

class CaseReportForm extends React.Component {
    remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
        return;
    }

    // can use data-binding to set
    form.setFieldsValue({
        keys: keys.filter(key => key !== k),
    });
    }

    add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    uuid++;
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
        keys: nextKeys,
    });
    }

    handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (err) {
            return;
        }
        // TODO: format the Date data.
        console.log('Received values of form: ', values);
    });
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: {
            xs: { span: 24 },
            sm: { span: 4 },
            },
            wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');

        const formItems = keys.map((k, index) => {
            return (
            <FormItem
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? '案例:' : ''}
                required={false}
                key={k}
            >
                {getFieldDecorator(`cases[${k}]`, {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{
                    type: 'object',
                    required: true,
                    whitespace: true,
                    message: "请完善录取结果信息或删除该区域。",
                }],
                })(
                <CaseInput/>
                )}
                {keys.length > 1 ? (

                <Button type="danger" onClick={() => this.remove(k)}>删除该案例</Button>
                ) : null}
                <Divider />
            </FormItem>
            
            );
        });
        return (
            <Form onSubmit={this.handleSubmit}>
            {formItems}
            <FormItem {...formItemLayoutWithOutLabel}>
                <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                <Icon type="plus" /> 添加案例
                </Button>
            </FormItem>
            <FormItem {...formItemLayoutWithOutLabel}>
                <Button type="primary" htmlType="submit">Submit</Button>
            </FormItem>
            </Form>
        );
    }
}

const WrappedCaseReportForm = Form.create()(CaseReportForm);
export default WrappedCaseReportForm;