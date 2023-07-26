import saveAs from "file-saver";
import { toCsv, ICsvProps } from "react-csv-downloader";

export const saveAsCsv = async (
  datas: ICsvProps["datas"],
  filename: string,
) => {
  const datasAsCsv = await toCsv({ datas, separator: ";" });
  if (!datasAsCsv) {
    return;
  }
  const csvFile = new File([datasAsCsv], filename, {
    type: "text/csv;charset=utf-8",
  });
  saveAs(csvFile);
};
