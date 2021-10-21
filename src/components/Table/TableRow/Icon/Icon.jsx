import { ReactComponent as EditIcon } from '../../../../assets/icons/pencil.svg';
import { ReactComponent as RemoveIcon } from '../../../../assets/icons/trash.svg';
import { ReactComponent as DoneIcon } from '../../../../assets/icons/check-mark.svg';

const TypeToIconMap = {
  edit: <EditIcon />,
  remove: <RemoveIcon />,
  done: <DoneIcon />,
};

const Icon = ({ type }) => (
  TypeToIconMap[type]
);

export default Icon;
