import React from "react";

const TableRow = ({ index, name, contact, email, message }) => {
  return (
    <>
      <tr className="odd:bg-whiteSmoke bg-white/70">
        <td className="border px-4 py-2">{index}</td>
        <td className="border px-4 py-2">{name}</td>
        <td className="border px-4 py-2">{contact}</td>
        <td className="border px-4 py-2">{email}</td>
        <td className="border px-4 py-2 max-w-2xl">{message}</td>
      </tr>
    </>
  );
};

export default TableRow;
