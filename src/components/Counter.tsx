import { useDispatch, useSelector } from "react-redux";
// import {
//   decrementAction,
//   incrementAction,
// } from "../store/reducers/mainReducer";
// import { increment, decrement } from "../store/toolkitStore/toolkitSlice";
import { increment, decrement } from "../store/toolkitStore/toolkitReducer";

import { counterSelector } from "../store/selectors/mainSelectors";

export const Counter: React.FC = () => {
  const count = useSelector(counterSelector);
  const dispatch = useDispatch();

  const add: VoidFunction = () => {
    dispatch(increment());
  };
  const minus: VoidFunction = () => {
    dispatch(decrement());
  };

  return (
    <>
      {count}
      <button onClick={add}>Add 1</button>
      <button onClick={minus}>Minus 1</button>
    </>
  );
};
