import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const api = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategory = () => api.get("/about-uses?populate=*");
const getServiceData =()=>api.get("/services?populate=*")
const getContactData = ()=>api.get("/contact-uses?populate=*")
const getCareerData = ()=>api.get("/careers?populate=*")
const getHomeData = ()=>api.get("/homes?populate=*")
const getHeaderData = ()=>api.get("/headers?populate=*")

export default {
  getCategory,getServiceData,getContactData,getCareerData,getHomeData,getHeaderData
};



