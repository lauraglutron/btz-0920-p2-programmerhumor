import { useEffect, useState } from 'react';
import axios from 'axios';
import Header2 from './components/Header2';
import Filter2 from './components/Filter2';
import NewsFeed2 from './components/NewsFeed2';
import Footer2 from './components/Footer2';
import './App.css';

const App = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('https://www.reddit.com/r/programmerhumor.json').then((res) => {
      setPost(res.data); // chemin datas?
    });
  }, []);

  return (
    <div className="App">
      <Header2 />
      <Filter2 />
      <NewsFeed2 // quelles props?
        id={post.id}
        userId={post.userId}
        title={post.title}
        body={post.body}
      />
      <NewsFeed2 // quelles props?
        id={post.id}
        userId={post.userId}
        title={post.title}
        body={post.body}
      />
      <NewsFeed2 // quelles props?
        id={post.id}
        userId={post.userId}
        title={post.title}
        body={post.body}
      />
      <Footer2 />
    </div>
  );
};

export default App;

// map?
// setTimeout?
