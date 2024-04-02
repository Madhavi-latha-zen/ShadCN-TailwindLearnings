import { BrowserRouter, Routes, Route } from "react-router-dom";
import Random from "./components/ui/AllButtons";
import ProjectCard from "./components/Cards";
import Calendars from "./components/Calendars";
import Carousels from "./components/Carousels";
import Checkboxs from "./components/Checkboxes";
import Navbar from "./components/Navbar";
import CollapsibleDemo from "./components/Collapsible";
import ComboboxDemo  from "./components/Combobox";
import CommandDemo from "./components/Command";
import ContextMenuDemo from "./components/Contextmenu";
import DataTableDemo from "./components/Datatable";
import DatePicker from "./components/Datepicker";
import DialogDemo from "./components/Dialog";
import DrawerDemo from "./components/Drawer";
import { DropdownMenuDemo } from "./components/Dropdown";
import { HoverCardDemo } from "./components/Hovercard";
import { InputFile } from "./components/Input";
import { InputOTPDemo } from "./components/Inputotp";
import { MenubarDemo } from "./components/Menubar";
import { PaginationDemo } from "./components/Pagination";
import { PopoverDemo } from "./components/Popover";
import { ProgressDemo } from "./components/Progress";
import { RadioGroupDemo } from "./components/RadioGroup";
import { ResizableDemo } from "./components/Resizable";
import { SliderDemo } from "./components/Slider";
import { SonnerDemo } from "./components/Sonner";
import { SwitchForm } from "./components/Switch";
import { TableDemo } from "./components/Table";
import { TabsDemo } from "./components/Tabs";
import { TextareaDemo } from "./components/TextArea";
import { AccordionDemo } from "./components/Accordion";
import CardExample from "./components/CardExample";
import TaskTable from "./components/TaskTable";
// import { ScrollAreaDemo } from "./components/Scrollarea";
// import { NavigationMenuDemo } from "./components/NavigationMenu";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/allbuttons" element={<Random />} />
        <Route path="/cards" element={<ProjectCard />} />
        <Route path="/calendars" element={<Calendars />} />
        <Route path="/carousels" element={<Carousels />} />
        <Route path="/checkboxes" element={<Checkboxs />} />
        <Route path="/collapsible" element={<CollapsibleDemo/>}/>
        <Route path="/combobox" element={<ComboboxDemo/>}/>
        <Route path="/command" element={<CommandDemo/>}/>
        <Route path="/contextmenu" element={<ContextMenuDemo/>}/>
        <Route path="/datatable" element={<DataTableDemo/>}/>
        <Route path="/datepicker" element={<DatePicker/>}/>
        <Route path="/dialog" element={<DialogDemo/>}/>
        <Route path="/drawer" element={<DrawerDemo/>}/>
        <Route path="/dropdown" element={<DropdownMenuDemo/>}/>
        <Route path="hovercard" element={<HoverCardDemo/>}/>
        <Route path="/input" element={<InputFile/>}/>
        <Route path="/inputotp" element={<InputOTPDemo/>}/>
        <Route path="/menubar" element={<MenubarDemo/>}/>
        {/* <Route path="/navigation" element={<NavigationMenuDemo/>}/> */}
        <Route path="/pagination" element={<PaginationDemo/>}/>
        <Route path="/popover" element={<PopoverDemo/>}/>
        <Route path="/progress" element={<ProgressDemo/>}/>
        <Route path="/radiogroup" element={<RadioGroupDemo/>}/>
        <Route path="/resizable" element={<ResizableDemo/>}/>
        {/* <Route path="/scroll" element={<ScrollAreaDemo/>}/> */}
        <Route path="/slider" element={<SliderDemo/>}/>
        <Route path="/sonner" element={<SonnerDemo/>}/>
        <Route path="/switch" element={<SwitchForm/>}/>
        <Route path="/table" element={<TableDemo/>}/>
        <Route path="/tab" element={<TabsDemo/>}/>
        <Route path="/textarea" element={<TextareaDemo/>}/>
        <Route path="/accordion" element={<AccordionDemo/>}/>
        <Route path="/cardexample" element={<CardExample/>}/>
        <Route path="/tasktable" element={<TaskTable/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
