// context/DataContext.js
import { createContext, useState, useContext } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.in/api/products?limit=150");
      console.log(res);
      const productsData = res.data.products;
      setData(productsData);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => curElem[property]);
    newVal = ["All",...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");
  const brandOnlyData = getUniqueCategory(data, "brand")

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to access context
export const getData = () => useContext(DataContext);
