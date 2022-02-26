import Link from "next/link";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { AddButtonProps } from "./AddButton.types";

export const AddButton: React.FC<AddButtonProps> = (props: AddButtonProps) => {
  return (
    <Link href={props.route}>
          <AddCircleIcon style={{ fontSize: props.fontSize }} />
    </Link>
  );
}
