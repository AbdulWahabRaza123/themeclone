import { SocialIconMenuProps } from "./PropsInterface";
const SocialIcons = (props: SocialIconMenuProps) => {
  return (
    <>
      <props.icon style={{ marginLeft: props.margin }} />
    </>
  );
};

export default SocialIcons;
