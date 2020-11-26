import { Select } from "antd";
const { Option } = Select;

const Selection = (props) => {
  return (
    <div className="py-1">
      <p>{props.label}</p>
      <Select
        style={{ width: "100%" }}
        defaultValue="any"
        onChange={(e) => console.log(e)}
      >
        <Option value="any">Any</Option>
        <Option value="normal">Normal</Option>
        <Option value="deluxe">Deluxe </Option>
      </Select>
    </div>
  );
};

export default Selection;
