import React, { useState, useEffect } from 'react';
import { updateProfile, type User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './config/firebase';
import './Perfil.css';

interface PerfilProps {
  onVoltar: () => void;
}

const TOTAL_LICOES = 17;

const ORDEM_OFICIAL_LICOES = [
  "A BÍBLIA",
  "DEUS",
  "JESUS CRISTO",
  "O ESPÍRITO SANTO",
  "O PECADO",
  "A SALVAÇÃO",
  "NOÇÕES DE ESCATOLOGIA",
  "O CRISTÃO",
  "A CONDUTA CRISTÃ",
  "A ORAÇÃO",
  "O JEJUM",
  "O CULTO",
  "O BATISMO EM ÁGUAS",
  "A CEIA",
  "O DÍZIMO",
  "DISCÍPULO GERANDO DISCÍPULO",
  "SEITAS E HERESIAS"
];

export const Perfil: React.FC<PerfilProps> = ({ onVoltar }) => {
  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState<string>('');
  const [photoURL, setPhotoURL] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [progressoCount, setProgressoCount] = useState<number>(0);
  const [respostas, setRespostas] = useState<{ [key: string]: any }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [activeLicao, setActiveLicao] = useState<string | null>(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setDisplayName(currentUser.displayName || '');
      setPhotoURL(currentUser.photoURL || '');
      fetchUserData(currentUser.uid);
    }
  }, []);

  const normalizarChave = (str: string) => {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, '');
  };

  const fetchUserData = async (uid: string) => {
    try {
      const docRef = doc(db, 'users_progress', uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        
        if (data.profileDescription) {
          setDescription(data.profileDescription);
        }

        if (data.respostasQuestionarios) {
          setRespostas(data.respostasQuestionarios);
        }

        const licoesConcluidasSet = new Set<string>();

        Object.keys(data).forEach((key) => {
          if (typeof data[key] === 'boolean' && data[key] === true) {
            licoesConcluidasSet.add(normalizarChave(key));
          }
        });

        if (data.respostasQuestionarios) {
          Object.keys(data.respostasQuestionarios).forEach((key) => {
            licoesConcluidasSet.add(normalizarChave(key));
          });
        }

        setProgressoCount(licoesConcluidasSet.size);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setMessage(null);

    try {
      await updateProfile(user, {
        displayName: displayName,
        photoURL: photoURL
      });

      const docRef = doc(db, 'users_progress', user.uid);
      await setDoc(docRef, { profileDescription: description }, { merge: true });

      setMessage({ text: 'Perfil updated com sucesso!', type: 'success' });
      setTimeout(() => setShowEdit(false), 1500);
    } catch (error) {
      console.error(error);
      setMessage({ text: 'Erro ao atualizar o perfil. Tente novamente.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const toggleLicao = (licaoSlug: string) => {
    setActiveLicao(activeLicao === licaoSlug ? null : licaoSlug);
  };

  const percentualProgresso = Math.round((progressoCount / TOTAL_LICOES) * 100);
  const temRespostas = Object.keys(respostas).length > 0;

  const licoesOrdenadas = Object.keys(respostas).sort((a, b) => {
    const normA = normalizarChave(a.replace(/-/g, ' '));
    const normB = normalizarChave(b.replace(/-/g, ' '));
    
    const indexA = ORDEM_OFICIAL_LICOES.findIndex(l => {
      const oficialNorm = normalizarChave(l);
      return oficialNorm === normA || oficialNorm.includes(normA) || normA.includes(oficialNorm);
    });
    
    const indexB = ORDEM_OFICIAL_LICOES.findIndex(l => {
      const oficialNorm = normalizarChave(l);
      return oficialNorm === normB || oficialNorm.includes(normB) || normB.includes(oficialNorm);
    });
    
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    
    return normA.localeCompare(normB);
  });

  return (
    <div className="perfil-container">
      <button className="back-btn" onClick={onVoltar}>
        &larr; Voltar para o Sumário
      </button>

      <div className="perfil-header-box">
        <div className="avatar-wrapper">
          <img 
            src={photoURL || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'} 
            alt="Foto de Perfil" 
            className="perfil-avatar"
          />
        </div>
        <h2>{user?.displayName || 'Discípulo'}</h2>
        <p className="perfil-email">{user?.email}</p>
        {description && <p className="perfil-bio-preview">"{description}"</p>}
        
        <button className="btn-toggle-edit" onClick={() => setShowEdit(!showEdit)}>
          {showEdit ? 'Fechar Edição' : 'Editar Perfil'}
        </button>
      </div>

      {showEdit && (
        <form onSubmit={handleSave} className="perfil-form">
          <h3>Editar Informações</h3>

          {message && (
            <div className={`profile-message ${message.type}`}>
              {message.text}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Nome de Usuário</label>
            <input
              type="text"
              id="name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Seu nome ou apelido"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="photo">URL da Foto de Perfil</label>
            <input
              type="url"
              id="photo"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="https://exemplo.com/sua-foto.jpg"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="desc">Descrição / Notas Pessoais</label>
            <textarea
              id="desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Um pouco sobre sua jornada espiritual ou versículo favorito..."
              disabled={loading}
              rows={4}
            />
          </div>

          <button type="submit" className="btn-auth" disabled={loading}>
            {loading ? 'Salvando...' : 'Salvar Alterações'}
          </button>
        </form>
      )}

      <div className="progresso-card">
        <h3>Seu Progresso no Discipulado</h3>
        <div className="barra-progresso-total">
          <div 
            className="barra-progresso-preenchimento" 
            style={{ width: `${percentualProgresso}%` }}
          ></div>
        </div>
        <p className="progresso-texto">
          Você concluiu <strong>{progressoCount}</strong> de <strong>{TOTAL_LICOES}</strong> lições ({percentualProgresso}% concluído).
        </p>
      </div>

      <div className="respostas-card">
        <h3>Suas Respostas dos Questionários</h3>
        {!temRespostas ? (
          <p className="no-data-text">Você ainda não respondeu a nenhum questionário nas lições.</p>
        ) : (
          <div className="licoes-respostas-lista">
            {licoesOrdenadas.map((licaoSlug) => (
              <div key={licaoSlug} className={`licao-resposta-item ${activeLicao === licaoSlug ? 'ativa' : ''}`}>
                <div className="licao-resposta-header" onClick={() => toggleLicao(licaoSlug)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4>{licaoSlug.replace(/-/g, ' ').toUpperCase()}</h4>
                  <span className="seta-accordion">{activeLicao === licaoSlug ? '▲' : '▼'}</span>
                </div>
                
                {activeLicao === licaoSlug && (
                  <div className="licao-resposta-conteudo">
                    {Object.keys(respostas[licaoSlug])
                      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
                      .map((perguntaKey) => (
                        <div key={perguntaKey} className="pergunta-resposta-bloco">
                          <p className="pergunta-label"><strong>{perguntaKey}:</strong></p>
                          <p className="resposta-content">{respostas[licaoSlug][perguntaKey]}</p>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};