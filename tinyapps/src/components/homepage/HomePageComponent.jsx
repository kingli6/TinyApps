import { useNavigate } from 'react-router-dom';
import {db } from '../../firebase-config';
import { useState, useEffect } from "react";
import { getDocs, collection} from "firebase/firestore";

const HomePageComponent = () => {
  const articlesCollectionRef = collection(db, "articles");
  const [articleList, setArticleList] = useState([]);


  useEffect(() => {
    const getArticleList = async() =>{
      // Read the data
      // set the article list
      try {
        const data = await getDocs(articlesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setArticleList(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getArticleList();
  }, []);

  

  const navigator = useNavigate();

  function loginPageFunction(){
    navigator('/login-page')
  }
  return (
    

    <div>
      <h2 className='text-xl font-bold text-green-500'>TinyApps</h2>
      <button onClick={loginPageFunction}>LogIn</button>

      <div>
        {articleList.map((article) => (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <button onClick={() => navigator(`/article/${article.link}`)}>Read More</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default HomePageComponent
