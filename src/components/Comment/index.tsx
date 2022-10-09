import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import Avatar from '../Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (commennt : string) => void;
}

function Comment({ content, onDeleteComment } : CommentProps) {

  const [likeAcount, setLikeAcount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLike() {
    setLikeAcount(likeAcount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/ViniGarcia10.png" alt='' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vinícius Garcia</strong>
              <time title='11 de maio ás 8:13h' dateTime='2022-05-11 08:13:30'> Cerca de 1h atrás </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar Comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>

        </div>

        <footer>
          <button onClick={handleLike}>
            <ThumbsUp />
            Aplaudir <span>{likeAcount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment;