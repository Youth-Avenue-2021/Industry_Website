const TableRow = ({ id, index, name, contact, email, message, setDeleteId, setLoading }) => {
  return (
    <>
      <tr className="my-1 odd:bg-whiteSmoke bg-white/70">
        <td className="px-4 py-2 border-x">{index}</td>
        <td className="px-4 py-2 border-x">{name}</td>
        <td className="px-4 py-2 border-x">{contact}</td>
        <td className="px-4 py-2 border-x">{email}</td>
        <td className="max-w-2xl px-4 py-2 border-x">{message}</td>
        <td className="text-center border-x">
          <button
            className="w-full px-4 py-2 cursor-pointer"
            onClick={() => {
              setDeleteId(id);
              setLoading(true);
            }}
            value={id}
          >
            <i className="text-red-500 fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
