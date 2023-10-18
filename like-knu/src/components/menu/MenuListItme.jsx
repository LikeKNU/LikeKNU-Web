export function MenuListItme({menuList}) {
  // console.log(menuList.cafeteriaId);
  return (
    <div>
      {
        menuList.map((menu, index) => (
          console.log(menu.mealType)
        ))
      }
    </div>
  );
}