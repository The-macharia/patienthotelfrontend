import { DatePicker } from "antd";

// const { RangePicker } = DatePicker;

const PickerDate = (props) => {
  return (
    <div className="py-1">
      <p>{props.label}</p>
      <DatePicker style={{ width: "100%" }} />
    </div>
  );
};

export default PickerDate;
