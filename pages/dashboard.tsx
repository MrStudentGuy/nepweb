import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Dashboard: NextPage = () => {
    const router = useRouter();
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // firebase init stuff 
        } else {
          router.push('/login');
        }
      });

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard;