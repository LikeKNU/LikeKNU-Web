import colors from "../constants/colors";
import Select from "react-select";

function BusSelect({ options, value, label, setId, setMesseage }) {
  const setShuttleId = (e) => {
    setMesseage(e.note);
    setId(e.shuttleId);
  };
  return (
    <Select
      getOptionValue={(option) => `${option[value]}`}
      getOptionLabel={(option) => `${option[label]}`}
      options={options}
      isSearchable={false}
      onChange={setShuttleId}
      placeholder={"고르던가말던가"}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: colors.COMMON,
          primary50: colors.GRAY100,
          primary75: "black",
          primary25: colors.WHITE,
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
