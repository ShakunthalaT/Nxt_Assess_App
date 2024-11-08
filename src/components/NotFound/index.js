import './index.css'

const NotFound = () => (
  <>
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/drz669sta/image/upload/v1729242268/Group_7504_tnnk0y.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="page-not">Page Not Found</h1>
      <p className="sorry-text">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </>
)
export default NotFound
