import React from "react";
import { FaPlus, FaCircle } from "react-icons/fa";
import ListItem from "../common/ListItem";
import * as Dialog from "@radix-ui/react-dialog";
import "../../styles/Modal.css";
interface AddNew {
  label: string;
}
const AddNew = ({ label }: AddNew) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button w-full">
          <ListItem label={`Add new ${label}`}>
            <FaPlus size={12} />
          </ListItem>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay bg-[rgba(0,0,0,0.3)] inset-0 fixed z-[20]" />
        <Dialog.Content className="DialogContent bg-base rounded-md fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[40%] p-4 z-[25]">
          <Dialog.Title className="text-xl font-medium">
            Add new {label}
          </Dialog.Title>
          <Dialog.Description className="mb-8"></Dialog.Description>
          <fieldset className="flex gap-12 items-center mb-4 w-full">
            <label
              className="first-letter:uppercase w-32 text-right"
              htmlFor="name"
            >
              {label} name
            </label>
            <input
              className="Input w-72"
              id="name"
              placeholder={
                label === "project"
                  ? "New Project"
                  : label === "list"
                  ? "Ex. Personal"
                  : "Ex. Urgent"
              }
            />
          </fieldset>
          <fieldset className="flex gap-12 items-center mb-4 w-full">
            <label className="w-32 text-right" htmlFor="username">
              {label === "project"
                ? "Description"
                : label === "list" || label === "tag"
                ? "Color"
                : ""}
            </label>
            <input
              className="Input w-72"
              id="username"
              placeholder="Write something about the project."
            />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="save-btn text-white bg-badge_completed py-2 px-4 rounded-lg font-medium cursor-pointer">
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="IconButton cursor-pointer absolute top-4 right-4"
              aria-label="Close"
            >
              <FaCircle color={"#E5484D"} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddNew;
