import { Table, Tag, Space } from "antd";
import { useEffect, useState } from "react";
// import { data } from "../data";

function UsersData() {
  // const [list, setList] = useState(data)
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getUsers() {
    const getData = await fetch("https://dummyjson.com/products");
    const getDataResult = await getData.json();
    // console.log(getDataResult, "getDataResult")
    setLoading(false);
    setUsers(getDataResult.products.slice(0, 4));
  }

  useEffect(() => {
    getUsers();
  }, []);

  const columns = [
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand"
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category"
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    }
  ];

  return (
    <div>
      <div className="user-l-t">
        <div className="last-all">
          <p>Last Orders</p>
          <p>See All</p>
        </div>
        <Table
          columns={columns}
          dataSource={users}
          className="table"
          loading={loading}
          pagination={false}
        />
      </div>
    </div>
  );
}

export default UsersData;
