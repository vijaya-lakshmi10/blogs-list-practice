// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails

  return (
    <li className="blog-list">
      <Link to={`/blogs/${id}`} className="item-link">
        <div className="blog-item-container">
          <img src={imageUrl} alt={`item${id}`} className="image" />
          <div className="blog-item-details">
            <p className="topic">{topic}</p>
            <h1 className="blog-heading">{title}</h1>
            <div className="author-details">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
              <p className="author-info">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
