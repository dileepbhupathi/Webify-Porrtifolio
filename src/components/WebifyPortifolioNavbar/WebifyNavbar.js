import { Button, Popover } from "antd";
import React, { useState } from "react";
import "./WebifyNavbar.scss";
import { GrMenu } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { FaPlus, FaMinus } from "react-icons/fa";
import { NavSubMenuData } from "../../constants/NavSubMenuData";

export const WebifyNavbar = () => {
  const [menu, setMenu] = useState(false);
  const [accordion, setAccordion] = useState(false);
  const [nestedAccordion, setNestedAccordion] = useState(null);

  const ToggleMenu = () => {
    setMenu(!menu);
  };

  const openAccordion = () => {
    setAccordion(true);
  };
  const closeAccordion = () => {
    setAccordion(false);
  };
  const NestedAccordion = (i) => {
    if (nestedAccordion === i) {
      setNestedAccordion(null);
    }
    setNestedAccordion(i);
  };
  //   const closeNestedAccordion = (i) => {
  //     if (nestedAccordion === i) {
  //         setNestedAccordion(null)
  //     }
  //     setNestedAccordion(i);
  //   };

  const MenuData = (
    <div className="sub-menu-items">
      {NavSubMenuData.map((each) => (
        <>
          <div className={each.id === 4 ? 'each-sub-menu-with-noborder' :"each-sub-menu-column"}>
            <p className="each-menu-column-name">{each.column}</p>
            {each.subMenu.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </>
      ))}
    </div>
  );
  return (
    <div className="webify-nav-container">
      <nav className="webify-nav">
        <img
          src="https://themebubble.com/demo/webify/portfolio-masonry/wp-content/themes/webify/assets/img/logo-dark.png"
          alt="webify logo"
          className="webify-logo"
        />
        <div className="nav-button-menu-container">
          <div className="nav-links-container">
            <p className="nav-link">Home</p>
            <Popover content={MenuData} >
              <p className="nav-link">Mega Menu</p>
            </Popover>
            <p className="nav-link">Case Study</p>
            <p className="nav-link">Call to Action</p>
          </div>
          <Button className="webify-nav-button">Get Webify Today</Button>
          <div className="nav-menu-button" onClick={ToggleMenu}>
            {menu ? (
              <RxCross1 className="webify-nav-menu-icon" />
            ) : (
              <GrMenu className="webify-nav-menu-icon" />
            )}
          </div>
        </div>
      </nav>
      {menu ? (
        <div
          className={
            menu
              ? "webify-nav-menu-content-open"
              : "webify-nav-menu-content-close"
          }
        >
          <p className="weibify-nav-menu-each-item">Home</p>
          <p className="weibify-nav-menu-each-item accodrion">
            Mega Menu{" "}
            {accordion ? (
              <FaMinus onClick={closeAccordion} />
            ) : (
              <FaPlus onClick={openAccordion} />
            )}
          </p>
          {accordion ? (
            <ul>
              {NavSubMenuData.map((each) => (
                <>
                  <li
                    className="webify-sub-menu-list-item"
                    onClick={() => NestedAccordion(each.id)}
                  >
                    {each.column}{" "}
                    {nestedAccordion === each.id ? <FaMinus /> : <FaPlus />}
                  </li>
                  {nestedAccordion === each.id ? (
                    <ul>
                      {each.subMenu.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </>
              ))}

              {/* <li className="webify-sub-menu-list-item">
                Column Two
                {nestedAccordion ? (
                  <FaMinus onClick={closeNestedAccordion} />
                ) : (
                  <FaPlus onClick={openNestedAccordion} />
                )}
              </li>
              <li className="webify-sub-menu-list-item">
                Column Three
                {nestedAccordion ? (
                  <FaMinus onClick={closeNestedAccordion} />
                ) : (
                  <FaPlus onClick={openNestedAccordion} />
                )}
              </li>
              <li className="webify-sub-menu-list-item">
                Column Four
                {nestedAccordion ? (
                  <FaMinus onClick={closeNestedAccordion} />
                ) : (
                  <FaPlus onClick={openNestedAccordion} />
                )}
              </li> */}
            </ul>
          ) : null}
          <p className="weibify-nav-menu-each-item">Case Study</p>
          <p className="weibify-nav-menu-each-item">Call to Action</p>
        </div>
      ) : null}
    </div>
  );
};
