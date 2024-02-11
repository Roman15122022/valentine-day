import {GifsProps} from "../types/types";

const Finally = ({classNames} : GifsProps) => {
  return (
    <div className={classNames}>
      <img src="finally.gif" alt="cat"/>
    </div>
  );
};

export default Finally;
