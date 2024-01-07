import React from "react";
import {
  FaBars,
  FaAngleDoubleRight,
  FaTasks,
  FaCalendar,
  FaStickyNote,
  FaPlus,
} from "react-icons/fa";
import ListItem from "../../components/common/ListItem";
import ProjectItem from "../../components/common/ProjectItem";
import StatusTags from "../../components/tags/StatusTags";
import Tree from "../../components/tree/tree";
import LeafNode from "../../components/tree/leaf";
import AddNew from "../../components/buttons/AddNew";
import "../../styles/App.css";
const Navbar = () => {
  return (
    <div className="navbar-menu w-full h-full overflow-y-scroll">
      <div className="menu-header text-2xl font-extrabold w-full flex justify-between items-center sticky top-0 bg-navbar">
        <h1>Menu</h1>
        <FaBars />
      </div>
      <section className="sub-menu mt-4">
        <h2 className="menu-heading text-xs font-bold mb-1">TASKS</h2>
        <ListItem label={"Upcoming"} count={5}>
          <FaAngleDoubleRight />
        </ListItem>
        <ListItem label={"Today"} count={7}>
          <FaTasks />
        </ListItem>
        <ListItem label={"Calendar"}>
          <FaCalendar />
        </ListItem>
        <ListItem label={"Stick Wall"}>
          <FaStickyNote />
        </ListItem>
      </section>
      <section className="sub-menu mt-4">
        <div className="heading flex justify-between">
          <h2 className="menu-heading text-xs font-bold mb-1 uppercase">
            Lists
          </h2>
          <button className="link text-xs text-primary font-bold cursor-pointer hover:underline underline-offset-2">
            View more
          </button>
        </div>
        <ListItem label={"Personal"} count={5} listIcon={true} />
        <ListItem label={"Work"} count={7} listIcon={true} />
        <ListItem label={"Study"} listIcon={true} />
        <AddNew label={"list"} />
      </section>

      <section className="sub-menu mt-4">
        <div className="heading flex justify-between">
          <h2 className="menu-heading text-xs font-bold mb-1 uppercase">
            Projects
          </h2>
          <button className="link text-xs text-primary font-bold cursor-pointer hover:underline underline-offset-2">
            View more
          </button>
        </div>
        <ProjectItem label={"Project 1"}>
          <Tree>
            <LeafNode id={0}>Section 1</LeafNode>
            <LeafNode id={1}>Section 2</LeafNode>
            <LeafNode id={2}>Section 3</LeafNode>
          </Tree>
        </ProjectItem>
        <ProjectItem label={"Project 2"}>
          <Tree>
            <LeafNode id={0}>Section 1</LeafNode>
            <LeafNode id={1}>Section 2</LeafNode>
            <LeafNode id={2}>Section 3</LeafNode>
          </Tree>
        </ProjectItem>
        <AddNew label={"project"} />
      </section>
      <section className="sub-menu mt-8">
        <h2 className="menu-heading text-xs font-bold mb-1 uppercase">Tags</h2>
        <div className="tag-box w-full flex flex-wrap gap-1">
          <StatusTags>Tag1</StatusTags>
          <StatusTags>Tag2</StatusTags>
          <AddNew label={"tag"} />
        </div>
      </section>
    </div>
  );
};

export default Navbar;
