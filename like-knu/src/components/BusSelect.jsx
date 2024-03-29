import Select from 'react-select';
import colors from '../constants/colors';
import { isDarkMode } from '../utils/DeviceManageUtil';
import GlobalColor from './styles/globalColor';

const CHOICE_MESSAGE = '경로를 선택해주세요';

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
      placeholder={CHOICE_MESSAGE}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: GlobalColor.getColor(),
          primary25: !isDarkMode() ? colors.WHITE : colors.DARK_GRAY,
          primary50: !isDarkMode() ? colors.GRAY100 : colors.DARK,
          primary75: !isDarkMode() ? 'black' : 'white',
          // neutral5: !getDarkMode() ? colors.BLACK : colors.DARK_WHITE,
          // neutral10: !getDarkMode() ? colors.BLACK : colors.DARK_WHITE,
          neutral0: !isDarkMode() ? colors.WHITE : colors.DARK_GRAY, // 오픈 컨테이너 배경
          // neutral30: !getDarkMode() ? colors.BLACK : colors.DARK_WHITE,
          // neutral40: !getDarkMode() ? colors.BLACK : colors.DARK_WHITE,
          // neutral50: !getDarkMode() ? colors.BLACK : colors.DARK_WHITE,
          neutral20: !isDarkMode() ? colors.GRAY200 : colors.GRAY500, // border
          // neutral60: !getDarkMode() ? colors.BLACK : colors.DARK_WHITE,
          // neutral70: !getDarkMode() ? colors.BLACK : colors.DARK_WHITE,
          neutral80: !isDarkMode() ? colors.BLACK : colors.DARK_WHITE, // 선택 레이블
          // neutral90: !getDarkMode() ? colors.BLACK : colors.DARK_WHITE,
          danger: !isDarkMode() ? colors.BLACK : colors.DARK_WHITE,
          dangerLight: !isDarkMode() ? colors.BLACK : colors.DARK_WHITE,
        },
      })}
      styles={SelectStyle}
    ></Select>
  );
}

const SelectStyle = {
  control: (control) => ({
    ...control,
    fontSize: '15px',
    fontWeight: '600',
    backgroundColor: !isDarkMode() ? colors.WHITE : colors.DARK_GRAY,
  }),
  container: (container) => ({
    ...container,
    width: '60%',
    transform: 'translate(-50%, 0)',
    left: '50%',
    fontSize: '13px',
    color: !isDarkMode() ? colors.BLACK : colors.DARK_WHITE
  }),
};
export default BusSelect;
