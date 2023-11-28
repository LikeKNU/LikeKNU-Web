import PageLayout from "../layouts/PageLayout";
import { PageHeader, Header } from "../components/styles/PageHeader";
import { getCampus } from "../utils/DeviceManageUtil";
import { TabItem, TabList } from "../components/styles/Tab";
import { useEffect, useState } from "react";
import { CampusEng } from "../constants/campus";
import { menu } from "../api/menu";
import { PAGE_NAME } from "../constants/pageName";
import { MenuSwiper } from "../components/menu/MenuSwiper";
const data = [
  {
    cafeteriaName: "학생식당",
    today: [
      {
        mealType: "아침",
        operatingTime: null,
        menus: [
          {
            menuName: "된장국",
          },
          {
            menuName: "밥",
          },
        ],
      },
      {
        mealType: "점심",
        operatingTime: "11:30 ~ 13:30",
        menus: [
          {
            menuName: "된장국",
          },
          {
            menuName: "밥",
          },
        ],
      },
      {
        mealType: "저녁",
        operatingTime: "11:30 ~ 13:30",
        menus: [
          {
            menuName: "된장국",
          },
          {
            menuName: "밥",
          },
        ],
      },
    ],
    tomorrow: [
      {
        mealType: "아침",
        operatingTime: null,
        menus: [
          {
            menuName: "된장국",
          },
          {
            menuName: "나물",
          },
        ],
      },
      {
        mealType: "점심",
        operatingTime: "11:30 ~ 13:30",
        menus: [
          {
            menuName: "나물",
          },
          {
            menuName: "밥",
          },
        ],
      },
      {
        mealType: "저녁",
        operatingTime: "11:30 ~ 13:30",
        menus: [
          {
            menuName: "된장국",
          },
          {
            menuName: "나물",
          },
        ],
      },
    ],
  },
  {
    cafeteriaName: "생활관식당",
    today: [
      {
        mealType: "아침",
        operatingTime: null,
        menus: [
          {
            menuName: "된장국",
          },
          {
            menuName: "밥",
          },
        ],
      },
      {
        mealType: "점심",
        operatingTime: "11:30 ~ 13:30",
        menus: [
          {
            menuName: "된장국",
          },
          {
            menuName: "밥",
          },
        ],
      },
      {
        mealType: "저녁",
        operatingTime: "11:30 ~ 13:30",
        menus: [
          {
            menuName: "된장국",
          },
          {
            menuName: "밥",
          },
        ],
      },
    ],
    tomorrow: [
      {
        mealType: "아침",
        operatingTime: null,
        menus: [
          {
            menuName: "나물",
          },
          {
            menuName: "밥",
          },
        ],
      },
      {
        mealType: "점심",
        operatingTime: "11:30 ~ 13:30",
        menus: [
          {
            menuName: "나물",
          },
          {
            menuName: "밥",
          },
        ],
      },
      {
        mealType: "저녁",
        operatingTime: "11:30 ~ 13:30",
        menus: [
          {
            menuName: "나물",
          },
          {
            menuName: "밥",
          },
        ],
      },
    ],
  },
  {
    cafeteriaName: "직원식당",
    today: [
      {
        mealType: "아침",
        operatingTime: null,
        menus: [
          {
            menuName: "된장국",
          },
          {
            menuName: "밥",
          },
        ],
      },
      {
        mealType: "점심",
        operatingTime: "11:30 ~ 13:30",
        menus: [
          {
            menuName: "된장국",
          },
          {
            menuName: "밥",
          },
        ],
      },
      {
        mealType: "저녁",
        operatingTime: "11:30 ~ 13:30",
        menus: [
          {
            menuName: "된장국",
          },
          {
            menuName: "밥",
          },
        ],
      },
    ],
    tomorrow: [
      {
        mealType: "아침",
        operatingTime: null,
        menus: [
          {
            menuName: "나물",
          },
          {
            menuName: "밥",
          },
        ],
      },
      {
        mealType: "점심",
        operatingTime: "11:30 ~ 13:30",
        menus: [
          {
            menuName: "나물",
          },
          {
            menuName: "밥",
          },
        ],
      },
      {
        mealType: "저녁",
        operatingTime: "11:30 ~ 13:30",
        menus: [
          {
            menuName: "나물",
          },
          {
            menuName: "밥",
          },
        ],
      },
    ],
  },
];
export default function MenuPage() {
  const [category, setCategory] = useState(0);
  const [menuList, setMenuList] = useState(data);
  const [mealList, setMealList] = useState(data[category]);
  const [menuSwiper, setMenuSwiper] = useState(null);

  let campus = CampusEng[getCampus()];

  const getMenuList = async () => {
    const res = await menu(campus);
    console.log(res);
    setMenuList(res);
    setMealList(res[category].meal);
  };
  useEffect(() => {
    // getMenuList();
  }, []);

  useEffect(() => {
    if (mealList.length !== 0) {
      setMealList(menuList[category]);
    }
    console.log(mealList);
    if (menuSwiper !== null) {
      menuSwiper.slideTo(0);
    }
  }, [category]);
  return (
    <PageLayout>
      <Header>
        <PageHeader>{PAGE_NAME.MENU}</PageHeader>
        <TabList>
          {menuList.map((cafeteria, index) => (
            <TabItem
              key={index}
              onClick={() => setCategory(index)}
              className={category === index ? "active" : null}
            >
              {cafeteria.cafeteriaName}
            </TabItem>
          ))}
        </TabList>
      </Header>
      <MenuSwiper setMenuSwiper={setMenuSwiper} mealList={mealList} />
    </PageLayout>
  );
}
