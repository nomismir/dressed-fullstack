import Navbar from '@/components/Organisms/Navbar';
import FormSignup from '@/components/Molecules/FormSignup';

export default function Signup() {
    return (
        <main className="flex min-h-screen relative flex-col items-center">
            <Navbar />
            <div className="h-[55vh] w-[55vw] bg-primary -z-10 bg-opacity-60 blur-[500px] absolute -right-[20vw]"></div>
            <div className="px-52 py-5">
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