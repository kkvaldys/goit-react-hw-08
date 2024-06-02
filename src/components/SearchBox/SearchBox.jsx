import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const searchBoxData = useSelector(selectNameFilter);

  return (
    <div className={css.searchBoxContainer}>
      <p className={css.searchBoxLabel}>Find contacts by name:</p>
      <input
        type="text"
        value={searchBoxData}
        onChange={(event) => {
          const userInput = event.target.value;
          dispatch(changeFilter(userInput));
        }}
      />
    </div>
  );
}
