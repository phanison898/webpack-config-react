import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

const App = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const data = await res.data;
      console.log(data);
      setdata(data);
    };
    fetch();
  }, []);

  return (
    <div>
      <ul>
        {data.map(({ id, name, username }) => (
          <li key={id}>
            Name : {name} <br />
            Username : {username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
