import Image from "next/image";
import Link from "next/link";
import {fetchUser} from '@/app/lib/data';

export default function Home() {

  const userEmail = "samecimen@gmail.com";

  return (
    <main className="mt-5 ml-5">
    
      <div>
        <Link href = "/login">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Login
            </button>
        </Link>
        <Link href = "/signup">
            <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Signup
            </button>
        </Link>
      </div>

      <div className="mt-10">
        <h2> Hello <span className="bg-blue-400 p-3 rounded text-gray">{userEmail}</span></h2>
      </div>

    </main>
  );
}
