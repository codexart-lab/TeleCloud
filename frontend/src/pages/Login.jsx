import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';
import { useToast } from '../hooks/useToast.jsx';
import Input from '../components/common/Input.jsx';
import Button from '../components/common/Button.jsx';
import AuthShell from '../components/auth/AuthShell.jsx';
import { validEmail } from '../utils/validators.js';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const toast = useToast();
  const nav = useNavigate();
  const loc = useLocation();

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!validEmail(email)) errs.email = 'Enter a valid email';
    if (!password) errs.password = 'Password required';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setLoading(true);
    try {
      await login(email, password);
      toast.success('Welcome back!');
      nav(loc.state?.from?.pathname || '/dashboard', { replace: true });
    } catch (err) {
      toast.error(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      eyebrow="Welcome back"
      heading="Your files are waiting on Telegram."
      blurb="Pick up where you left off. Everything you stored is one calm dashboard away."
      footer={
        <>
          No account?{' '}
          <Link className="link" to="/register">
            Create one
          </Link>
        </>
      }
    >
      <h2 className="font-display text-3xl font-light text-white">Sign in</h2>
      <p className="mt-2 text-sm text-giga-muted">Enter your credentials to continue.</p>

      <form onSubmit={submit} className="mt-8 space-y-5">
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          autoComplete="email"
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          autoComplete="current-password"
        />
        <Button type="submit" loading={loading} className="w-full py-3">
          Sign in
        </Button>
      </form>
    </AuthShell>
  );
}
