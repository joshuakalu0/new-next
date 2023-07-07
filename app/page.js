import About from "@/components/home/About";
import ContentUs from "@/components/home/ContentUs";
// import Display from "@/components/home/Display";
import Service from "@/components/home/Service";
import connectDB from "@/utiles/connectDB";
import { Catalog } from "@/utiles/db/catalogModel";
import { Report } from "@/utiles/db/reportModel";

import { User } from "@/utiles/db/userModel";
import Image from "next/image";

export default async function Home() {
  connectDB();
  const user = await User.find().select("bio aim photos");

  const catalog = await Catalog.find();
  console.log(user, catalog);
  const addreport = async (body) => {
    "use server";
    try {
      const nReport = await Report.create(body);
      console.log(nReport, "success");
      fun(true);
    } catch (error) {
      fun(false);
    }
  };
  return (
    <main className='flex flex-col  w-full pb-[30px]'>
      <About photo={user[0]?.photos || {}} bio={user[0]?.bio || {}} />
      <Service aim={user[0]?.aim || {}} />
      {/* <Display catalog={catalog} /> */}
      <ContentUs addRecord={addreport} />
    </main>
  );
}
