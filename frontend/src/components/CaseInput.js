import React from 'react';
import { Input, Select, DatePicker } from 'antd';
const Option = Select.Option;

class CaseInput extends React.Component {
  constructor(props) {
    super(props);

    const value = this.props.value || {};
    this.state = {
      university: value.university || 0,
      country: value.country || 'USA',
      major: value.major || 'CS',
      term: value.term || '2018FALL',
      result: value.result || 'ad',
      apply_time: value.apply_time || '',
      result_time: value.result_time || '',
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
  handleApplyTimeChange = (apply_time) => {
    if (!('value' in this.props)) {
      this.setState({ apply_time });
    }
    this.triggerChange({ apply_time });
  }
  handleResultTimeChange = (result_time) => {
    if (!('value' in this.props)) {
      this.setState({ result_time });
    }
    this.triggerChange({ result_time });
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
        />
        <Input 
          type="major"
          value={state.major}
          onChange={this.handleMajorChange}
        />
        <Input 
          type="term"
          value={state.term}
          onChange={this.handleTermChange}
        />
        <Select
          value={state.country}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCountryChange}
        >
          <Option value="USA">美国</Option>
          <Option value="CHINA">中国</Option>
        </Select>
        <Select
          value={state.result}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleResultChange}
        >
          <Option value="ad">ad</Option>
          <Option value="rej">rej</Option>
          <Option value="offer">offer</Option>
        </Select>
        <DatePicker showTime format="YYYY-MM-DD" value={state.apply_time} onChange={this.handleApplyTimeChange}/>
        <DatePicker showTime format="YYYY-MM-DD" value={state.result_time} onChange={this.handleResultTimeChange}/>
      </span>
    );
  }
}

export default CaseInput;