import React from 'react';
import { Input, Select, Divider } from 'antd';

const Option = Select.Option;

class CaseInput extends React.Component {
  constructor(props) {
    super(props);

    const value = this.props.value || {};
    this.state = {
      university: value.university || '',
      country: value.country || '',
      major: value.major || '',
      term: value.term || '',
      result: value.result || 'ad',
    };
  }
  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState(value);
    }
  }
  handleUniversityChange = (university) => {
    if (!('value' in this.props)) {
      this.setState({ university });
    }
    this.triggerChange({ university });
  }
  handleCountryChange = (country) => {
    if (!('value' in this.props)) {
      this.setState({ country });
    }
    this.triggerChange({ country });
  }
  handleTermChange = (term) => {
    if (!('value' in this.props)) {
      this.setState({ term });
    }
    this.triggerChange({ term });
  }
  handleResultChange = (result) => {
    if (!('value' in this.props)) {
      this.setState({ result });
    }
    this.triggerChange({ result });
  }
  handleMajorChange = (major) => {
    if (!('value' in this.props)) {
      this.setState({ major });
    }
    this.triggerChange({ major });
  }

  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  }
  render() {
    const { size } = this.props;
    const state = this.state;
    return (
      <span>
        <Input
          type="university"
          size={size}
          value={state.university}
          onChange={this.handleUniversityChange}
          style={{ width: '65%', marginRight: '3%' }}
          placeholder="申请学校"
        />
        <Input 
          type="major"
          value={state.major}
          onChange={this.handleMajorChange}
          placeholder="专业"
        />
        <Input 
          type="term"
          value={state.term}
          onChange={this.handleTermChange}
          placeholder="入学学期"
        />
        <Select
          value={state.country}
          size={size}
          onChange={this.handleCountryChange}
        >
          <Option value="USA">美国</Option>
          <Option value="CHINA">中国</Option>
        </Select>
        <Select
          value={state.result}
          size={size}

          onChange={this.handleResultChange}
        >
          <Option value="ad">ad</Option>
          <Option value="rej">rej</Option>
          <Option value="offer">offer</Option>
        </Select>
        <Divider/>
      </span>
    );
  }
}

export default CaseInput;