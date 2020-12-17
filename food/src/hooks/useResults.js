import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const searchAPI = async searchQuery => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchQuery,
          limit: 50,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrMsg("Unable to find locations. :(");
    }
  };

  useEffect(() => {
    searchAPI("pasta");
  }, []);

  return [searchAPI, results, errMsg];
};
