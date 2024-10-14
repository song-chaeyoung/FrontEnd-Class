import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  // const contactList = useSelector((state) => state.contactList);
  // const test = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);
  // const { contactList, keyword } = useSelector((state) => state);
  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword);

  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((it) => it.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword]);

  return (
    <>
      <h5>Friends List</h5>
      <SearchBar />
      {filteredList.map((item, idx) => (
        <ContactItem key={idx} contactItem={item} />
      ))}
    </>
  );
};

export default ContactList;
