import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

import './global.css';

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat'
    },
    content: [
      { type: 'paragraph', content: "Fala Galera!!" },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no portifa!' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-05 08:00:50'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ViniGarcia10.png',
      name: 'Vinícius Garcia',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: "Fala!!" },
      { type: 'paragraph', content: 'Acabei !' },
      { type: 'link', content: 'doctorcare' },
    ],
    publishedAt: new Date('2022-08-05 10:00:50'),
  },
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper} >
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
              )
            })
          }
        </main>

      </div>


    </>
  )
}

export default App


