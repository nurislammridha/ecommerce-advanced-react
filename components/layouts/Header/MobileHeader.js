// import "./styles.css";
import Menubar from "react-responsive-multi-level-menu";

const MobileHeader = () => { 
  const menuItems = [
    {
      value: "Fashion",
      items: [
        {
          value: "Men",
          items: [
            {
              value: "Shirts"
            }
          ]
        },
        {
          value: "Women",
          items: [
            {
              value: "Jackets"
            },
            {
              value: "T-Shirts"
            },
            {
              value: "Underwear"
            }
          ]
        },
        {
          value: "Children"
        }
      ]
    },
    {
      value: "Electronics"
    },
    {
      value: "Furnitures",
      items: []
    },
    {
      value: "Jewelery&watches",
      items: []
    }
  ];
  const color = "#348DF4";
  const animation = ["fadeIn", "fadeOut"];

  return (
    <div className="App">
     
      <Menubar backgroundColor={color} data={menuItems} animation={animation} />
    </div>
  );
}

 
export default MobileHeader;