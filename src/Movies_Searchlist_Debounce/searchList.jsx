import { useState, useEffect } from "react";
import useDebounce from "./customDebounceHook";

function SearchList() {
  const [users, setUsers] = useState([]);
  const [search, setSearchData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  function filterData(value) {
    const filterData = users.filter((item) => {
      return (
        item.name.toLowerCase().includes(value) ||
        item.email.toLowerCase().includes(value) ||
        item.username.toLowerCase().includes(value)
      );
    });
    setUsers(filterData);
  }
  const debouncedSearch = useDebounce(filterData, 3000);
  const setSearch = (event) => {
    setSearchData(event.target.value);
    debouncedSearch(event.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={search}
        name="search"
        onChange={(event) => setSearch(event)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchList;
