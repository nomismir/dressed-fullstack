import React, { useState } from 'react';

type Question = {
    question: string;
    answer: string;
};

const faq: Question[] = [
    {
        question:
            "Je me suis inscrit(e) mais je n'ai pas reçu de mail de confirmation",
        answer: "Nous faisons actuellement face à une forte demande. Par conséquent, les places sont limitées. Si vous avez reçu un mail de confirmation au plus tard la veille au soir de la date que vous avez choisie, cela signifie que vous êtes sélectionné(e). Sinon, cela veut dire que c'est complet et qu'il faudra vous réinscrire pour une autre date.",
    },
    {
        question: 'Est-ce que vous faites des livraisons ?',
        answer: 'Non, le pop-up store Dressed est uniquement disponible en physique. Il est facilement accessible en métro et en bus (voir le plan).',
    },
    {
        question: 'Où se situe le pop-up store ?',
        answer: "Le pop-up store Dressed est situé à Paris, à la Gaité Lyrique. L'adresse complète est disponible sur Google et vous sera communiquée dans le mail de confirmation. Nous serons bientôt ouverts partout en France.",
    },
    {
        question: 'Acceptez-vous les dons de vêtements ?',
        answer: "Oui, si les vêtements sont en bon état. Des collectes seront organisées de temps à autre. Merci de contacter dressed@equipagesolidaire.fr pour plus d'informations.",
    },
    {
        question: "Dressed, c'est quoi ?",
        answer: 'Dressed est un magasin gratuit réservé aux étudiants en études supérieures.',
    },
    {
        question: "Combien d'articles puis-je prendre ?",
        answer: "Le choix d'articles est limité à trois par personne.",
    },
    {
        question: 'À quelle heure ouvre le store ?',
        answer: 'Le pop-up store ouvre à partir de 18h30.',
    },
    {
        question: 'Quelles tailles avez-vous de disponibles ?',
        answer: 'Nous avons des tailles allant du XS au XL.',
    },
];

function QA() {
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    return (
        <div className="p-8 w-full">
            <h2 className="text-4xl font-bold my-4">FAQ</h2>
            {faq.map((q, index) => (
                <div key={index} className="mb-4">
                    <button
                        className="flex justify-between w-full bg-white py-2 px-4 rounded-lg shadow-md"
                        onClick={() =>
                            setOpenQuestion(
                                openQuestion === index ? null : index
                            )
                        }
                    >
                        <span className="font-medium">{q.question}</span>
                        <svg
                            className={`w-5 h-5 transition-transform transform ${
                                openQuestion === index ? '-rotate-180' : ''
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                            />
                        </svg>
                    </button>
                    {openQuestion === index && (
                        <div className="mt-2 pl-2 border-l-2 border-gray-500">
                            <p>{q.answer}</p>
                        </div>
                    )}
                </div>
            ))}
            <div>
                <h2 className="text-4xl font-bold my-6">Plan</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d167971.3629542528!2d2.0736808!3d48.8667423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f94d316322b%3A0x6f8715b351da65de!2sDressed!5e0!3m2!1sen!2sfr!4v1681334652226!5m2!1sen!2sfr"
                    width="100%"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}

export default QA;
