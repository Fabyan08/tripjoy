import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem
        className="text-white md:w-[500px]"
        key="Description"
        aria-label="Description"
        indicator={({ isOpen }) => (isOpen ? <FaMinus /> : <FaPlus />)}
        title="Description"
      >
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          perspiciatis dicta officiis quasi ullam libero doloremque impedit
          excepturi sed unde dignissimos voluptatem vero exercitationem
          architecto ipsa nisi odit at, pariatur perferendis reprehenderit.
          Iusto optio officiis exercitationem sint iure placeat nesciunt.
        </h1>
        <h1 className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          consectetur molestias necessitatibus quia, ad voluptates ipsa quod
          excepturi, autem voluptas beatae maxime laborum, quidem reprehenderit
          et magni similique pariatur fugit quas dignissimos possimus delectus!
          Saepe, provident. Possimus rem modi sunt.
        </h1>
      </AccordionItem>
    </Accordion>
  );
}
