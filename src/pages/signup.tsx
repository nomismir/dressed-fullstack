import Navbar from '@/components/Organisms/Navbar';
import FormSignup from '@/components/Molecules/FormSignup/FormSignup';

export default function Signup() {
    return (
        <main className="flex min-h-screen relative flex-col items-center">
            <Navbar />
            <div className="md:px-52 px-10 py-5">
                <h1 className="text-4xl font-semibold">
                    Inscription à Dressed
                </h1>
                <p className="pt-5">
                    Nous faisons actuellement face à un très grand nombre
                    d’inscriptions, les délais pour pouvoir bénéficier d’un
                    ticket d’entrée sont considérablement allongés. Merci de
                    votre compréhension 🙏
                </p>
                <FormSignup />
            </div>
        </main>
    );
}
