import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

export type StarProps = IconProps & { isSelected: boolean };

const starStyle = "h-8 w-8 text-gray-300 hover:scale-110";

/**
 * 星アイコン
 */
const Star: React.FC<StarProps> = (props) => {
  const { isSelected, ...rest } = props;
  {
    if (isSelected) {
      return <StarFilledIcon className={starStyle} {...rest} />;
    }

    return <StarIcon className={starStyle} {...rest} />;
  }
};

export default Star;
