import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FormData = () => {
    const [data, setdata] = useState([]);

  useEffect(() => {
    const  fetchdata = async () => {
      try {
        const response = await axios.get("/products/allproducts"); // Replace with your actual API endpoint
        setdata(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }

    fetchdata();
  }, []);
  return (
    <div>
      <h1 className='text-center'>Form Data</h1>
    </div>
  )
}

export default FormData
