import axios from "axios";
import cookies from 'js-cookie';

const url = "https://techfans-server.cyclic.app";

export const instance = axios.create({
  baseURL: url + "/api/",
  headers: {
    credentials: 'include',
  }
});

export const test = async () => {
  return await axios.get(url);
};

export const login = async (sendData: { email: string; password: string }) => {
  const { data } = await instance.post("auth/login", sendData);

  // set the cookie with a name, value, and options
  return true
};

export const register = async (sendData: any) => {
  const { data } = await instance.post("auth/register", sendData);

  // set the cookie with a name, value, and options
  cookies.set('auth', data.token, { expires: 30, path: '/' });
  return true
};

export const getUser = async () => {
  const { data } = await instance.get("auth/me");
  if (!data) return false
  return true
};

export const getBlogsCategory = async () => {
  return await instance.get("blogsCategory");
};

export const getBlogs = async (title?: string, dec?: string, page?: number) => {
  return await instance.get("blogs" + `?title=${title}&dec=${dec}&page=${page}`);
};

export const getToolsCategory = async () => {
  return await instance.get("toolsCategory");
};

export const getTools = async (title?: string, dec?: string, page?: number) => {
  return await instance.get("tools" + `?title=${title}&dec=${dec}&page=${page}`);
};

export const getProjects = async (title?: string, dec?: string, page?: number) => {
  return await instance.get("projects" + `?title=${title}&dec=${dec}&page=${page}`);
};

export const getProjectsCategory = async () => {
  return await instance.get("projectsCategory");
};

export const likeBlog = async (id: string) => {
  return await instance.get("blogs/like/" + id);
};

export const likeTool = async (id: string) => {
  return await instance.get("tools/like/" + id);
};

export const likeProject = async (id: string) => {
  return await instance.get("projects/like/" + id);
};

export const ratingBlog = async (id: string, rating: number) => {
  return await instance.get("blogs/rating/" + id + `?rating=${rating}`);
};

export const ratingTool = async (id: string, rating: number) => {
  return await instance.get("tools/rating/" + id + `?rating=${rating}`);
};

export const ratingProject = async (id: string, rating: number) => {
  return await instance.get("projects/rating/" + id + `?rating=${rating}`);
};