import { Link } from 'react-router-dom';
import Icon from '../components/common/Icon.jsx';

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center p-6 bg-[#eef2f9] dark:bg-giga-canvas">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-6 animate-float"><Icon name="rocket_launch" /></div>
        <h1 className="font-display text-5xl font-light tracking-[-0.03em]">404</h1>
        <p className="mt-3 text-slate-500 dark:text-giga-muted">
          This page drifted away into space. Let's get you back.
        </p>
        <Link to="/dashboard" className="btn-primary inline-flex mt-6 px-6 py-3">
          <Icon name="home" className="text-[1.1em]" /> Back to dashboard
        </Link>
      </div>
    </div>
  );
}
