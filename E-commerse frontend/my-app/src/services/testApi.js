import API from "./api";

export const testBackend = async () => {
  const response = await API.get("/api/test");
  return response.data;
};
