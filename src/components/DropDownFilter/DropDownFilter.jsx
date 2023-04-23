import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { setFilter } from "redux/filter/slice";
import { selectFilterValue } from "redux/filter/selectors";

import { Select } from "./DropDownFilter.styled";

function DropDownFilter() {
  const dispatch = useDispatch();

   const defaultValues = {
    filter: useSelector(selectFilterValue),
  };

  const { register } = useForm({ defaultValues: defaultValues });

  const onFilterChange = (data) => {
    dispatch(setFilter(data.target.value));
  };

  return (
    <>
      <Select {...register("filter")} onChange={(data) => onFilterChange(data)}>
        <option value="all">all</option>
        <option value="follow">follow</option>
        <option value="following">following</option>
      </Select>
    </>
  );
}

export default DropDownFilter;
