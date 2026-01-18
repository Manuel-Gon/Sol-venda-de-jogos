import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // 1. Estado para armazenar os dados do dashboard
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 2. Simulação de busca de dados (API)
  useEffect(() => {
    // Aqui você substituiria pelo seu endpoint real: fetch('https://api.seusite.com/vendas')
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulando um atraso de rede de 1 segundo
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Estrutura de dados que vem do seu banco
        const mockResponse = {
          dataAtual: "Sexta-feira, 6 Janeiro de 2026",
          cards: [
            { id: 1, titulo: 'Vendas Hoje', valor: 'R$ 1.520,00' },
            { id: 2, titulo: 'Novos Usuários', valor: '12' },
            { id: 3, titulo: 'Jogos Ativos', valor: '85' },
            { id: 4, titulo: 'Pedidos Pendentes', valor: '3' },
          ],
          graficoVendas: [80, 45, 90, 60, 75, 100], // valores para as barras
          alertas: ["Game Master - Baixo", "Console Pro - Esgotado"]
        };

        setData(mockResponse);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const obterDataAtual = () => {
    const data = new Date();
    
    // Formata a data para o padrão brasileiro
    const opcoes = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    const dataFormatada = data.toLocaleDateString('pt-BR', opcoes);
    
    // Coloca a primeira letra em maiúsculo (ex: "domingo" vira "Domingo")
    return dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);
  };

  // Se você estiver usando o useEffect que fizemos antes, 
  // pode atualizar o estado inicial assim:
  const [dataAtual] = useState(obterDataAtual());

  // Tela de carregamento simples
  if (loading) return <div className="loading">Carregando Dashboard...</div>;

  return (
    <main className="dashboard-container">
      <header className="dashboard-header">
        <h1>Relatório de Vendas</h1>
        <p>{dataAtual}</p>
      </header>

      <section className="dashboard-grid">
        {/* Mapeando os 4 cards superiores dinamicamente */}
        {data?.cards.map(item => (
          <div key={item.id} className={`card card-${item.id}`}>
            <h3>{item.titulo}</h3>
            <p className="stat-value">{item.valor}</p>
          </div>
        ))}

        {/* Card Lateral (Direita) - Gráfico de Barras Dinâmico */}
        <div className="card tall-card">
          <h3>Vendas por Categoria</h3>
          <div className="chart-container">
            {data?.graficoVendas.map((altura, index) => (
              <div 
                key={index} 
                className="bar" 
                style={{ height: `${altura}%` }} 
              />
            ))}
          </div>
        </div>

        {/* Card Grande (Inferior Esquerdo) */}
        <div className="card wide-card">
          <h3>Desempenho Semanal</h3>
          <div className="placeholder-content">
             {/* Espaço para um gráfico de linha real no futuro */}
             <div className="fake-line"></div>
          </div>
        </div>

        {/* Card Quadrado (Inferior Direito) */}
        <div className="card square-card">
          <h3>Alertas do Sistema</h3>
          <ul className="alert-list">
            {data?.alertas.map((alerta, i) => (
              <li key={i}>{alerta}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;