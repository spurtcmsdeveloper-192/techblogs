
import HomepageList from "@/Component/HomePage/HomePageList";
import { fetchGraphQl } from "./api/graphicql";
import { GET_POSTS_CATEGORYLIST_QUERY, GET_POSTS_LIST_QUERY } from "./api/query";
import { defaultCategorySlug } from "./api/url";

export default async function page() {

  let variable_category={
    
    "commonFilter": {
    "limit":50,
    "offset":0},
    "categoryFilter": {
      // "hierarchyLevel": 2,
      "categoryGroupSlug": defaultCategorySlug,
      "excludeGroup": true,
    }
  }
 let  variable_list={ 
     "commonFilter": { "offset": 0},
     "AdditionalData": {
    "authorDetails": true,
    "categories": true
     },
    "entryFilter": {
      "categorySlug": defaultCategorySlug,
    },}

  const [CategoryList,CategoryEntries]=await Promise.all([fetchGraphQl(GET_POSTS_CATEGORYLIST_QUERY,variable_category),fetchGraphQl(GET_POSTS_LIST_QUERY,variable_list)])
  return (
    <>
      <HomepageList CategoryList={CategoryList} CategoryEntries={CategoryEntries}/>
    </>
  );
}