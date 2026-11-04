import { Link } from 'react-router-dom'

export default function MiniFooter() {
  return (
    <footer className="max-w-5xl mx-auto px-4 py-8 text-center text-wt-gray-text text-sm">
      <p>
        Weltrade &middot; Water Cress, Ikeja, Allen, Lagos. &middot; &copy; 2026
        Weltrade
      </p>
      <p className="mt-2 text-[13px]">
        <Link to="/privacy" className="text-wt-gray-text hover:underline">
          Privacy
        </Link>
        <span className="mx-2">&middot;</span>
        <Link to="/terms" className="text-wt-gray-text hover:underline">
          Terms
        </Link>
      </p>
    </footer>
  )
}
