import API from "./api";

export const testBackend = async () => {
  try {
    const response = await API.get("/api/test");
    return response.data;
  } catch (error) {
    console.error('Error testing backend:', error);
    throw error;
  }
};
