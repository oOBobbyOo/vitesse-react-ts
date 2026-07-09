import { Link, useLocation } from 'react-router'

const NotFound = () => {
  const location = useLocation()

  return (
    <div className="flex items-center justify-center flex-col min-h-svh">
      <h1>404</h1>
      <h4>页面未找到</h4>
      <p>
        抱歉，您访问的 <code>{location.pathname}</code> 不存在
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '4px',
          textDecoration: 'none',
        }}>
        返回首页
      </Link>
    </div>
  )
}

export default NotFound
