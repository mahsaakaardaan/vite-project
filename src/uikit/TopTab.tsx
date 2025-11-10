

type Props = {
  data: any[];
  selectedTab?: any;
  tabHandler?: any;
};

function TopTab({ data, selectedTab, tabHandler }: Props) {
  return (
    <div className="max-md:w-full md:w-fit flex items-center justify-between border-solid border-b-[1px] border-b-icon border-x-0 border-t-0">
      {data.map((item) => (
        <Tab
          item={item}
          key={item.id}
          tabHandler={tabHandler}
          selectedTab={selectedTab}
        />
      ))}
    </div>
  );
}

export default TopTab;

const Tab = ({
  item,
  tabHandler,
  selectedTab
}: {
  item: any;
  tabHandler: any;
  selectedTab: any;
}) => {
  const tab = selectedTab == item.name;
  return (
    <div
      onClick={() => tabHandler(item.name)}
      className={`w-full h-full flex-col items-center justify-center p-4 cursor-pointer ${
        tab
          ? 'border-solid border-x-0 border-t-0 border-b-[2px] border-b-primary1'
          : ''
      }`}>
      <div className={`flex items-center justify-center gap-2`}>
        <p
          className={`text-[10px] text-nowrap ${
            tab ? 'text-primary1' : 'text-icon'
          }`}>
          {item.title}
        </p>
        {item.badge > -1 && (
          <div
            className={`w-[25px] h-[25px] rounded-md flex items-center justify-center text-white text-xs ${
              tab ? 'bg-primary1' : 'bg-icon'
            }`}>
            {item.badge}
          </div>
        )}
      </div>
    </div>
  );
};
