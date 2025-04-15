// pages/index.tsx
import Head from 'next/head';
import MAWebCalculator from '@/components/MAWebCalculator';

export default function Home() {
  return (
    <>
      <Head>
        <title>MA Web Tool</title>
      </Head>
      <main className="min-h-screen p-4 bg-gray-100 font-mono text-sm">
        <h1 className="text-xl mb-4">📈 MA-Based Position Advisor</h1>
        <MAWebCalculator />
      </main>
    </>
  );
}
