import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer yCh-PkuziK_B5Is2t7Q3aZFwMa9FKV-qqSHbCc152ORY3jhkiLJO2fNXLMsjwoDX8mZY8nUZQxMGcjKIgmLj4YfgxGt6xJtrzal0YRjf2yYHwpx7FZd3rothXDSqX3Yx",
  },
});
