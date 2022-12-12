import axios from "axios";
import apiUrl from "./config";

// eslint-disable-next-line consistent-return
export const getProduct = async (id) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/products/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response, "response");
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    return {
      error: error.response.data.message || error.message,
    };
  }
};
