import Footer from '@/components/Molecules/Footer';
import QA from '@/components/Molecules/QA';
import Partner from '@/components/Molecules/Partner';
import SocialNetwork from '@/components/Molecules/SocialNetwork';
import Introduction from '@/components/Molecules/Introduction';
import Statistics from '@/components/Molecules/Statistics';
import Donation from '@/components/Molecules/Donation';
import Photos from '@/components/Molecules/Photos';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const DynamicHeroSection = dynamic(
    () => import('@/components/Molecules/HeroSection'),
    {
        ssr: false,
    }
);

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Head>
                <title>
                    Dressed la 1ère boutique 100% gratuite pour étudiant dans le
                    besoin
                </title>
                <meta
                    name="description"
                    content="Inscrivez-vous pour un magasin éphémère physique gratuit visant à aider les étudiants dans le besoin. DRESSED s'engage à fournir de l'aide aux étudiants en offrant des vêtements et des fournitures scolaires gratuitement."
                />
                <meta
                    name="keywords"
                    content="inscription, gratuit, étudiant, magasin éphémère, vêtements, fournitures scolaires, aide, soutien"
                />
                <meta name="author" content="Equipage Solidaire" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <DynamicHeroSection />
            <Introduction />
            <Statistics />
            <Partner />
            <QA />
            <SocialNetwork />
            <Donation />
            <Photos />
            <Footer />
        </main>
    );
}
