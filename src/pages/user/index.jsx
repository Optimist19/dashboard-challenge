// import UsersData from "../../components/UsersData";

import { Table, Tag, Space } from "antd";
import { useEffect, useState } from "react";

function UserPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getUsers() {
    const getData = await fetch("https://dummyjson.com/products");
    const getDataResult = await getData.json();
    // console.log(getDataResult, "getDataResult");
    setLoading(false)
    setUsers(getDataResult.products);
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
    <div className="user-con">
      <div className="user-page-con">
        <Table columns={columns} dataSource={users} className="table" loading={loading}
 />
      </div>
    </div>
  );
}

export default UserPage;
