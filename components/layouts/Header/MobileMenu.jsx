import { MultilevelMenu } from "react-multilevel-menu";

export default function MobileMenu({ categories }) {
  const list = [
    {
      label: "NPM",
      faIcon: "fas fa-chevron-down",
      link: "https://www.npmjs.com/package/ng-material-multilevel-menu",
      hrefTargetType: "_blank" // _blank|_self|_parent|_top|framename
    },
    {
      label: "Item",
      faIcon: "fas fa-chevron-down",
      activeImageIcon: "/ironman.jpg",
      items: [
        {
          label: "Item 1.1",
          faIcon: "fab fa-accusoft",
          onSelected: function () {
            console.log("Item 1.2.2.1");
          }
        },
        {
          label: "Item 1.2",
          faIcon: "fab fa-accessible-icon",
          items: [
            {
              label: "Item 1.2.1",
              faIcon: "fas fa-allergies",
              onSelected: function () {
                console.log("Item 1.2.2.1");
              }
            },
            {
              label: "Item 1.2.2",
              faIcon: "fas fa-ambulance",
              items: [
                {
                  label: "Item 1.2.2.1",
                  faIcon: "fas fa-anchor",
                  onSelected: function () {
                    console.log("Item 1.2.2.1");
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: "Item 2",
      faIcon: "fas fa-chevron-down",
      items: [
        {
          label: "Item 2.1",
          faIcon: "fab fa-accusoft",
          activeFaIcon: "fab fa-accusoft",
          disabled: true
        },
        {
          label: "Item 2.2",
          faIcon: "fas fa-anchor",
          activeFaIcon: "fab fa-accusoft"
        }
      ]
    },
    {
      label: "Item 3",
      faIcon: "fas fa-chevron-down",
      activeFaIcon: "fas fa-anchor",
      onSelected: function () {
        console.log("Item 3");
      }
    },
    {
      label: "Item 4",
      link: "/item-4",
      faIcon: "fab fa-accusoft",
      hidden: true
    }
  ];

  const selectedItem = (event) => {
    console.log(event);
  };

  const config = {
    paddingAtStart: true,
    classname: "my-custom-class",
    listBackgroundColor: `rgb(0, 196, 238)`,
    fontColor: `rgb(8, 54, 71)`,
    backgroundColor: `rgb(0, 196, 238)`,
    selectedListFontColor: `red`,
    highlightOnSelect: true,
    useDividers: false
  };

  return (
    <MultilevelMenu
      list={list}
      configuration={config}
      selectedListItem={selectedItem}
      selectedLabel={selectedItem}
    />
  );
}
