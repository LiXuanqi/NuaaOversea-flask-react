import React from 'react';
import { Input, Select } from 'antd';

const Option = Select.Option;

class CaseInput extends React.Component {
  constructor(props) {
    super(props);
    const value = this.props.value || {};
    this.state = {
      university: value.university || '',
      country: value.country ,
      major: value.major || '',
      term: value.term ,
      result: value.result ,
      degree: value.degree ,
    };
  }
  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState(value);
    }
  }
  handleUniversityChange = (e) => {

    const university = e.target.value;
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
  handleDegreeChange = (degree) => {
    if (!('value' in this.props)) {
      this.setState({ degree });
    }
    this.triggerChange({ degree });
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
  handleMajorChange = (e) => {
    const major = e.target.value;
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
      <div>
        <Input
          type="text"
          value={state.university}
          onChange={this.handleUniversityChange}
          placeholder="申请学校"
        />    
        <Input 
          type="text"
          value={state.major}
          onChange={this.handleMajorChange}
          placeholder="专业"
        />
        <Select
          value={state.degree}
          size={size}
          onChange={this.handleDegreeChange}
          placeholder="学位"
        >
          <Option value="master">Master</Option>
          <Option value="phd">PhD</Option>
        </Select>

        <Select
          value={state.term}
          size={size}
          onChange={this.handleTermChange}
          placeholder="入学日期"
        >
          <Option value="2018fall">2018FALL</Option>
          <Option value="2018spring">2018SPING</Option>
        </Select>
        <Select
          value={state.country}
          size={size}
          onChange={this.handleCountryChange}
          placeholder="国家"
        >
          <Option value="USA">美国</Option>
          <Option value="CHINA">中国</Option>
        </Select>
        <Select
          value={state.result}
          size={size}
          onChange={this.handleResultChange}
          placeholder="录取结果"
        >
          <Option value="ad">ad</Option>
          <Option value="rej">rej</Option>
          <Option value="offer">offer</Option>
        </Select>
      </div>
    );
  }
}

export default CaseInput;