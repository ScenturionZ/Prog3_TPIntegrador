function TableBody({ item }){

    return (
        <tbody>
             <tr>
                {item.map ( (value) => {
                    <td>{value}</td>
                })}
          </tr>
        </tbody> 
    )
}

export default TableBody;