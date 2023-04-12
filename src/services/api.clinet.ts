import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "8e1d5f4371514f468100646433906c0c",
  },
});
