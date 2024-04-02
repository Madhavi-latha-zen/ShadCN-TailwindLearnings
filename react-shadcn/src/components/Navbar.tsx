import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [activeLinkId, setActiveLinkId] = useState<string | null>(null);

  const handleLinkClick = (linkId: string) => {
    setActiveLinkId(linkId);
  };

  const determineLinkColor = (linkId: string) => {
    return linkId === activeLinkId ? "black" : "white";
  };

  return (
    <div className="navbar-results-container">
      <div className="navbar-container">
        <nav>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/allbuttons"
                style={{ color: determineLinkColor("/allbuttons") }}
                onClick={() => handleLinkClick("/allbuttons")}
              >
                All Buttons
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/cards"
                style={{ color: determineLinkColor("/cards") }}
                onClick={() => handleLinkClick("/cards")}
              >
                Cards
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/calendars"
                style={{ color: determineLinkColor("/calendars") }}
                onClick={() => handleLinkClick("/calendars")}
              >
                Calendars
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/carousels"
                style={{ color: determineLinkColor("/carousels") }}
                onClick={() => handleLinkClick("/carousels")}
              >
                Carousels
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/checkboxes"
                style={{ color: determineLinkColor("/checkboxes") }}
                onClick={() => handleLinkClick("/checkboxes")}
              >
                Checkboxes
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/collapsible"
                style={{ color: determineLinkColor("/collapsible") }}
                onClick={() => handleLinkClick("/collapsible")}
              >
                Collapsible
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/combobox"
                style={{ color: determineLinkColor("/combobox") }}
                onClick={() => handleLinkClick("/combobox")}
              >
                ComboboxDemo
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/command"
                style={{ color: determineLinkColor("/command") }}
                onClick={() => handleLinkClick("/command")}
              >
                CommandDemo
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/contextmenu"
                style={{ color: determineLinkColor("/contextmenu") }}
                onClick={() => handleLinkClick("/contextmenu")}
              >
                Contextmenu
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/datatable"
                style={{ color: determineLinkColor("/datatable") }}
                onClick={() => handleLinkClick("/datatable")}
              >
                DataTable
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/datepicker"
                style={{ color: determineLinkColor("/datepicker") }}
                onClick={() => handleLinkClick("/datepicker")}
              >
                DatePicker
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/dialog"
                style={{ color: determineLinkColor("/dialog") }}
                onClick={() => handleLinkClick("/dialog")}
              >
                DialogboxDemo
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/drawer"
                style={{ color: determineLinkColor("/drawer") }}
                onClick={() => handleLinkClick("/drawer")}
              >
                Drawer
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/dropdown"
                style={{ color: determineLinkColor("/dropdown") }}
                onClick={() => handleLinkClick("/dropdown")}
              >
                DropDown
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/hovercard"
                style={{ color: determineLinkColor("/hovercard") }}
                onClick={() => handleLinkClick("/hovercard")}
              >
                Hovercard
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/input"
                style={{ color: determineLinkColor("/input") }}
                onClick={() => handleLinkClick("/input")}
              >
                Input
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/inputotp"
                style={{ color: determineLinkColor("/inputotp") }}
                onClick={() => handleLinkClick("/inputotp")}
              >
                InputOTP
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/menubar"
                style={{ color: determineLinkColor("/menubar") }}
                onClick={() => handleLinkClick("/menubar")}
              >
                Menubar
              </Link>
            </li>
            {/* <li className="navbar-item">
            <Link
              className="navbar-link"
              to="/navigation"
              style={{ color: determineLinkColor("/navigation") }}
              onClick={() => handleLinkClick("/navigation")}
            >
              Navigationmenu
            </Link>
          </li> */}
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/pagination"
                style={{ color: determineLinkColor("/pagination") }}
                onClick={() => handleLinkClick("/pagination")}
              >
                Pagination
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/popover"
                style={{ color: determineLinkColor("/popover") }}
                onClick={() => handleLinkClick("/popover")}
              >
                Popover
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/progress"
                style={{ color: determineLinkColor("/progress") }}
                onClick={() => handleLinkClick("/progress")}
              >
                Progress
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/radiogroup"
                style={{ color: determineLinkColor("/radiogroup") }}
                onClick={() => handleLinkClick("/radiogroup")}
              >
                Radiogroup
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/resizable"
                style={{ color: determineLinkColor("/resizable") }}
                onClick={() => handleLinkClick("/resizable")}
              >
                Resizable
              </Link>
            </li>
            {/* <li className="navbar-item">
            <Link
              className="navbar-link"
              to="/scroll"
              style={{ color: determineLinkColor("/scroll") }}
              onClick={() => handleLinkClick("/scroll")}
            >
              ScrollArea
            </Link>
          </li> */}
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/slider"
                style={{ color: determineLinkColor("/slider") }}
                onClick={() => handleLinkClick("/slider")}
              >
                Slider
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/sonner"
                style={{ color: determineLinkColor("/sonner") }}
                onClick={() => handleLinkClick("/sonner")}
              >
                Sonner
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/switch"
                style={{ color: determineLinkColor("/switch") }}
                onClick={() => handleLinkClick("/switch")}
              >
                Switch
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/table"
                style={{ color: determineLinkColor("/table") }}
                onClick={() => handleLinkClick("/table")}
              >
                Table
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/tab"
                style={{ color: determineLinkColor("/tab") }}
                onClick={() => handleLinkClick("/tab")}
              >
                Tab
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/textarea"
                style={{ color: determineLinkColor("/textarea") }}
                onClick={() => handleLinkClick("/textarea")}
              >
                TextArea
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/accordion"
                style={{ color: determineLinkColor("/accordion") }}
                onClick={() => handleLinkClick("/accordion")}
              >
                Accordion
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/cardexample"
                style={{ color: determineLinkColor("/cardexample") }}
                onClick={() => handleLinkClick("/cardexample")}
              >
                CardExample
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/tasktable"
                style={{ color: determineLinkColor("/tasktable") }}
                onClick={() => handleLinkClick("/tasktable")}
              >
                TaskTable
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
