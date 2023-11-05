function TableContent({ data, claves, tipo}) {
  return (<>
    <tbody>
      {data.map ( (value) => (
        <tr>
          {claves.map ( (key) => (
              <td>{value[key]}</td>
          ))}
          <td>BTN - {value.id}</td>
        </tr>
      ))}
    </tbody> 
</>)
};

export default TableContent;
