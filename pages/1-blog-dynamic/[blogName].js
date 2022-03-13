import { useRouter } from 'next/router';
import styles from './Blog.module.css';

export default function Blog() {
  const router = useRouter();
  const { blogName } = router.query;

  return <h1 className={styles.blog}>Post: {blogName}</h1>;
}
