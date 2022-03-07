const TableRow = ({ id, index, name, contact, email, message, setDeleteId, setLoading }) => {
  return (
    <>
      <tr className="odd:bg-whiteSmoke bg-white/70">
        <td className="border px-4 py-2">{index}</td>
        <td className="border px-4 py-2">{name}</td>
        <td className="border px-4 py-2">{contact}</td>
        <td className="border px-4 py-2">{email}</td>
        <td className="border px-4 py-2 max-w-2xl">{message}</td>
        <td className="text-center border">
          <button
            className="cursor-pointer w-full px-4 py-2"
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
