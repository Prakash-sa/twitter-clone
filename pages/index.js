import Head from 'next/head'
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import { getProviders, getSession, GetSessionParams, useSession } from "next-auth/react";
import Login from '../components/Login';
import Modal from '../components/Modal';

const Home = ({trendingResults,followResults,providers}) => {

  const {data:session}=useSession();

  if(!session)return <Login providers={providers}/>;


  return (
    <div >
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-black min-h-screen flex max-w-[1500px] mx-auto'>
        <Sidebar/>
        <Feed/>

        <Modal/>
      </main>
    </div>
  )
}

export default Home

export async function getServerSideProps(context){
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}