import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';
import { useToast } from '../hooks/useToast.jsx';
import Input from '../components/common/Input.jsx';
import Button from '../components/common/Button.jsx';
import AuthShell from '../components/auth/AuthShell.jsx';
import { validEmail, validUsername, validName, strongEnough } from '../utils/validators.js';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', tg_username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const toast = useToast();
  const nav = useNavigate();

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!validName(form.name)) errs.name = 'At least 2 characters';
    if (!validEmail(form.email)) errs.email = 'Invalid email';
    if (!validUsername(form.tg_username)) errs.tg_username = '4-32 chars (letters, digits, _)';
    if (!strongEnough(form.password)) errs.password = 'Min 6 characters';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setLoading(true);
    try {
      await register({
        name: form.name.trim(),
        email: form.email.trim(),
        tg_username: form.tg_username.trim().replace(/^@/, ''),
        password: form.password,
      });
      toast.success('Account created!');
      nav('/dashboard');
    } catch (err) {
      toast.error(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      eyebrow="Create account"
      heading="Join a drive that never sends a bill."
      blurb="Free cloud storage on top of Telegram. Sign up in seconds and keep your files where they already live."
      footer={
        <>
          Already a member?{' '}
          <Link className="link" to="/login">
            Sign in
          </Link>
        </>
      }
    >
      <h2 className="font-display text-3xl font-light text-white">Create account</h2>
      <p className="mt-2 text-sm text-giga-muted">It only takes a minute.</p>

      <form onSubmit={submit} className="mt-8 space-y-5">
        <Input
          label="Name"
          placeholder="Jane Doe"
          value={form.name}
          onChange={update('name')}
          error={errors.name}
        />
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={update('email')}
          error={errors.email}
        />
        <Input
          label="Telegram username"
          placeholder="@yourhandle"
          value={form.tg_username}
          onChange={update('tg_username')}
          error={errors.tg_username}
          hint="Used to detect your chat ID after you message the bot."
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={update('password')}
          error={errors.password}
        />
        <Button type="submit" loading={loading} className="w-full py-3">
          Create account
        </Button>
      </form>
    </AuthShell>
  );
}
