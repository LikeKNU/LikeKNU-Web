import { TabItem, TabList } from '../styles/Tab';

export function TabHeader({ names, category, setCategory }) {
  return (
    <>
      <TabList>
        {names.map((name, index) => (
          <TabItem
            key={index}
            onClick={() => setCategory(index)}
            className={category === index ? 'active' : null}
          >
            {name}
          </TabItem>
        ))}
      </TabList>
    </>
  );
}
