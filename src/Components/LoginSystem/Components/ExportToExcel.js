import { ExportJsonCsv } from "react-export-json-csv";

const ExportToExcel = ({ data, btnName, fileName, dataType }) => {
  const headers =
    dataType === data
      ? [
          {
            key: "name",
            name: "Name",
          },
          {
            key: "contact",
            name: "Contact",
          },
          {
            key: "email",
            name: "Email",
          },
          {
            key: "message",
            name: "Message",
          },
        ]
      : [{ key: "email", name: "Email" }];

  return (
    <ExportJsonCsv className={"btn mx-2"} fileTitle={fileName} headers={headers} items={data}>
      {btnName}
    </ExportJsonCsv>
  );
};

export default ExportToExcel;
