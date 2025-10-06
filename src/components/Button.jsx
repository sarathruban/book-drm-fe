import { Button } from "antd";

const AppButton = ({
  text,
  type = "primary",
  shape = "default",
  icon,
  loading = false,
  disabled = false,
  block = false,
  onClick,
  style={}
}) => {
  return (
    <Button
      type={type}
      shape={shape}
      icon={icon}
      loading={loading}
      disabled={disabled}
      block={block}
      onClick={onClick}
      style={style}
    >
      {text}
    </Button>
  );
};

export default AppButton;
