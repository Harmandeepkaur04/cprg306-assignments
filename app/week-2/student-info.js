import Link from "next/link";

export default function StudentInfo(){
   return(
   <main>
        <h1> Harmandeep Kaur</h1>
        <Link className="underline text-cyan-600 hover:text-cyan-300" href="https://github.com/Harmandeepkaur04/cprg306-assignments"> GitHub Repository </Link>
    </main>
   );
}