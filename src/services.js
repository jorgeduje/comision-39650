import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getAll = async (categoryName)=>{
    let consulta;
    const itemCollection = collection(db, "products");

    if (categoryName) {
      const itemsCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    const data = await getDocs(consulta);
    const products = data.docs.map((product) => {
      // console.log(product.data(), product.id)
      return {
        ...product.data(),
        id: product.id,
      };
    });
    return products
}

export const getById = async( id )=>{
    const itemCollection = collection(db, "products");
    const refDoc = doc(itemCollection, id);
    const data = await getDoc(refDoc);
    return data
}