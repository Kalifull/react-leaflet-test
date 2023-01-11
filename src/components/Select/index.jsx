import { Select as SelectAntd } from 'antd';

const { Option } = SelectAntd;

const Select = ({ options, defaultValue, type, recordId, handleChange }) => {
  const handleSelectChange = (value) => {
    handleChange(value, type, recordId);
  };

  const onClickStopProp = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <SelectAntd
        defaultValue={defaultValue}
        style={{ width: 150 }}
        onSelect={handleSelectChange}
        onClick={onClickStopProp}
      >
        {options.map(({ title }, index) => (
          <Option key={index} value={title}>
            {title}
          </Option>
        ))}
      </SelectAntd>
    </div>
  );
};

export default Select;
