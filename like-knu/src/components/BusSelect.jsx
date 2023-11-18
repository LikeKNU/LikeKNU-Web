import colors from "../constants/colors";
import Select from "react-select";

function BusSelect({ options, value, label, a }) {
  return (
    <Select
      defaultValue={options[0]}
      options={options}
      isSearchable={false}
      getOptionValue={(option) => `${option[value]}`}
      getOptionLabel={(option) => `${option[label]}`}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: colors.COMMON,
          primary50: colors.GRAY100,
          primary75: "black",
        },
      })}
      styles={SelectStyle}
    ></Select>
  );
}
const SelectStyle = {
  control: (control) => ({
    ...control,
    fontSize: "15px",
    fontWeight: "600",
  }),
  container: (container) => ({
    ...container,
    width: "60%",
    transform: "translate(-50%, 0)",
    left: "50%",
    fontSize: "13px",
  }),
};
export default BusSelect;
