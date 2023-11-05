import { Table } from "react-bootstrap";
import TableBody from "./TableBody";

function TableContent({ data }) {

  return (<>
    { data.map((item) => {
        if (item.activo === 1) {
          <TableBody items={item} key={item.id}/>
        }
      })
    }
</>)
};

export default TableContent;
