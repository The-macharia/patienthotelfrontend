import { Spin } from "antd";

export default function Spinner(props) {
  return (
    <div className="spinner">
      <Spin size={props.size} />
    </div>
  );
}
