import React, { useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from './config/firebase';
import './Auth.css';

interface AuthProps {
  onAuthSuccess: () => void;
}

export const Auth: React.FC<AuthProps> = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const cleanEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      toast.error('Por favor, insira um e-mail válido.');
      return false;
    }

    if (password.length < 6) {
      toast.error('A senha deve conter pelo menos 6 caracteres.');
      return false;
    }

    if (!isLogin) {
      if (password !== confirmPassword) {
        toast.error('As senhas não coincidem.');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    const cleanEmail = email.trim();

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, cleanEmail, password);
      } else {
        await createUserWithEmailAndPassword(auth, cleanEmail, password);
        toast.success('Conta criada com sucesso! Seja bem-vindo à jornada.');
      }
      
      onAuthSuccess();
      
    } catch (err: any) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          toast.error('Este e-mail já está cadastrado.');
          break;
        case 'auth/invalid-credential':
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          toast.error('E-mail ou senha incorretos. Verifique os dados.');
          break;
        case 'auth/weak-password':
          toast.error('A senha escolhida deve ter pelo menos 6 caracteres.');
          break;
        case 'auth/too-many-requests':
          toast.error('Muitas tentativas malsucedidas. Esta conta foi bloqueada temporariamente.');
          break;
        default:
          toast.error('Ocorreu um erro inesperado. Tente novamente mais tarde.');
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Bem-vindo de volta' : 'Crie sua conta'}</h2>
      <p className="auth-subtitle">
        {isLogin 
          ? 'Prepare seu café e continue sua leitura diária.' 
          : 'Comece sua jornada de leitura da palavra em um ambiente aconchegante.'}
      </p>

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seuemail@exemplo.com"
            disabled={loading}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
            disabled={loading}
            required
          />
        </div>

        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="******"
              disabled={loading}
              required
            />
          </div>
        )}

        <button type="submit" className="btn-auth" disabled={loading}>
          {loading ? 'Carregando...' : isLogin ? 'Entrar' : 'Cadastrar'}
        </button>
      </form>

      <p className="auth-toggle">
        {isLogin ? 'Não tem uma conta? ' : 'Já possui uma conta? '}
        <span onClick={() => { if (!loading) { setIsLogin(!isLogin); setPassword(''); setConfirmPassword(''); } }}>
          {isLogin ? 'Cadastre-se' : 'Faça Login'}
        </span>
      </p>
    </div>
  );
};