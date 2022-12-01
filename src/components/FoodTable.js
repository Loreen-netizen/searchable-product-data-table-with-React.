import React from "react";

const FoodTable = ({ data, isChecked }) => {
  const categoryList = data.map((item) => item.category);
  const distinctArray = [...new Set(categoryList)];
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>

        {distinctArray.map((category) => (
          <>
            <tr>
              <th>{category} </th>
            </tr>
            {isChecked
              ? data.map((item) => (
                  <>
                    {item.stocked ? (
                      <tr>
                        <td>{item.category === category ? item.name : null}</td>
                        <td>
                          {item.category === category ? item.price : null}
                        </td>
                      </tr>
                    ) : null}
                  </>
                ))
              : data.map((item) => (
                  <tr>
                    <td style={{ color: item.stocked ? "black" : "red" }}>
                      {item.category === category ? item.name : null}
                    </td>
                    <td>{item.category === category ? item.price : null}</td>
                  </tr>
                ))}
          </>
        ))}
      </table>
    </div>
  );
};

export default FoodTable;
