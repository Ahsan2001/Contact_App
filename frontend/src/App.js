import React from "react"
import List from "./List";
import {useState} from "react";

function App() {



  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id  !== contact.id)
    );
  };

  const [contacts, setContacts] = useState([
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "karen_isgrigg",
      avatarURL: "https://avatars.mds.yandex.net/i?id=d3a595c58738530ce73bf27134650c80df735400-7014775-images-thumbs&n=13",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "https://avatars.mds.yandex.net/i?id=b238bc3ca042073191135038a8e19abe72ad4f6c-4119627-images-thumbs&n=13",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "https://avatars.mds.yandex.net/i?id=a399d79d894d1276a3cfb3d97b348c37b009f69b-4449215-images-thumbs&n=13",
    },
  ]);

  return (
    <List contacts={contacts} onDeleteContact={removeContact} />
  );
}

export default App;
