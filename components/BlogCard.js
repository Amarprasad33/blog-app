import Link from "next/link";
import styles from '../styles/BlogCard.module.css';


export default function BlogCard({
    title,
    author,
    coverPhoto,
    datePublished,
    slug,
}){
    
    return (
        <div className={styles.card}>
            {title}
            {author.name}
            {coverPhoto.id}
            <Link href={'/posts/' + slug}> 
                <div className={styles.imgContainer}>
                    <img src={coverPhoto?.url} alt="" />
                </div>
            </Link>
        </div>
    );

}