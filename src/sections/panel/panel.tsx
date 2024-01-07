import React, { useState } from "react";
import { FaAngleDown, FaPlus, FaCircle } from "react-icons/fa";
import ListMenu from "../../components/popover/ListMenu";
import StatusTags from "../../components/tags/StatusTags";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import AddNew from "../../components/buttons/AddNew";
import { motion } from "framer-motion";
interface Panel {
  heading: string;
  List?: boolean;
  Tags?: boolean;
  setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Panel = ({ heading, List, Tags, setPanelOpen }: Panel) => {
  const [openListMenu, setOpenListMenu] = useState<boolean>(false);
  const [subtask, setSubtask] = useState<string[]>([]);
  const [newSubtask, setNewSubtask] = useState<string>("");
  return (
    <div className="panelcontent w-full h-full overflow-y-scroll flex flex-col gap-4 relative">
      <div
        className="close absolute top-2 right-2 cursor-pointer"
        onClick={() => setPanelOpen(false)}
      >
        <FaCircle color={"#E5484D"} />
      </div>
      <h1 className="panelHeading text-3xl font-extrabold mb-4">{heading}</h1>
      <fieldset className="w-full">
        <input
          className="Input w-full text-xl"
          id="name"
          placeholder="Add title"
        />
      </fieldset>
      <fieldset className="w-full text-content">
        <textarea
          className="Input w-full h-32 text-base bg-panel resize-none outline-none text-black"
          id="name"
          placeholder="Add Description"
        />
      </fieldset>
      {List && (
        <div className="w-full flex gap-8 items-center relative">
          <label htmlFor="" className="text-sm font-bold">
            Add To List
          </label>
          <div
            className="listSelected min-w-[50%] w-fit flex justify-between items-center gap-4 text-sm bg-highlight px-4 py-1 rounded-lg relative font-medium cursor-pointer"
            onClick={() => setOpenListMenu(!openListMenu)}
          >
            Personal {<FaAngleDown />} {openListMenu && <ListMenu />}
          </div>
        </div>
      )}
      {Tags && (
        <div className="w-full">
          <label htmlFor="" className="text-sm font-bold">
            Add a tag
          </label>
          <div className="tag-bundle w-full flex flex-wrap gap-1 mt-2">
            <div className="tag">
              <StatusTags>Urgent</StatusTags>
            </div>
            <div className="tag">
              <StatusTags>Completed</StatusTags>
            </div>
            <div className="tag">
              <StatusTags>Delayed</StatusTags>
            </div>
            <div className="tag">
              <StatusTags>InProgress</StatusTags>
            </div>
            <div className="tag">
              <StatusTags>Emergency</StatusTags>
            </div>
            <AddNew label={"tag"} />
          </div>
        </div>
      )}
      <div className="subtask w-full mt-2">
        <label htmlFor="" className="text-sm font-bold">
          Add a subtask
        </label>
        <div className="add-new flex gap-2 items-center mt-2">
          <div
            className="icon bg-content h-[30px] rounded-lg text-white flex justify-center items-center aspect-square cursor-pointer"
            onClick={() => setSubtask([newSubtask, ...subtask])}
          >
            <FaPlus size={12} />
          </div>
          <div className="input-box border-[1px] border-offset rounded-md overflow-hidden w-full">
            <input
              className="Input w-full text-sm bg-panel text-black px-2 py-1"
              id="name"
              placeholder="Add a subtask"
              onChange={(e) => setNewSubtask(e.target.value)}
            />
          </div>
        </div>
        <div className="subtask-list w-full flex flex-col gap-1 mt-4">
          {subtask.length > 0
            ? subtask.map((task) => (
                <div className="flex items-center ml-1">
                  <Checkbox.Root className="CheckboxRoot" id="c1">
                    <Checkbox.Indicator className="CheckboxIndicator">
                      <CheckIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label className="Label" htmlFor="c1">
                    {task}
                  </label>
                </div>
              ))
            : ""}
        </div>
      </div>
      <div className="buttons-submit w-full flex justify-between absolute bottom-2 right-0">
        <motion.button
          className="cancel bg-panel text-black border-badge_completed  border-4 rounded-lg py-2 w-[48%] font-medium text-center cursor-pointer "
          whileTap={{ scale: 0.95 }}
        >
          Cancel
        </motion.button>
        <motion.button
          className="submit bg-badge_completed text-white border-badge_completed  border-4 rounded-lg py-2 w-[48%] font-medium text-center cursor-pointer "
          whileTap={{ scale: 0.95 }}
        >
          Save
        </motion.button>
      </div>
    </div>
  );
};

export default Panel;
