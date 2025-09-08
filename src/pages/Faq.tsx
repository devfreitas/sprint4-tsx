import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FaqItemData {
  question: string;
  answer: string;
}

const faqs: FaqItemData[] = [
  { question: 'Como posso agendar uma consulta?', answer: 'Você pode agendar uma consulta diretamente através da nossa página de "Consultas", selecionando a especialidade e o profissional desejado. Você também pode ligar para nossa central de atendimento.' },
  { question: 'Quais convênios médicos vocês aceitam?', answer: 'Aceitamos uma ampla variedade de convênios. Para confirmar se o seu é aceito, por favor, entre em contato conosco ou visite a seção de convênios em nosso site.' },
  { question: 'Preciso de jejum para fazer exames de sangue?', answer: 'Depende do exame. Exames como Glicemia e Colesterol exigem jejum. Outros, como o Hemograma, não. Verifique as instruções específicas na página de "Exames" ou entre em contato.' },
  { question: 'Qual o horário de funcionamento da clínica?', answer: 'Nossa clínica funciona de segunda a sexta, das 07:00 às 19:00, e aos sábados, das 08:00 às 12:00.' },
];

const FaqItem: React.FC<{ faq: FaqItemData; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none">
        <h3 className="text-xl font-semibold text-slate-800">{faq.question}</h3>
        {isOpen ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-slate-500" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-600">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Perguntas Frequentes (FAQ)</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Encontre respostas para as dúvidas mais comuns dos nossos pacientes.
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {faqs.map((faq, index) => (
          <FaqItem
            key={faq.question}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;