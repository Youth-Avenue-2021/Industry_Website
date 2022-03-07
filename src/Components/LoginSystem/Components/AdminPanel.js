import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import axios from "axios";
import Loading from "../../Loading";

const AdminPanel = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const DOMAIN = process.env.REACT_APP_DOMAIN;
  const [sort, setSort] = useState("");
  const [limit, setLimit] = useState(200);
  const [deleteId, setDeleteId] = useState("");

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      switch (sort) {
        case "ascending":
          const ascendingData = await axios.get(`${DOMAIN}/api/user/getData?ApiKey=${API_KEY}&sort=${sort}&limit=${limit}`);
          setUser(ascendingData.data);
          setLoading(false);
          break;
        case "nameA":
          const nameAscending = await axios.get(`${DOMAIN}/api/user/getData?ApiKey=${API_KEY}&sort=${sort}&limit=${limit}`);
          setUser(nameAscending.data);
          setLoading(false);
          break;
        case "nameD":
          const nameDescending = await axios.get(`${DOMAIN}/api/user/getData?ApiKey=${API_KEY}&sort=${sort}&limit=${limit}`);
          setUser(nameDescending.data);
          setLoading(false);
          break;
        case "message":
          const messageAscending = await axios.get(`${DOMAIN}/api/user/getData?ApiKey=${API_KEY}&sort=${sort}&limit=${limit}`);
          setUser(messageAscending.data);
          setLoading(false);
          break;

        default:
          const { data } = await axios.get(`${DOMAIN}/api/user/getData?ApiKey=${API_KEY}&limit=${limit}`);
          setUser(data);
          setLoading(false);
          break;
      }
    };
    getData();
    const deleteRecordFn = async () => {
      const { data } = await axios.post(`${DOMAIN}/api/user/deleteRecord?ApiKey=${API_KEY}&delete=${deleteId}`);
      getData();
      setDeleteId("");
      setLoading(true);
    };
    if (deleteId !== "") {
      deleteRecordFn();
    }
  }, [sort, limit, deleteId]);

  return (
    <>
      <SortMenu sort={setSort} loading={setLoading} limit={setLimit} />
      {loading ? (
        <div className="text-center h-28 flex justify-center items-center flex-row">
          <Loading color={"bg-black"} />
        </div>
      ) : (
        <div className={`container mx-auto justify-center items-center flex-row overflow-x-scroll ${loading ? "hidden" : "flex"}`}>
          <table className="table-auto">
            <thead className="bg-gray-900/10 text-left">
              <tr>
                <th className="px-4 py-2">No.</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Contact</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {user.map((userItem, index) => (
                <TableRow index={index + 1} setLoading={setLoading} id={userItem._id} setDeleteId={setDeleteId} key={userItem._id} name={userItem.name} contact={userItem.contact} email={userItem.email} message={userItem.message} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

const SortMenu = ({ sort, loading, limit }) => {
  return (
    <div className="flex flex-row items-center justify-center -mt-5 mb-7">
      <div className="mb-3 w-1/3 md:w-56 mr-2">
        <select
          className="cursor-pointer form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-yellowColor focus:outline-none"
          aria-label="Default select example"
          onChange={(event) => {
            sort(event.target.value);
            loading(true);
          }}
        >
          <option defaultValue={""} className="text-center">
            Last Added
          </option>
          <option className="text-center" value="ascending">
            Time Ascending
          </option>
          <option className="text-center" value="nameA">
            Name Ascending
          </option>
          <option className="text-center" value="nameD">
            Name Descending
          </option>
          <option className="text-center" value="message">
            Message
          </option>
        </select>
      </div>
      <div className="mb-3 w-1/3 md:w-56 ml-2">
        <select
          className="cursor-pointer form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-yellowColor focus:outline-none"
          aria-label="Default select example"
          onChange={(event) => {
            limit(event.target.value);
            loading(true);
          }}
        >
          <option className="text-center" value="200">
            200
          </option>
          <option className="text-center" value="100">
            100
          </option>
          <option className="text-center" value="50">
            50
          </option>
          <option className="text-center" value="20">
            20
          </option>
          <option value="500" className="text-center">
            500
          </option>
        </select>
      </div>
    </div>
  );
};

export default AdminPanel;
